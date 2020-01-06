
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('stories').del()
    .then(function () {
      // Inserts seed entries
      return knex('stories').insert([
        {id: 100, name: 'rowValue1', location: 'narnia', date: '12-12-12', textbody: "lotsofrandomtextthatismeantfortesting anduserswillnversee"},
        {id: 200, name: 'rowValue2', location: 'narnia', date: '12-12-12', textbody: "lotsofrandomtextthatismeantfortesting anduserswillnversee"},
        {id: 300, name: 'rowValue3', location: 'narnia', date: '12-12-12', textbody: "lotsofrandomtextthatismeantfortesting anduserswillnversee"}
      ]);
    });
};
