import { LOAD_USER } from "../types"

const initialState = {
    name: '',
    level: '',
    clubs: [],
    birthDay: '',
}

export const userReducer = (state = initialState, action) => {
    switch (action.type){
        case LOAD_USER:
        return {
            ...state, 
            name: action.name,
            level: action.level,
            clubs: action.clubs,
            birthDay: action.birthDay,
        }
        default:
            return state
    }
}