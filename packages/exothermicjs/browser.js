
if (process.env.NODE_ENV && process.env.NODE_ENV === `development`) {
  module.exports = require(`../../demo/public/static/browser.js`)
} else {
  module.exports = require(`./dist/browser.exothermic.min.js`)
}
