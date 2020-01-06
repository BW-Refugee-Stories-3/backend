
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 55, username: 'testUser1', password: 'test'},
        {id: 56, username: 'testUser2', password: 'test'},
        {id: 57, username: 'testUser3', password: 'test'}
      ]);
    });
};
