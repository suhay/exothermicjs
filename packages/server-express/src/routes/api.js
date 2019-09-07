const express = require(`express`)
const url = require(`url`)
const fs = require(`fs`)
const path = require(`path`)
const passport = require(`passport`)

const router = express.Router()

router.get(`/site`, passport.authenticate(`bearer`, { session: false }), (req, res) => {
  if (!fs.existsSync(path.join(process.env.PUBLIC, `site.json`))) {
    fs.writeFile(path.join(process.env.PUBLIC, `site.json`), `{}`, (err) => {
      if (err) throw err
    })
  }
  res.sendFile(`site.json`, { root: path.resolve(process.env.PUBLIC) })
})

router.get(`/*`, passport.authenticate(`bearer`, { session: false }), (req, res) => {
  const urlParts = url.parse(req.url, true)
  if (urlParts.query && urlParts.query.path) {
    res.render(urlParts.query.path.replace(/^\//, ``).replace(`?`, ``), { get: true })
  } else if (urlParts.query) {
    res.render(urlParts.path.replace(/^\//, ``), { get: true })
  } else {
    res.status(500).send(`I couldn't find that thing...`)
  }
})

router.patch(`/*`, passport.authenticate(`bearer`, { session: false }), (req, res) => {
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

router.post(`/upload`, passport.authenticate(`bearer`, { session: false }), (req, res) => {
  const theFile = req.files.file
  theFile.mv(`${process.env.PUBLIC}/static/uploads/${req.body.filename}.${theFile.name.replace(/.*\.(.+)$/, `$1`)}`, (err) => {
    if (err) {
      return res.status(500).send(err)
    }
    res.json({ file: `/uploads/${req.body.filename}.${theFile.name.replace(/.*\.(.+)$/, `$1`)}` })
    return res.status(200).send(`Upload complete!`)
  })
})

// router.post()

// router.put()

// router.delete()

module.exports = router
