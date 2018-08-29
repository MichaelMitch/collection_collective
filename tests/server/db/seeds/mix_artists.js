exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('mix_artists').del()
    .then(function () {
      // Inserts seed entries
      return knex('mix_artists').insert([
        {id: 1, artist_name: 'Hunee'},
        {id: 2, artist_name: 'Detroit Swindle'},
        {id: 3, artist_name: 'Peggy Gou'}
      ])
    })
}
