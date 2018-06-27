exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('mixes').del()
    .then(function () {
      // Inserts seed entries
      return knex('mixes').insert([
        {id: 1, artist_id: 1, title: 'Beats in Space October 2017', date: '10.17', genre_id: 1, length: 75.43},
        {id: 2, artist_id: 2, title: 'DGTL Festival ', date: '04.17', genre_id: 2, length: 94.56},
        {id: 3, artist_id: '3', title: 'Essential Mix', date: '03.18', genre_id: 3, length: 119.48}
      ])
    })
}
