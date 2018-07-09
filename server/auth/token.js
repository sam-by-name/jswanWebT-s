const jwt = require('jsonwebtoken')

const db = require('../db/logins')

module.exports = token

function token (req, res) {
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
