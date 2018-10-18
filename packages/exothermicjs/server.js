require('dotenv').load()

const Exothermic = require(".")
const createError = require('http-errors')
const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const helmet = require('helmet')
const authenticator = require('exothermicjs-lib-auth0')

const indexRouter = require('./routes/index')
const adminRouter = require('./routes/admin')
const apiRouter = require('./routes/api')

const app = express()

app.engine('exo', function (filePath, options, callback) {
  options = options || {}
  options._pages = options._pages || app.get('views')
  options._api = options._api || false
  const page = options._get 
    ? Exothermic.get(filePath, options) 
    : options._api 
      ? Exothermic.hydrate(filePath, options) 
      : Exothermic.render(filePath, options)
  return callback(null, page)
})

app.set('views', [process.env.PUBLIC + '/pages/' || './public/pages/', __dirname + '/templates'])
app.set('view engine', 'exo')

// app.use(favicon(process.env.PUBLIC + '/static' || './public/static', 'favicon.ico'))
app.use(helmet())
app.use(logger('dev'))
app.use(authenticator)
app.use(express.static(process.env.PUBLIC + '/static' || './public/static')) 

app.use('/admin', adminRouter)
app.use('/api', apiRouter)
app.use('/', indexRouter)

app.use(function(req, res, next) {
  const err = new Error('Not Found')
  err.status = 404 
  next(err) 
}) 

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500) 
    res.render('error', {
      message: err.message,
      error: err
    }) 
  }) 
}

app.use(function(err, req, res, next) {
  res.status(err.status || 500) 
  res.render('error', {
    message: err.message,
    error: {}
  }) 
}) 

module.exports = app 