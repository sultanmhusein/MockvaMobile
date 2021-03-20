import { AUTH_LOGIN } from '../action/types';

const initialState = {
    loginMessage: null,
    credential: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_LOGIN:
            return {
                ...state,
                credential: action.data
            }
        default: 
            return state;
    }
}

export default authReducer;