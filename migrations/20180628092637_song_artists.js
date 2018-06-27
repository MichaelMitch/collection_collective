exports.up = function (knex, Promise) {
  return knex.schema.makeTable('song_artists', function (table) {
    table.increments('id')
    table.string('name')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('song_artists')
}
