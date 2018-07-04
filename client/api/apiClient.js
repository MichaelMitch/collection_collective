import request from 'superagent'

 export function getMixes () {
    return request.get('/api/v1/mixes')
    console.log("hello")

    .then(resp => {
        const mixes = resp.body
        console.log(mixes)
        return mixes

    })
    .catch(err => {
        console.error(err)
      })
 }