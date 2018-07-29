const path = require('path')
const config = require('./knexfile').development
const knex = require('knex')(config)

module.exports = {
  getMixes,
  getMix
}

function getMixes () {
  const db = knex
  // console.log(db('mixes'))
  return db('mixes')
    .select()
}

function getMix (id) {
  const db = knex
  return db('songs')
    .where(id === 'songs.mix_id')
}
