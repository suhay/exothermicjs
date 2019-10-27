const path = require(`path`)

module.exports = {
  alias: {
    components: path.resolve(__dirname, `src/components`),
    auth: path.resolve(__dirname, `src/auth.js`),
    browser: path.resolve(__dirname, `src/browser.js`),
    config: path.resolve(__dirname, `src/config.js`),
    dashboard: path.resolve(__dirname, `src/dashboard.js`),
    hydrate: path.resolve(__dirname, `src/hydrate.js`),
    schema: path.resolve(__dirname, `src/schema.js`),
    server: path.resolve(__dirname, `src/server.js`),
    version: path.resolve(__dirname, `src/version.js`),
  },
}
