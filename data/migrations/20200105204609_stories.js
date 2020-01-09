
exports.up = function(knex) {
  return knex.schema.createTable('stories', story => {
    story.increments();
    story.string('name', 32).notNullable()
    story.string('location', 32).notNullable()
    story.string('date', 18).notNullable()
        // could change this to time stamp using  .defaultTo(knex.fn.now());
    story.string('textbody', 3400).notNullable()
    story.boolean('approved').defaultTo(false)

  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('stories');
};
