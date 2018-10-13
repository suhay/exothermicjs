var express = require('express');
var router = express.Router();
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();

router.get('/', (req, res, next) => {
  res.render('index', {})
})

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

router.get('/failure', function(req, res) {
  var error = req.flash("error");
  var error_description = req.flash("error_description");
  req.logout();
  res.render('failure', {
    error: error[0],
    error_description: error_description[0],
  });
});

router.get('/*', (req, res, next) => {
  res.render(req.url.replace(/^\//, ''), {})
})

module.exports = router;
