import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_SETSESSION } from "../action/types";
import { setCredential, removeCredential } from "../local/storage";

const initialState = {
    credential: null,
    sessionStatus: null,
    accountId: null,
    message: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_SETSESSION:
            console.group("AUTH SETSESSION", action.data)
            return {
                ...state,
                credential: action.data
            }
        case AUTH_LOGOUT:
            removeCredential();
            console.log("HEHE")
            return initialState;
        case AUTH_LOGIN:
            console.log("AU REDUCER", action.data.data)
            if (action.data.status != 200) {
                return {
                    ...state,
                    message: "GAGAL LOGIN :("
                }
            } else {
                setCredential(action.data.data.id);
                console.log("TERSIMPAN", action.data.data.id)
                return {
                    ...state,
                    credential: action.data.data.id,
                    accountId: action.data.data.accountId,
                    sessionStatus: action.data.data.sessionStatus
                }
            }
        default: 
            return state;
    }
}

export default authReducer;