require(`dotenv`).config()

const express = require(`express`)
const ensureLoggedIn = require(`connect-ensure-login`).ensureLoggedIn()
const fs = require(`fs`)
const url = require(`url`)
const path = require(`path`)

const router = express.Router()

const isLoggedIn = (req, res, next) => process.env.LOGGED_IN === `true` ? next() : ensureLoggedIn

router.get(`/dashboard`, isLoggedIn, (req, res) => {
  req.session.options = { user: req.user.displayName || req.user.user, userProfile: req.user }
  res.render(`admin/dashboard`, req.session.options)
})

router.get(`/`, isLoggedIn, (req, res) => {
  res.redirect(`/admin/dashboard`)
})

router.patch(`/*`, isLoggedIn, (req, res) => {
  const urlParts = url.parse(req.url, true)
  if (fs.existsSync(path.join(process.env.PUBLIC, `pages/${urlParts.path}.exo`)) && req.body.text.length > 10) {
    fs.writeFile(path.join(process.env.PUBLIC, `pages/${urlParts.path}.exo`), req.body.text, (err) => {
      if (err) throw err
      res.send(`Thing saved!`)
    })
  } else {
    res.status(500).send(`There was a problem saving this thing...`)
  }
})

router.post(`/upload`, isLoggedIn, (req, res) => {
  const theFile = req.files.file
  theFile.mv(`${process.env.PUBLIC}/static/uploads/${req.body.filename}.${theFile.name.replace(/.*\.(.+)$/, `$1`)}`, (err) => {
    if (err) {
      return res.status(500).send(err)
    }
    res.json({ file: `/uploads/${req.body.filename}.${theFile.name.replace(/.*\.(.+)$/, `$1`)}` })
    return res.status(200).send(`Upload complete!`)
  })
})

module.exports = router
