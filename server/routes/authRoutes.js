const express = require('express')
const {userExists, createUser} = require('../db/logins')
const token = require('../auth/token')

const router = express.Router()

router.post('/register', register, token)

function register (req, res, next) {
  const {username, password} = req.body
  userExists(username)
    .then(exists => {
      if (exists) {
        return res.status(400).send({message: 'User exists'})
      }
      createUser(username, password)
        .then(() => next())
    })
    .catch(err => {
      console.log(err)
      res.status(500).send({message: err.message})
    })
}

module.exports = router

// router.post('/register', (req, res) => {         this way works too
//   const {username, password} = req.body
//   userExists(username)
//     .then(exists => {
//       if (exists) {
//         return res.status(400).send({message: 'User exists'})
//       }
//       createUser(username, password)
//         .then(() => token(req, res))          but req and res need to be passed othrough
//     })
//     .catch(err => {
//       console.log(err)
//       res.status(500).send({message: err.message})
//     })
// })
