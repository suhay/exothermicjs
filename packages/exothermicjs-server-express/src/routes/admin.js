// eslint-disable-next-line global-require
require(`dotenv`).config({ path: require(`find-config`)(`.env`) })

const express = require(`express`)
const ensureLoggedIn = require(`connect-ensure-login`).ensureLoggedIn()

const router = express.Router()
const auth = require(`exothermicjs/src/auth`)

router.get(`/dashboard`, ensureLoggedIn, (req, res) => {
  req.session.options = { user: req.user.displayName, userProfile: JSON.stringify(req.user, null, `  `) }
  if (auth) {
    res.send(auth)
  } else {
    res.render(`admin/dashboard`, req.session.options)
  }
})

router.get(`/`, ensureLoggedIn, (req, res) => {
  res.redirect(`/admin/dashboard`)
})

module.exports = router
