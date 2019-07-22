const express = require(`express`)
const ensureLoggedIn = require(`connect-ensure-login`).ensureLoggedIn()

const router = express.Router()

router.get(`/dashboard`, ensureLoggedIn, (req, res) => {
  req.session.options = { user: req.user.displayName, userProfile: JSON.stringify(req.user, null, `  `) }
  res.render(`admin/dashboard`, req.session.options)
})

router.get(`/`, ensureLoggedIn, (req, res) => {
  res.redirect(`/admin/dashboard`)
})

module.exports = router
