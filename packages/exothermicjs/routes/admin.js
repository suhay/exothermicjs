const express = require('express')
const passport = require('passport')
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn()
const router = express.Router()
const app = require('../server')

router.get('/dashboard', ensureLoggedIn, function(req, res, next) {
  req.session.options = { user: req.user.displayName, userProfile: JSON.stringify(req.user, null, '  ') }
  res.render('admin/dashboard', req.session.options)
})

router.get('/', ensureLoggedIn, function(req, res, next) {
  res.redirect('/admin/dashboard')
})

module.exports = router