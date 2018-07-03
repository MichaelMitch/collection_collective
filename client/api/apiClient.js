import request from 'superagent'

 export function getMixes () {
    return request.get('/api/vi/mixes')
    .then(resp => {
        const mixes = res.body
        return mixes

    })
    .catch(err => {
        console.error(err)
      })
 }