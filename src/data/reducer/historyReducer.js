import { HISTORY_GET } from "../action/types";

const initialState = {
    history: null
}

const historyReducer = (state = initialState, action) => {
    switch (action.type) {
        case HISTORY_GET:
            if (action.data.status != 200) {
                return state;
            } else {
                return {
                    ...state,
                    history: action.data.data.data
                }
            }
        default:
            return state;
    }
}

export default historyReducer;