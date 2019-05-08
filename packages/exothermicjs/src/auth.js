const configBuilder = () => {
  const def = require(`../exothermic.config`)
  let user = {}
  try {
    user = require(`../../../exothermic.config`)
  } catch (e) { }
  return {
    ...def,
    ...user,
  }
}

const conf = configBuilder()
const { auth } = conf

module.exports = require(`../../${auth}/src`)
