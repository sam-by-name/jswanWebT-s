const path = require('path')
const config = require(path.join(__dirname,'../')).development
const knex = require('knex')(config)


module.exports = {
  createUser,
  userExists
}

function createUser (username, password, conn) {
  const db = conn || connection
  return db('logins')
    .insert({username, hash: password})
}

function userExists (username, conn) {
  const db = conn || connection
  return db('logins')
    .count('id ad n')
    .where('username', username)
    .then(count => {
      console.log(count)
      return count[0].n > 0
    })
}
