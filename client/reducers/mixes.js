import {RECIEVE_MIXES_INFO} from '../actions/mixes'


function mixesInfo (state = {}, action) {
    switch (action.type) {
      case RECIEVE_MIXES_INFO:
        return action.mixesInfo
  
      default:
        return state
    }
  }
  
  export default mixesInfo
  