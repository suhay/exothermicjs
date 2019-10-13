import configBuilder from './config'

const { auth } = configBuilder()

module.exports = auth ? require(`${auth}`) : { set: false }
