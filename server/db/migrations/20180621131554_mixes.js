exports.up = function (knex, Promise) {
  return knex.schema.createTable('mixes', table => {
    table.increments('id')
    table.integer('artist_id')
    table.string('title')
    table.string('date')
    table.integer('genre_id')
    table.integer('length')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('mixes')
}
