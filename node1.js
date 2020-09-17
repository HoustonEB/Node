const args = require('minimist')(process.argv.slice(2));
const chalk = require('chalk');
const ProgressBar = require('progress');

console.log(chalk.yellow('node start'))
console.log(chalk.blue.bgWhite.bold('node env'))
console.log(process.argv, 'node argv')
console.log(args, 'minimist argv')

var bar = new ProgressBar(':bar :current', { total: 10 });
var timer = setInterval(function () {
  bar.tick();
  if (bar.complete) {
    console.log('\ncomplete\n');
    clearInterval(timer);
  }
}, 100);
// process.exit(1)
