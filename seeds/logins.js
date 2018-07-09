
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id:"1", username:"Hilda", hash:""},
        {id:"2", username:"Humphrey", hash:""},
        {id:"3", username:"Hugo", hash:""}
      ]);
    });
};
