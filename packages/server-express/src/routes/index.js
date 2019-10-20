const express = require(`express`)
const path = require(`path`)

const router = express.Router()

router.get(`/load/*`, (req, res) => {
  const options = req.session && req.session.options ? req.session.options : {}
  options.hydrate = true
  if (req.params[0].endsWith(`.exo`) || req.params[0].indexOf(`.`) < 0) {
    res.render(req.params[0], options, (err, html) => {
      if (err) {
        console.error(err)
        res.status(404).send(`Sorry, can't find that!`)
      }
      res.send(html)
    })
  } else {
    res.sendFile(req.params[0], { root: path.resolve(`./${process.env.PUBLIC}`) })
  }
})

router.post(`/load/*`, (req, res) => {
  const options = req.session && req.session.options ? req.session.options : {}
  options.hydrate = true

  if (req.params[0].endsWith(`.exo`) || req.params[0].indexOf(`.`) < 0) {
    options.items = req.body
    res.render(req.params[0], options, (err, html) => {
      if (err) {
        console.error(err)
        res.status(404).send(`Sorry, can't find that!`)
      }
      res.send(html)
    })
  } else {
    res.sendFile(req.params[0], { root: path.resolve(`./${process.env.PUBLIC}`) })
  }
})

router.get(`/`, (req, res) => {
  res.render(`index`, { dashboard: !!req.user }, (err, html) => {
    if (err) {
      console.error(err)
      res.status(404).send(`Well, this is awkward... I can't seem to find the homepage!`)
    }
    res.send(html)
  })
})

router.get(`/logout`, (req, res) => {
  req.logout()
  res.redirect(`/`)
})

router.get(`/failure`, (req, res) => {
  const error = req.flash(`error`)
  const errorDescription = req.flash(`error_description`)
  req.logout()
  req.session.options = { error: error[0], error_description: errorDescription[0] }
  res.render(`failure`, req.session.options)
})

router.post(`/*`, (req, res) => {
  res.status(403).send(`Yup, that's a post!!`)
})

router.put(`/*`, (req, res) => {
  res.status(403).send(`Where did you want me to put that?`)
})

router.patch(`/*`, (req, res) => {
  res.status(403).send(`Yarr!`)
})

router.delete(`/*`, (req, res) => {
  res.status(403).send(`Are you sure?`)
})

router.get(`/*`, (req, res) => {
  res.render(req.url.replace(/^\//, ``), { dashboard: !!req.user }, (err, html) => {
    if (err) {
      console.error(err)
      res.status(404).send(`Sorry, can't find that!`)
    }
    res.send(html)
  })
})

module.exports = router
