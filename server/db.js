const path = require('path')
const config = require(path.join(__dirname,"../knexfile")).development
const knex = require('knex')(config)

module.exports = {
 getMixes
}

function getMixes() {
  const db = knex
  // console.log(db('mixes'))
  return db('mixes')
  .select()
}

function getMix(id){
  const db = knex
  return db('songs')
  .where('songs.mix_id' === id)
} 