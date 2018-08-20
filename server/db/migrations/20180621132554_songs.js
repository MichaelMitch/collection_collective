exports.up = function (knex, Promise) {
  return knex.schema.createTable('songs', table => {
    table.increments('id')
    table.integer('mix_id')
    table.string('Title')
    table.string('artist')
    table.string('genre_id')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('songs')
}
