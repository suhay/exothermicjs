require('dotenv').config()

const exothermic = require("exothermicjs")
const auth = require("exothermicjs/src/auth")

const createError = require('http-errors')
const express = require('express')
const path = require('path')
const logger = require('morgan')
const helmet = require('helmet')
const fileUpload = require('express-fileupload')

const indexRouter = require('./routes/index')
const adminRouter = require('./routes/admin')
const apiRouter = require('./routes/api')

const app = express()

app.engine('exo', function (filePath, options, callback) {
  options = options || {}
  options._pages = options._pages || app.get('views')
  options._hydrate = options._hydrate || false
  const page = options._get
    ? exothermic.get(filePath, options)
    : options._hydrate
      ? exothermic.hydrate(filePath, options) 
      : exothermic.render(filePath, options)
  return callback(null, page)
})

app.set('views', [path.resolve(process.env.PUBLIC) + '/pages/' || './public/pages/', path.resolve(__dirname) + '/../../exothermicjs/templates'])

app.set('view engine', 'exo')
app.use(helmet())
app.use(logger('dev'))
if (auth) {
  app.use(auth)
}
app.use(express.static(path.resolve(process.env.PUBLIC) + '/static' || './public/static')) 
app.use(fileUpload())

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
    console.error(err)
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