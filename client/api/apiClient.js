import request from 'superagent'

 export function getMixes () {
    return request.get()
    .get('/api/v1/mixes')
    .then(resp => {
        const mixes = res.body
        return mixes

    })
    .catch(err => {
        console.error(err)
      })
 }