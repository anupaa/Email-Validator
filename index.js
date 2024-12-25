import figlet from "figlet";
import chalk from "chalk"
import { promptUser } from "./src/inputPrompt.js";

console.log(
    chalk.yellow(figlet.textSync("Email Id Validator Tool", { horizontalLayout: "full" }))
);
promptUser()