const path = require('path')
const config = require(path.join(__dirname + '../../knexfile')).development
const knex = require('knex')(config)

module.exports = {
 getMixes
}

function getMixes() {
  const db = knex
  return db(mixes)
  .select()

}