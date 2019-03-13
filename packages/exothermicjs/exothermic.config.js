"use strict";

module.exports = {
  plugins: [
    require('exothermicjs-plugin-markdown')
  ],
  Dashboard: require('exothermicjs-dashboard-endo'),
  Auth: require('exothermicjs-lib-auth0')
}