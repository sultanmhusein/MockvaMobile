import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_CREDENTIAL } from "../action/types";
import { setCredential, removeCredential } from "../local/storage";

const initialState = {
    sessionStatus: null,
    messageLogin: null,
    sessionId: null,
    accountId: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_CREDENTIAL:
            return {
                ...state,
                sessionId: action.data[0][1],
                accountId: action.data[1][1]
            }
        case AUTH_LOGOUT:
            removeCredential([]);
            return initialState;
        case AUTH_LOGIN:
            if (action.data.status != 200) {
                return {
                    ...state,
                    messageLogin: action.data.data
                }
            } else {
                setCredential([action.data.data.id, action.data.data.accountId]);
                return {
                    ...state,
                    sessionId: action.data.data.id,
                    accountId: action.data.data.accountId,
                    sessionStatus: action.data.data.sessionStatus
                }
            }
        default: 
            return state;
    }
}

export default authReducer;