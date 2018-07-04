const path = require('path')
const config = require(path.join('/Users/eda/Desktop/collection_collective/collection_collective/knexfile.js')).development
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