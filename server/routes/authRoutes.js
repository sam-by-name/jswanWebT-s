const express = require('express')
const db = require('../db/logins')
const router = express.Router()
router.use(express.json())
const token = require('../auth/token')



router.post('/register', (req, res) => {
  const {username, password} = req.body
  db.userExists(username)
    .then(exists => {
      if (exists) {
        return res.status(400).send({message: 'User exists'})
      }
      db.createUser(username, password)
        .then(() => tokenIssue)
    })
    .catch(err => {
      console.log(err)
      res.status(500).send({message: err.message})
    })
})

module.exports = router
