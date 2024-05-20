import inquirer from "inquirer";
import chalk from "chalk";
//Display a wellcome msg!
console.log(chalk.blueBright.bold("\n \t \t Wellcome To Your Personal ATM"));
console.log("=".repeat(60));
//my atm pin code
let pin = 10101;
let blnce = 10000;
const answer = await inquirer.prompt({
    name: "pin",
    type: "number",
    message: chalk.green.italic("Please Enter Your Pin"),
});
if (answer.pin === 10101) {
    console.log(chalk.yellowBright("\n \t Successfully login"));
    let optAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: chalk.green("Please Select One Option"),
            choices: ["Withdraw", "Balance Inquiry"],
        },
    ]);
    if (optAns.operation === "Balance Inquiry") {
        console.log("\t \t Your Total balance is ", blnce);
    }
    if (optAns.operation === "Withdraw") {
        let withdrawAns = await inquirer.prompt([
            {
                name: "WithdrawMethod",
                type: "list",
                message: "Select a withdrawl Method",
                choices: ["Fast cash", "Enter a Amount"],
            },
        ]);
        if (withdrawAns.WithdrawMethod === "Fast cash") {
            let fastcash = await inquirer.prompt([
                {
                    name: "Money",
                    type: "list",
                    choices: ["1000", "2000", "5000", "10000"],
                },
            ]);
            if (fastcash.Money > blnce) {
                console.log(chalk.red("\t \t Infficent Balance"));
            }
            else
                blnce -= fastcash.Money;
            {
                console.log(fastcash.Money, "withdraw Successfully Done");
                console.log(chalk.yellow.italic("Your remaning balance is", blnce));
            }
        }
        if (withdrawAns.WithdrawMethod === "Enter a Amount") {
            let AmountAns = await inquirer.prompt([
                {
                    name: "Amount",
                    type: "number",
                    message: "Enter a Amount",
                },
            ]);
            if (AmountAns.Amount > blnce) {
                console.log(chalk.red("\t \t Infficent Balance"));
            }
            else {
                blnce -= AmountAns.Amount;
                console.log(AmountAns.Amount, "withdraw Successfully Done");
                console.log(chalk.yellow.italic("Your remaning balance is", blnce));
            }
        }
    }
    console.log("=".repeat(60));
}
else {
    console.log(chalk.red("\n \t Incorrect Pin Number"));
}
