require('dotenv').config()

const express = require('express')
const url = require('url')
const router = express.Router()
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn()
const fs = require(`fs`)
const path = require(`path`)

router.get('/site', ensureLoggedIn, (req, res) => {
  if (!fs.existsSync(path.join(process.env.PUBLIC, `site.json`))) {
    fs.writeFile(path.join(process.env.PUBLIC, `site.json`), '{}', (err) => {
      if (err) throw err;
      console.log("The file was succesfully saved!");
    }); 
  }
  res.sendFile('site.json', { root: path.resolve(process.env.PUBLIC) })
})

router.get('/*', ensureLoggedIn, (req, res) => {
  const url_parts = url.parse(req.url, true)
  if (url_parts.query && url_parts.query.path) {
    res.render(url_parts.query.path.replace(/^\//, '').replace('?', ''), { _get: true })
  }
})

router.patch('/*', ensureLoggedIn, (req, res) => {
  const url_parts = url.parse(req.url, true)
  if (fs.existsSync(path.join(process.env.PUBLIC, `pages/${url_parts.path}.exo`)) && req.body.text.length > 10) {
    fs.writeFile(path.join(process.env.PUBLIC, `pages/${url_parts.path}.exo`), req.body.text, (err) => {
      if (err) throw err;
      console.log("The file was succesfully saved!")
      res.send('Thing saved!')
    }); 
  }
  else {
    res.status(500).send('There was a problem saving this thing...');
  }
})

router.post('/upload', ensureLoggedIn, (req, res) => {
  let theFile = req.files.file
  theFile.mv(`${process.env.PUBLIC}/static/uploads/${req.body.filename}.${theFile.name.replace(/.*\.(.+)$/, '$1')}`, function(err) {
    if (err) {
      return res.status(500).send(err)
    }
    res.json({file: `/uploads/${req.body.filename}.${theFile.name.replace(/.*\.(.+)$/, '$1')}`})
  })
})

// router.post()

// router.put()

// router.delete()

module.exports = router