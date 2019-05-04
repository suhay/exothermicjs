require('dotenv').config()

const express = require('express')
const router = express.Router()
const fs = require(`fs`)
const path = require(`path`)

router.get('/load/module/:module', (req, res) => {
  const mod = req.params.module
  if ((mod.includes('exothermicjs-dashboard') || mod.includes('exothermicjs-plugin'))) {
    const cwd = process.cwd()
    let modulePath = path.resolve(`${cwd}/../${mod}/index.js`)
    if (fs.existsSync(modulePath)) {
      console.log(modulePath)
      res.sendFile(modulePath)
    }
    else {
      res.send('Module not found!')
      throw new Error('Module not found');
    }
  }
  else {
    res.send('Module not found!')
    throw new Error('Module not found');
  }
})

router.get('/load/*', (req, res) => {
  let options = req.session && req.session.options ? req.session.options : {}
  options._hydrate = true
  if (req.params[0].endsWith('.exo') || req.params[0].indexOf('.') < 0) {
	  res.render(req.params[0], options)
  }
  else {
    res.sendFile(req.params[0], { root: path.resolve(process.env.PUBLIC) })
  }
})

router.get('/', (req, res, next) => {
  res.render('index', { _dashboard: req.user ? true : false })
})

router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

router.get('/failure', (req, res) => {
  const error = req.flash("error")
  const error_description = req.flash("error_description")
  req.logout()
  req.session.options = { error: error[0], error_description: error_description[0] }
  res.render('failure', req.session.options)
})

router.post('/*', (req, res) => {
  res.send('posted!')
})

router.get('/*', (req, res, next) => {
  res.render(req.url.replace(/^\//, ''), { _dashboard: req.user ? true : false })
})

module.exports = router
