var Exothermic = require("..");

var express = require('express')
var router = express.Router()

router.get('/', (req, res, next) => {
  res.render('index', {})
})

router.get('/*', (req, res, next) => {
  res.render(req.url.replace(/^\//, ''), {})
})

module.exports = router;
