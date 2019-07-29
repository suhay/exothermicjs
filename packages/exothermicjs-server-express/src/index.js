require(`dotenv`).config()

const exothermic = require(`exothermicjs`)
// const auth = require(`exothermicjs/src/auth`)

const express = require(`express`)
const path = require(`path`)
const logger = require(`morgan`)
const helmet = require(`helmet`)
const fileUpload = require(`express-fileupload`)

const indexRouter = require(`./routes/index`)
const adminRouter = require(`./routes/admin`)
const apiRouter = require(`./routes/api`)

const app = express()

app.engine(`exo`, (filePath, options, callback) => {
  const theseOptions = options || {}
  theseOptions.pages = theseOptions.pages || app.get(`views`)
  theseOptions.hydrate = theseOptions.hydrate || false
  const page = theseOptions.get
    ? exothermic.get(filePath, theseOptions)
    : theseOptions.hydrate
      ? exothermic.hydrate(filePath, theseOptions)
      : exothermic.render(filePath, theseOptions)
  return callback(null, page)
})
app.set(`views`, [`${path.resolve(`./${process.env.PUBLIC}`)}/pages/` || `./public/pages/`, `${path.resolve(`./node_modules/exothermicjs/templates`)}`])

app.set(`view engine`, `exo`)
app.use(helmet())
app.use(logger(`dev`))
// if (auth) {
//   app.use(auth)
// }
app.use(express.static(`${path.resolve(`./${process.env.PUBLIC}`)}/static` || `./public/static`))
app.use(fileUpload())

if (app.get(`env`) === `development`) {
  app.use(`/sockjs-node`, require(`./routes/sockjs-node`))
}

app.use(`/admin`, adminRouter)
app.use(`/api`, apiRouter)
app.use(`/`, indexRouter)

app.use((req, res, next) => {
  const err = new Error(`Not Found`)
  err.status = 404
  next(err)
})

if (app.get(`env`) === `development`) {
  app.use((err, req, res) => {
    res.status(err.status || 500)
    console.error(err)
    res.render(`error`, {
      message: err.message,
      error: err,
    })
  })
}

app.use((err, req, res) => {
  res.status(err.status || 500)
  res.render(`error`, {
    message: err.message,
    error: {},
  })
})

module.exports = app
