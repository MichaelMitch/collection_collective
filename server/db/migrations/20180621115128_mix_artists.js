exports.up = function (knex, Promise) {
  return knex.schema.createTable('mix_artists', table => {
    table.increments('id')
    table.string('name')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('mix_artists')
}
