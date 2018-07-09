module.exports = issue

const db = require('../db/logins')
const jsw = require('jsonwebtoken')


function issue (req, res) {
  db.getUserByName(req.body.username)
    .then(login => {
      const token = createToken(login, process.env.JWT_SECRET)
      res.json({
        message: 'Authentication successful.',
        token
      })
    })
}

function createToken (logins, secret) {
  return jwt.sign({
    id: login.id,
    username: login.username
  }, secret, {
    expiresIn: '1d'
  })
}

 