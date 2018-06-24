
exports.up = function(knex, Promise) {
  return knex.schema.createTable('mix_artists', function(table) {
      table.increments('id')
      table.string('name')
      table.string('sorted_name')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('artists')
};