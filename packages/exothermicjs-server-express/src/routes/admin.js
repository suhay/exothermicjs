require('dotenv').config()
const path = require(`path`)

const express = require('express')
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn()
const router = express.Router()
const { Auth } = require('exothermicjs/exothermic.config')

router.get('/dashboard', ensureLoggedIn, (req, res, next) => {
  req.session.options = { user: req.user.displayName, userProfile: JSON.stringify(req.user, null, '  ') }
  if (Auth) {
    res.send(Auth)
  }
  else {
    res.render('admin/dashboard', req.session.options)
  }
})

router.get('/', ensureLoggedIn, (req, res, next) => {
  res.redirect('/admin/dashboard')
})

module.exports = router