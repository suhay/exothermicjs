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
const { dashboard } = conf

module.exports = {
  load: () => require(`../../${dashboard}/src`),
  config: () => require(`../../${dashboard}/exothermic.config`),
}
