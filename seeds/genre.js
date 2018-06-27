exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, name: 'House'},
        {id: 2, name: 'Soul'},
        {id: 3, name: 'Techno'},
        {id: 4, name: 'World'},
        {id: 5, name: 'Disco'},
        {id: 6, name: 'Electronic'}
      ])
    })
}
