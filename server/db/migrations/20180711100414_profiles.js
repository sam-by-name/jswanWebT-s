exports.up = (knex, Promise) => {
  return knex.schema.createTable('profiles', table => {
    table.increments('id')
    table.integer('user_id')
    table.string('name')
    table.integer('age')
    table.string('sauce')
    table.string('mantra')
    table.string('favAnimal')
    table.string('pets')
    table.string('children')
    table.string('hobbies')
    table.string('codePhrase')
    table.string('favColor')
    table.string('favMovie')
    table.string('favMusic')
    table.string('profPic')
    table.string('bannerImg')
    table.string('backgroundImg')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('profiles')
}
