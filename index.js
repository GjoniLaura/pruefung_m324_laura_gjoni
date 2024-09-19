import chalk from 'chalk';
console.log(chalk.blue('It works!'));


  export function calculate(a, b, operation) {
    switch (operation) {
      case 'add':
        return a + b;
      case 'subtract':
        return a - b;
      default:
        throw new Error('Invalid operation');
    }
  }