const path = require('path')
const config = require(path.join(__dirname,"./knexfile")).development
const knex = require('knex')(config)

module.exports = {
 getMixes
}

function getMixes() {
  const db = knex
  // console.log(db('mixes'))
  return db('mixes')
  .join('mix_artists', 'mix_artists.id', 'mixes.artist_id' )
  .join('genre', 'genre.id', 'mixes.genre_id')
  .select('title', 'date', 'length', 'artist_name as artistName', 'genre')

  .select()
}

function getMix(id){
  const db = knex
  return db('songs')
  .where('songs.mix_id' === id)
} 