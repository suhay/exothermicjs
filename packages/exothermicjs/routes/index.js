const express = require('express');
const router = express.Router();

router.get('/load/*', (req, res) => {
  let options = req.session && req.session.options || {}
  options._hydrate = true
	res.render(req.params[0], options)
})

router.get('/', (req, res, next) => {
  res.render('index', {})
})

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get('/failure', (req, res) => {
  const error = req.flash("error");
  const error_description = req.flash("error_description");
  req.logout();
  req.session.options = { error: error[0], error_description: error_description[0] }
  res.render('failure', req.session.options);
});

router.get('/*', (req, res, next) => {
  res.render(req.url.replace(/^\//, ''), {})
})

module.exports = router;
