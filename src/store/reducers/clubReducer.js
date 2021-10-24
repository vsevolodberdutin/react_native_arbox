import { LOAD_CLUB } from "../types"

const initialState = {
    name: '',
    workingHours: '',
    address: '',
    phone: '',
    website: '',
    eMail: '',
    myMemberships: {
        title:'',
        info:'',
    },
    myForms: {
        title:'',
        info:'',
    },
}

export const clubReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_CLUB:
            return {
                ...state,
                all
            }

    }
    return state
} 