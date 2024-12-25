import ora from "ora"
import inquirer from "inquirer"
import { verifyEmail } from "./verify.js";

export const promptUser = async () => {
    const { email } = await inquirer.prompt([
        {
            type: "input",
            name: "email",
            message: "Enter the email address to validate:",
            validate: (input) => (input.includes("@") ? true : "Please enter a valid email address."),
        },
    ]);
    await verifyEmail(email);
};