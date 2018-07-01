import request from 'superagent'

 export function getMixes () {
    return request
    .get('/api/v1/mixes')
    .then(resp => {
        return resp.body
    })
    .catch(err => {
        console.error(err)
      })
 }