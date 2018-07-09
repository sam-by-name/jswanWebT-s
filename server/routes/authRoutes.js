const express = require('express')
const request = require('superagent')
const userFn = require('../db/logins')
const router = express.Router()

router.use(express.json())


router.post('/register', (req,res) => {
  const userInfo =  {username, password} = req.body
  if (userFn.userExists(userInfo.username)){
    return res.status(200).send('Username Taken')
  }
  else{userFn.CreateUser(userInfo.username, userInfo.password)}
})


module.exports = router
