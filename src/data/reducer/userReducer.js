import { GET_USER, ERROR_USER } from "../action/types";

const initialState = {
    user: [],
    errorMessage: null,
}

const userReducer = (
    state = initialState,
    action,
) => {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                user: action.data,
            }
        case ERROR_USER:
            return {
                ...state,
                errorMessage: action.error,
            }
        default:
            return state;
    }
};

export default userReducer;
