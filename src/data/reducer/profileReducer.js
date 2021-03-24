import { PROFILE_GET } from "../action/types";

const initialState = {
    profile: null,
    isSessionExpired: false
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_GET:
            console.log("PROFILE", action.data.status)
            if (action.data.status != 200) {
                return {
                    ...state,
                    isSessionExpired: true
                }
            } else {
                return {
                    ...state,
                    profile: action.data.data
                }
            }
        default:
            return state;
    }
}

export default profileReducer;