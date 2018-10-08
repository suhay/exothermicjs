var express = require('express')
const passport = require('passport')
var router = express.Router()

router.get('/', (req, res, next) => {
  res.render('index', {})
})

router.get('/login', passport.authenticate('auth0', {
  scope: 'openid email profile'}),
  function(req, res) {
    res.redirect("/admin/dashboard");
});

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

router.get('/callback',
  passport.authenticate('auth0', {
    failureRedirect: '/failure'
  }),
  function(req, res) {
    res.redirect(req.session.returnTo || '/admin/dashboard');
  }
);

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
