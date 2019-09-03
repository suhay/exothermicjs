require(`dotenv`).config()

const express = require(`express`)
const Auth0Strategy = require(`passport-auth0`)
const flash = require(`connect-flash`)
const passport = require(`passport`)

const router = express.Router()

if (process.env.AUTH0_DOMAIN && process.env.AUTH0_CLIENT_ID && process.env.AUTH0_CLIENT_SECRET) {
  const strategy = new Auth0Strategy(
    {
      domain: process.env.AUTH0_DOMAIN,
      clientID: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      callbackURL: process.env.AUTH0_CALLBACK_URL || `http://localhost:3000/callback`,
    },
    (accessToken, refreshToken, extraParams, profile, done) => done(null, profile),
  )
  passport.use(strategy)
  
  router.use(passport.initialize())
  router.use(passport.session())
}

if (process.env.NODE_ENV === `test` || process.env.NODE_ENV === `development`) {
  router.use(require(`./mock`).mockMiddleware)
  router.get(`/auth/fake`, require(`./mock`).mockRoute)
}

router.use(flash())
router.use((req, res, next) => {
  if (req && req.query && req.query.error) {
    req.flash(`error`, req.query.error)
  }
  if (req && req.query && req.query.error_description) {
    req.flash(`error_description`, req.query.error_description)
  }
  next()
})

router.use((req, res, next) => {
  res.locals.loggedIn = false
  if ((req.session && req.session.passport && typeof req.session.passport.user !== `undefined`)
      || ((process.env.NODE_ENV === `test` || process.env.NODE_ENV === `development`) && req.session && req.session.user_tmp)) {
    res.locals.loggedIn = true
  }
  next()
})

router.get(`/login`, passport.authenticate(`auth0`, { scope: `openid email profile` }),
  (req, res) => {
    res.redirect(`/admin/dashboard`)
  })

router.get(`/callback`,
  passport.authenticate(`auth0`, {
    failureRedirect: `/failure`,
  }),
  (req, res) => {
    res.redirect(req.session.returnTo || `/admin/dashboard`)
  })

module.exports = router
