import request from 'superagent'
import {showError} from './index'

export const REQUEST_MIXES_INFO = "REQUEST_MIXES_INFO"
export const RECIEVE_MIXES_INFO = "RECIEVE_MIXES_INFO"


export const requestMixesInfo = () => {
    return {
        type: REQUEST_MIXES_INFO
    }
}

export const recieveMixesInfo = (mixesInfo) => {
    return {
        type: RECIEVE_MIXES_INFO,
        mixesInfo
    }
}

export const getMixes = () => {
    return (dispatch) => {
        dispatch(requestMixesInfo())
        return request
        .get('/api/v1/site/mixes')
        .then(res => {
            dispatch(recieveMixesInfo(res.body))
        })
        .catch(err => {
            dispatch(showError(err.message))
          })
    }
}

export const addMix = () =>{
    return (dispatch) => {
        
    }
}