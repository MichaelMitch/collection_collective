exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('genre').del()
    .then(function () {
      // Inserts seed entries
      return knex('genre').insert([
        {id: 1, genre: 'House'},
        {id: 2, genre: 'Soul'},
        {id: 3, genre: 'Techno'},
        {id: 4, genre: 'World'},
        {id: 5, genre: 'Disco'},
        {id: 6, genre: 'Electronic'}
      ])
    })
}
