const fs = require(`fs`)
const path = require(`path`)

exports.findByToken = (token, cb) => {
  const contents = fs.existsSync(`token.json`) ? JSON.parse(fs.readFileSync(path.resolve(`token.json`), `utf8`)) : {}
  if (contents.users) {
    const tokenUser = contents.users.find(user => user.token === token)
    return cb(null, tokenUser || null)
  }
  return cb(null, null)
}
