exports.up = (knex, Promise) => {
  return knex.schema.createTable('logins', table => {
    table.increments('id')
    table.string('username')
    table.string('hash')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('logins')
}
