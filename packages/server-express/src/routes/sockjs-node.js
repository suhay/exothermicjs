const express = require(`express`)
const router = express.Router()

const httpProxy = require(`http-proxy`)
const apiProxy = httpProxy.createProxyServer()

router.all(`/*`, (req, res) => {
  apiProxy.web(req, res, { target: `http://localhost:8081/sockjs-node${req.url}` })
})

module.exports = router
