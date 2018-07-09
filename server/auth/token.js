const jwt = require('jsonwebtoken')
const verifyJwt = require('express-jwt')
const db = require('../db/logins')

module.exports = {
  issue,
  decode
}

function issue (req, res) {
  db.getUserByName(req.body.username)
    .then(login => {
      const token = createToken(login, process.env.JWT_SECRET)
      res.json({
        message: 'You are indeed you, well done!',
        token
      })
    })
}

function createToken (login, secret) {
  return jwt.sign({
    id: login.id,
    username: login.username
  }, secret, {
    expiresIn: '1d'
  })
}

function decode (req, res, next) {
  verifyJwt({
    secret: getSecret
  })(req, res, next)
}

function getSecret (req, payload, done) {
  done(null, process.env.JWT_SECRET)
}
