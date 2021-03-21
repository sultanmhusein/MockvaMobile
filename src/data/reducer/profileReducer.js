import { PROFILE_GET } from "../action/types";

const initialState = {
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_GET:
            if (action.data.status != 200) {
                return state;
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