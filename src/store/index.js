import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {userReducer} from './reducers/userReducer'

const rootReducer = combineReducers({
    users: userReducer,
})

export default createStore(rootReducer, applyMiddleware(thunk))