exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('mix_artists').del()
    .then(function () {
      // Inserts seed entries
      return knex('mix_artists').insert([
        {id: 1, name: 'Hunee'},
        {id: 2, name: 'Detroit Swindle'},
        {id: 3, name: 'Peggy Gou'}
      ])
    })
}
