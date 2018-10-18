const Exothermic = require("..")
const express = require('express')
const router = express.Router()
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn()

router.get('/*', ensureLoggedIn, (req, res, next) => {
  res.send(Exothermic.hydrate(req.params[0]), {})
})

// router.post()
module.exports = router