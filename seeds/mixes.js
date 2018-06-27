exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, artist_id: 1, title: 'Beats in Space October 2017', date: '10.17', genre_id: 1, length: 75.43},
        {id: 2, artist_id: 2, title: 'DGTL Festival ', date: '04.17', genre_id: '2', length: 94.56},
        {id: 3, artist_id: '3', title: 'Essential Mix', date: '03.18', genre_id: 'techno', length: 119.48}
      ])
    })
}
