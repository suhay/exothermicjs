const express = require('express')
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn()
const router = express.Router()
const { dashboard } = require('exothermicjs-dashboard-endo')

router.get('/dashboard', (req, res, next) => {
//   req.session.options = { user: req.user.displayName, userProfile: JSON.stringify(req.user, null, '  ') }
  if (dashboard) {
    const site = require('../' + process.env.PUBLIC + '/site.json')
    res.send(dashboard(site))
  }
  else {
    res.render('admin/dashboard', req.session.options)
  }
})

router.get('/', ensureLoggedIn, (req, res, next) => {
  res.redirect('/admin/dashboard')
})

module.exports = router