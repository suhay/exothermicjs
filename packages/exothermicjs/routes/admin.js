const express = require('express');
const passport = require('passport');
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
const router = express.Router();

router.get('/', ensureLoggedIn, function(req, res, next) {
  res.render('admin/dashboard', {
    user: req.user ,
    userProfile: JSON.stringify(req.user, null, '  ')
  });
});

module.exports = router;