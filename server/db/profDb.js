const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getProfPic,
  getProfile
}

function getProfPic (conn) {
  const db = conn || connection
  return db('profiles')
    .select('profPic')
}

function getProfile (id, conn) {
  const db = conn || connection
  return db('profiles')
    .select()
    .where('user_id', id)
}
