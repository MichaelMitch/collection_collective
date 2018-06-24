
exports.up = function(knex, Promise) {
  return knex.schema.createTable('songs', function(table){
      table.increments('id')
      table.number('mix_id')
      table.string('name')
      table.string('artist')
      table.string('genre_id')
  })
};

exports.down = function(knex, Promise) {
  
};
