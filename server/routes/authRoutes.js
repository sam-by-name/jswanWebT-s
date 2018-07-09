const express = require('express')
// const request = require('superagent')
const db = require('../db/logins')
const router = express.Router()

router.use(express.json())

router.post('/register', (req, res) => {
  const {username, password} = req.body
  db.userExists(username)
    .then(exists => {
      if (exists) {
        return res.status(400).send({message: 'User exists'})
      }
      db.createUser(username, password)
        .then(() => res.status(201).end())
    })
    .catch(err => {
      res.status(500).send({message: err.message})
    })
})

module.exports = router
