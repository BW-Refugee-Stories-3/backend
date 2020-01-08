const db = require('../data/db-config')

module.exports = {
    add,
    find,
    findById,
    findBy,
    update,
    remove,
}


function find() {
    return db('stories');
  };
  
  function findBy(filter) {
    return db('stories').where(filter);
  };
  
  async function add(data) {
    const [id] = await db('stories').insert(data, 'id');
    return findById(id);
  };
  
  function findById(id) {
    return db('stories')
      .where({ id })
      .first();
  };
  
  async function update(id, data) {
    await db('stories')
      .where('id', Number(id))
      .update(data, 'id');
    return findById(id);
  };
  
  function remove(id) {
    return db('stories')
      .where('id', Number(id))
      .del();
  };