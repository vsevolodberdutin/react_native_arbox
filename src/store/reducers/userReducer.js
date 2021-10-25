import { LOAD_USERS, ADD_USER } from "../types"

const initialState = {
    allUsers: [],
}

export const userReducer = (state = initialState, action) => {
    switch (action.type){
        case LOAD_USERS:
        return {
            ...state, 
            allUsers: action.payload
        }
        case ADD_USER:
            return {
              ...state,
              allUsers: [{ ...action.payload }, ...state.allUsers]
            }
        default:
            return state
    }
}