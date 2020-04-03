import userReducer from './userReducer'
import commentReducer from './commentReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    userReducer,
    commentReducer
})

export default rootReducer