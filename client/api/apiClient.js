import request from 'superagent'

 export function getMixes () {
    return request.get('/api/v1/mixes')
    .then(resp => {
        const mixes = resp.body
        return mixes

    })
    .catch(err => {
        console.error(err)
      })
 }