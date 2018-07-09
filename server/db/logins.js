const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)
const generate = require('../auth/hash')


module.exports = {
  createUser,
  userExists
}

function createUser (username, password, conn) {
  const db = conn || connection
  const hashVal = generate.generate(password)
  return db('logins')
    .insert({username, hash: hashVal})
}

function userExists (username, conn) {
  const db = conn || connection
  return db('logins')
    .count('id as n')
    .where('username', username)
    .then(count => {
      console.log(count)
      return count[0].n > 0
    })
}
