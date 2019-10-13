import configBuilder from './config'

const { dashboard } = configBuilder()

module.exports = dashboard ? require(`${dashboard}`) : { set: false }
