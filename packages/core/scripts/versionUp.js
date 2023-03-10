/* eslint-disable */
const path = require('path')
const fs = require('fs')
const pkg = require('../package.json')

const version = pkg.version

const file = fs.openSync(path.resolve('src/version.ts'), 'w')
fs.writeFileSync(file, `export default '${version}'`)
fs.closeSync(file)

