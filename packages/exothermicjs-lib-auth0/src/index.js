const dotenv = require('dotenv')
dotenv.config();

const express = require('express') 
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const MemoryStore = require('memorystore')(session)
const flash = require('connect-flash')

const router = express.Router()

const strategy = new Auth0Strategy(
  {
    domain: process.env.AUTH0_DOMAIN || '',
    clientID: process.env.AUTH0_CLIENT_ID || '',
    clientSecret: process.env.AUTH0_CLIENT_SECRET || '',
    callbackURL:
      process.env.AUTH0_CALLBACK_URL || 'http://localhost:3000/callback'
  },
  function(accessToken, refreshToken, extraParams, profile, done) {
    return done(null, profile);
  }
);

passport.use(strategy);
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))
router.use(session({
  store: new MemoryStore({
    checkPeriod: 86400000 // prune expired entries every 24h
  }),
  secret: process.env.SESSION_SECRET || 'shhhhhhhhh',
  resave: true,
  saveUninitialized: true,
}))
router.use(passport.initialize())
router.use(passport.session())
router.use(flash())
router.use(function(req, res, next) {
  if (req && req.query && req.query.error) {
    req.flash("error", req.query.error);
  }
  if (req && req.query && req.query.error_description) {
    req.flash("error_description", req.query.error_description);
  }
  next();
})

router.use(function(req, res, next) {
  res.locals.loggedIn = false;
  if (req.session && req.session.passport && typeof req.session.passport.user !== 'undefined') {
    res.locals.loggedIn = true;
  }
  next();
})

router.get('/login', passport.authenticate('auth0', { scope: 'openid email profile'}),
  function(req, res) {
    res.redirect("/admin/dashboard");
  }
);

router.get('/callback',
  passport.authenticate('auth0', {
    failureRedirect: '/failure'
  }),
  function(req, res) {
    res.redirect(req.session.returnTo || '/admin/dashboard');
  }
);

module.exports = router