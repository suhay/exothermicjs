'use strict';

if (process.env.NODE_ENV && process.env.NODE_ENV === 'development') {
  module.exports = require('./dist/exothermicjs-server-express.min.js');
} else {
  module.exports = require('./dist/exothermicjs-server-express.min.js');
}