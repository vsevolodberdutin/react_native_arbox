import {createStore, combineReducers} from 'redux'
import {userReducer} from './reducers/userReducer'
import {clubReducer} from './reducers/clubReducer'

const rootReducer = combineReducers({
    user: userReducer,
    club: clubReducer,
})

export default createStore(rootReducer)