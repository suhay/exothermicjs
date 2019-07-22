import { configBuilder } from './exothermic'

const { dashboard } = configBuilder()

module.exports = require(`../../${dashboard}/src`)
