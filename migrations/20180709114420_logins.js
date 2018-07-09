
exports.up = function(knex, Promise) {
    return knex.schema.createTable('logins', table => {
      table.increments('id')
      table.string('username')
      table.string('hash')
    })
};

exports.down = function(knex, Promise) {
  knex.schema.dropTableIfExists('logins')
};
