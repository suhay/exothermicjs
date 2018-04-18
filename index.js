'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/reacty.min.js');
} else {
  module.exports = require('./lib/reacty.js');
}