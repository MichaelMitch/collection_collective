exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('songs').del()
    .then(function () {
      // Inserts seed entries
      return knex('songs').insert([
        {id: 1, mix_id: 1, title: 'Si t\'es mal dans ta peau', artist: 1, genre_id: 4},
        {id: 2, mix_id: 2, title: 'Descarga', artist: 2, genre_id: 4},
        {id: 3, mix_id: 2, title: 'Here We Go Again', artist: 3, genre_id: 5},
        {id: 4, mix_id: 3, title: '1666', artist: 4, genre_id: 3},
        {id: 5, mix_id: 3, title: 'Too Much', artist: 5, genre_id: 1},
        {id: 6, mix_id: 3, title: 'Nothing Is What I Know', artist: 6, genre_id: 6}
      ])
    })
}
