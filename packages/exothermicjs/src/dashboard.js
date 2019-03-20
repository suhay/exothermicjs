const path = require('path')

const configBuilder = () => {
  const def = require('../exothermic.config')
  let user = {}
  try {
    user = require('../../../exothermic.config')
  }
  catch (e) { }
  return {
    ...def,
    ...user
  }
}

const conf = configBuilder()
const dashboard = conf.dashboard
module.exports = require('../../' + dashboard + '/src')
