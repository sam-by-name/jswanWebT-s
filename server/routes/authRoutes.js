const express = require('express')
const request = require('superagent')
const db = require('../db/logins')
const router = express.Router()

router.use(express.json())


router.post('/register', (req,res) => {
  const {username, password} = req.body
  if (db.userExists(username)){
    return res.status(400).send('Username Taken')
  }
  else{
    db.CreateUser(username, password)
    return res.status(201)}
})

module.exports = router
