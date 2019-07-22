import { configBuilder } from './exothermic'

const { auth } = configBuilder()

module.exports = require(`../../${auth}/src`)
