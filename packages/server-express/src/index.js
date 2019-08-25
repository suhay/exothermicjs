require(`dotenv`).config()

const { get, hydrate, render } = require(`@exothermic/core/src/server`)
const auth = require(`@exothermic/core/src/auth`)

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
  theseOptions.loggedIn = theseOptions.loggedIn || process.env.LOGGED_IN === `true` || false
  theseOptions.ssrOnly = theseOptions.ssrOnly || process.env.SSR_ONLY === `true` || false
  const page = theseOptions.get
    ? get(filePath, theseOptions)
    : theseOptions.hydrate
      ? hydrate(filePath, theseOptions)
      : render(filePath, theseOptions)
  return callback(null, page)
})
app.set(`views`, [`${path.resolve(`./${process.env.PUBLIC}`)}/pages/` || `./public/pages/`, `${path.resolve(`./node_modules/@exothermic/core/templates`)}`])

app.set(`view engine`, `exo`)
app.use(helmet())
app.use(logger(`dev`))
if (auth) {
  app.use(auth)
}
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
