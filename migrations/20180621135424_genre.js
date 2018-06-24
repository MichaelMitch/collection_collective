
exports.up = function(knex, Promise) {
  return knex.schema.makeTable('genre', function(table){
      table.increment('id')
      table.string('name')
      ;
  })
};

exports.down = function(knex, Promise) {
  
};
