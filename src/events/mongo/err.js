const chalk = require("chalk");

module.exports = {
  name: "err",
  execute() {
    console.log(chalk.red(`An error ocurred with the database connection \n${err}.`));
  },
}