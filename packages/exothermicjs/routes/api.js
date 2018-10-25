const express = require('express')
const url = require('url')
const router = express.Router()
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn()

router.get('/*', ensureLoggedIn, (req, res, next) => {
  const url_parts = url.parse(req.url, true)
  res.render(url_parts.query.path.replace(/^\//, '').replace('?', ''), { _get: true})
})

// router.post()

// router.patch()

// router.put()

// router.delete()

module.exports = router