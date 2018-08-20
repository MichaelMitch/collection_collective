import {combineReducers} from 'redux'

import getMixes from './mixes'
import errorMessage from './errorMessage'
export default combineReducers({
    errorMessage,
    getMixes
})