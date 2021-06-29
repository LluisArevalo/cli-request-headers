const chalk = require("chalk");

const showInfo = (msg) => console.log(chalk.white(msg));
const showSuccess = (msg) => console.log(chalk.green(msg));
const showError = (msg) => console.log(chalk.red(msg));

module.exports = {
  showInfo,
  showSuccess,
  showError,
};
