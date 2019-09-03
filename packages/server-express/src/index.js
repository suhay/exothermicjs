require(`dotenv`).config()

const express = require(`express`)
const path = require(`path`)
const logger = require(`morgan`)
const helmet = require(`helmet`)
const fileUpload = require(`express-fileupload`)
const passport = require(`passport`)
const HttpBearerStrategy = require(`passport-http-bearer`).Strategy
const bodyParser = require(`body-parser`)
const cookieParser = require(`cookie-parser`)
const session = require(`express-session`)
const MemoryStore = require(`memorystore`)(session)

const { get, hydrate, render } = require(`@exothermic/core/src/server`)
const auth = require(`@exothermic/core/src/auth`)

const users = require(`./users`)
const indexRouter = require(`./routes/index`)
const adminRouter = require(`./routes/admin`)
const apiRouter = require(`./routes/api`)

const app = express()

delete process.env.BROWSER

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
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(session({
  store: new MemoryStore({
    checkPeriod: 86400000, // prune expired entries every 24h
  }),
  secret: process.env.SESSION_SECRET || `shhhhhhhhh`,
  resave: true,
  saveUninitialized: true,
}))

passport.use(new HttpBearerStrategy(
  (token, cb) => {
    users.findByToken(token, (err, user) => {
      if (err) { return cb(err) }
      if (!user) { return cb(null, false) }
      return cb(null, user)
    })
  }
))

if (auth) {
  app.use(auth)
}

passport.serializeUser((user, done) => {
  done(null, user)
})
passport.deserializeUser((user, done) => {
  done(null, user)
})

app.use(passport.initialize())
app.use(passport.session())

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
