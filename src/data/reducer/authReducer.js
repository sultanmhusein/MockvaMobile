import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_CREDENTIAL } from "../action/types";
import { setCredential, removeCredential } from "../local/storage";

const initialState = {
    sessionStatus: null,
    message: null,
    sessionId: null,
    accountId: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_CREDENTIAL:
            // console.log("AUTH CRED", action.data)
            // console.log("SESSION ID", action.data[0][1])
            // console.log("ACCOUNT ID", action.data[1][1])
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
                    message: "GAGAL LOGIN :("
                }
            } else {
                setCredential([action.data.data.id, action.data.data.accountId]);
                return {
                    ...state,
                    credential: action.data.data.id,
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