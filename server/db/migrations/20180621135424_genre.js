exports.up = function (knex, Promise) {
  return knex.schema.createTable('genre', table => {
    table.increments('id')
    table.string('genre')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('genre')
}
