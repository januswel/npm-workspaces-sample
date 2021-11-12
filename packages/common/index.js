const chalk = require('chalk')

module.exports = {
  foo: 1,
  bar: 'hooray',
  buz: () => {
    return chalk.blue('Hello')
  }
}
