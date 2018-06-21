
exports.up = function(knex, Promise) {
  return knex.schema.createTable('mixes', function(table){
      table.increments('id')
      table.number('artist_id')
      table.string('name')
      table.string('genre')
      table.number('length')
      
  })
};

exports.down = function(knex, Promise) {
  
};
