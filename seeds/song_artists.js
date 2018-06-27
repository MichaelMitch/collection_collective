exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('song_artists').del()
    .then(function () {
      // Inserts seed entries
      return knex('song_artists').insert([
        {id: 1, name: 'Koko Ateba'},
        {id: 2, name: 'Gerado Frisina'},
        {id: 3, name: 'People\'s Choice'},
        {id: 4, name: 'M-D-Emm'},
        {id: 5, name: 'Feuters'},
        {id: 6, name: 'Helena Hauff'}
      ])
    })
}
