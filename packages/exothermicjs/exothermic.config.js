module.exports = {
  plugins: [
    `exothermicjs-plugin-markdown`,
  ],
  dashboard: `exothermicjs-dashboard-endo`,
  auth: `exothermicjs-lib-auth0`,
  dev: `/browser.js`,
  live: `https://unpkg.com/exothermicjs/dist/browser.exothermic.min.js`,
}
