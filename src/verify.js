import { promises as dns } from "node:dns";
import ora from "ora"
import chalk from "chalk"

export const verifyEmail = async (email) => {
    try {
        const spinner = ora("Validating email doamin...").start()

        // Extract domain from email id
        const domain = email?.split("@")[1];
        if (!domain) {
            spinner.fail(chalk.red("Invalid email format."));
            return;
        }
        // Fetch MX, SPF, DMARC records
        const [mxRecords, spfRecords, dmarcRecords] = await Promise.all([
            dns.resolveMx(domain).catch(() => []),
            dns.resolveTxt(domain).catch(() => []),
            dns.resolveTxt(`_dmarc.${domain}`).catch(() => []),
        ]);
        spinner.stop();
        // Check and display results
        console.log(chalk.blue(`\nResults for domain: ${chalk.bold(domain)}`));
        console.log(chalk.yellow("MX Records: "), mxRecords.length > 0 ? chalk.green("Found") : chalk.red("Not Found"));
        console.log(chalk.yellow("SPF Records: "), spfRecords.length > 0 ? chalk.green("Found") : chalk.red("Not Found"));
        console.log(chalk.yellow("DMARC Records: "), dmarcRecords.length > 0 ? chalk.green("Found") : chalk.red("Not Found"));

        // Final validation result
        if (mxRecords.length > 0 && spfRecords.length > 0 && dmarcRecords.length > 0) {
            console.log(chalk.green("\n✔ Yeah! The email domain is valid."));
        } else {
            console.log(chalk.red("\n✘ Nope! The email domain is not valid."));
        }
    } catch (error) {
        console.log(error);
    }
}