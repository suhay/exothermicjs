require('dotenv').load() 

const Exothermic = require(".") 
const createError = require('http-errors') 
const express = require('express') 
const path = require('path') 
const favicon = require('serve-favicon') 
const logger = require('morgan') 

var indexRouter = require('./routes/index') 

var app = express() 

app.engine('exo', function (filePath, options, callback) {
  options = options || {}
  options._pages = options._pages || app.get('views')
  options._api = options._api || false
  const page = options._api ? Exothermic.hydrate(filePath, options) : Exothermic.build(filePath, options)
  return callback(null, page)
})

app.set('views', __dirname + (process.env.PUBLIC + '/pages/' || '/public/pages/'))
app.set('view engine', 'exo')

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico'))) 
app.use(logger('dev')) 
app.use(express.static(path.join(__dirname, (process.env.PUBLIC + '/static' || '/public/static') ))) 

app.get('/load/*', (req, res) => {
	res.render(req.params[0], { _api: true })
})

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