const fakeUser = {
  id: 123456,
  username: `that_thing`,
  user: `that_thing`,
  _id: `fake`,
}

exports.mockMiddleware = (req, res, next) => {
  if (req && req.session && req.session.user_tmp) {
    req.user = req.session.user_tmp
  }
  if (next) {
    next()
  }
}

exports.mockRoute = (req, res) => {
  req.session = req.session || {}  
  req.session.user_tmp = fakeUser
  res.redirect(`/admin/dashboard`)
}
