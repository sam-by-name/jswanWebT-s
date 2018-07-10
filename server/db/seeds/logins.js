exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('logins').del()
    .then(() => {
      // Inserts seed entries
      return knex('logins').insert([
        {id: '1', username: 'Hilda', hash: 'Hilda'},
        {id: '2', username: 'Humphrey', hash: 'Humphrey'},
        {id: '3', username: 'Hugo', hash: 'Hugo'}
      ])
    })
}
