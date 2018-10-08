const dotenv = require('dotenv')
dotenv.load();

const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');

function authenticator() {
  const strategy = new Auth0Strategy(
    {
      domain: process.env.AUTH0_DOMAIN,
      clientID: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
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
  
  return [
    bodyParser.json(),
    bodyParser.urlencoded({ extended: false }),
    cookieParser(),
    session({
    secret: process.env.AUTH0_CLIENT_SECRET || 'shhhhhhhhh',
      resave: true,
      saveUninitialized: true
    }),
    passport.initialize(),
    passport.session(),
    flash(),
    function(req, res, next) {
      if (req && req.query && req.query.error) {
        req.flash("error", req.query.error);
      }
      if (req && req.query && req.query.error_description) {
        req.flash("error_description", req.query.error_description);
      }
      next();
    },
    function(req, res, next) {
      res.locals.loggedIn = false;
      if (req.session.passport && typeof req.session.passport.user !== 'undefined') {
        res.locals.loggedIn = true;
      }
      next();
    }
  ]
}

module.exports = authenticator