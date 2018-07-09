const express = require('express')
const db = require('../db/logins')
const token = require('../auth/token')

const router = express.Router()

router.post('/register', register, token.issue)

function register (req, res, next) {
  const {username, password} = req.body
  db.userExists(username)
    .then(exists => {
      if (exists) {
        return res.status(400).send({message: 'User exists'})
      }
      db.createUser(username, password)
        .then(() => next())
    })
    .catch(err => {
      res.status(500).send({message: err.message})
    })
}

module.exports = router
