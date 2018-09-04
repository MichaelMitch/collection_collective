
exports.up = function (knex, Promise) {
  return knex.schema.createTable('mix_breakdown', table => {
    table.increments('id')
    table.integer('mix_id')
    table.integer('song_id')

  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('mix_breakdown')
}
