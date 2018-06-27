exports.up = function (knex, Promise) {
  return knex.schema.createTable('mixes', function (table) {
    table.increments('id')
    table.number('artist_id')
    table.string('title')
    table.string('date')
    table.number('genre_id')
    table.number('length')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('song_artists')
}
