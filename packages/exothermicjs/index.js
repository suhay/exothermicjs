'use strict';

if (process.env.NODE_ENV && process.env.NODE_ENV === 'development') {
  module.exports.default = require('./dist/exothermic.js');
} else {
  module.exports.default = require('./dist/exothermic.min.js');
}

module.exports.Upload = require('./src').Upload