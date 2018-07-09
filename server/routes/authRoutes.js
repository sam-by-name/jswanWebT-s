const express = require('express')
// const request = require('superagent')
const userFn = require('../db/logins')
const router = express.Router()

router.use(express.json())

router.post('/register', (req, res) => {
  const {username, password} = req.body
  if (userFn.userExists(username)) {
    return res.status(200).send('Username Taken')
  } else { userFn.CreateUser(username, password) }
})

module.exports = router
