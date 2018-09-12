'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/browser.reacty.min.js');
} else {
  module.exports = require('./dist/browser.reacty.js');
}