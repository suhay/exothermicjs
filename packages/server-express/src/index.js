require(`dotenv`).config()

const fs = require(`fs`)
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
const NodeCache = require(`node-cache`)

const { get, hydrate, render } = process.env.NODE_ENV === `production` 
  ? require(`@exothermic/core/dist/server.exothermic`) 
  : require(`@exothermic/core/src/server`)
const auth = require(`@exothermic/core/src/auth`)
const configBuilder = require(`@exothermic/core/src/config`).default

const users = require(`./users`)
const indexRouter = require(`./routes/index`)
const adminRouter = require(`./routes/admin`)
const apiRouter = require(`./routes/api`)

const app = express()
const cache = new NodeCache({
  deleteOnExpire: false,
})

const defaultViews = [
  `${process.env.PUBLIC ? path.resolve(`./${process.env.PUBLIC}/pages/`) : `./public/pages/`}`, 
  `${path.resolve(`./node_modules/@exothermic/core/templates`)}`,
]

const cachePluginPaths = () => {
  const { plugins, dashboard, auth: configAuth } = configBuilder()

  const pluginPaths = plugins
    .filter((value) => {
      const pluginPath = path.resolve(`./node_modules/${value}/templates`)
      return fs.existsSync(pluginPath)
    })
    .map((value) => path.resolve(`./node_modules/${value}/templates`))

  if (dashboard && dashboard.length > 0) {
    const dashboardPath = path.resolve(`./node_modules/${dashboard}/templates`)
    if (fs.existsSync(dashboardPath)) {
      pluginPaths.push(dashboardPath)
    }
  }

  if (configAuth && configAuth.length > 0) {
    const authPath = path.resolve(`./node_modules/${configAuth}/templates`)
    if (fs.existsSync(authPath)) {
      pluginPaths.push(authPath)
    }
  }

  return pluginPaths
}

const cachePluginMiddleware = () => {
  const router = express.Router()
  const { plugins, dashboard, auth: configAuth } = configBuilder()

  plugins.forEach((value) => {
    if (fs.existsSync(path.resolve(`./node_modules/${value}/__express.js`))) {
      require(path.resolve(`./node_modules/${value}/__express`))(router)
    }
  })

  if (fs.existsSync(path.resolve(`./node_modules/${dashboard}/__express.js`))) {
    require(path.resolve(`./node_modules/${dashboard}/__express`))(router)
  }

  if (fs.existsSync(path.resolve(`./node_modules/${configAuth}/__express.js`))) {
    require(path.resolve(`./node_modules/${configAuth}/__express`))(router)
  }

  return router
}

cache.on(`expired`, (key) => {
  switch (key) {
    case `pluginPaths`:
      console.log(`...rebuilding pluginPaths cache...`)
      cache.set(key, cachePluginPaths(), 60)
      break
    case `pluginMiddleware`:
      console.log(`...rebuilding pluginMiddleware cache...`)
      cache.set(key, cachePluginMiddleware(), 60)
      break
    default:
      break
  }
})

delete process.env.BROWSER

app.engine(`exo`, (filePath, options, callback) => {
  const opts = options || {}
  opts.pages = opts.pages || app.get(`views`)
  opts.hydrate = opts.hydrate || false
  opts.loggedIn = opts.loggedIn || process.env.LOGGED_IN === `true` || false
  opts.ssrOnly = opts.ssrOnly || process.env.SSR_ONLY === `true` || false
  const page = opts.get
    ? get(filePath, opts)
    : opts.hydrate
      ? hydrate(filePath, opts)
      : render(filePath, opts)
  return callback(null, page)
})

app.set(`views`, defaultViews)
app.set(`view engine`, `exo`)

app.use(helmet())
app.use(logger(process.env.NODE_ENV === `production` ? `common` : `dev`))
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

if (auth && auth.set !== false) {
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

app.use(express.static(`${process.env.PUBLIC ? path.resolve(`./${process.env.PUBLIC}/static`) : `./public/static`}`))
app.use(fileUpload())

if (process.env.NODE_ENV === `development`) {
  app.use(`/sockjs-node`, require(`./routes/sockjs-node`))
}

cache.set(`pluginPaths`, cachePluginPaths(), 60)
cache.set(`pluginMiddleware`, cachePluginMiddleware(), 60)

app.use((req, res, next) => {
  const pluginPaths = cache.get(`pluginPaths`)
  if (typeof pluginPaths !== `undefined`) {
    app.set(`views`, [...defaultViews, ...pluginPaths])
  }
  next()
})

app.use((req, res, next) => {
  const pluginMiddleware = cache.get(`pluginMiddleware`)
  if (typeof pluginMiddleware !== `undefined`) {
    pluginMiddleware(req, res, next)
  } else {
    next()
  }
})

app.use(`/admin`, adminRouter)
app.use(`/api`, apiRouter)
app.use(`/`, indexRouter)

app.use((req, res, next) => {
  const err = new Error(`Not Found`)
  err.status = 404
  next(err)
})

if (process.env.NODE_ENV === `development`) {
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
