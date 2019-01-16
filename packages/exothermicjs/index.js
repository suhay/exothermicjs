'use strict';

if (process.env.NODE_ENV && process.env.NODE_ENV === 'development') {
  module.exports = require('./dist/exothermic.js');
} else {
  module.exports = require('./dist/exothermic.min.js');
}

