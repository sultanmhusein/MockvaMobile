import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_CREDENTIAL } from "./types";
import { remote } from "../remote/remote";

export const authLogin = (username, password) => {
    try {
    return async dispatch => {
        const api = await remote();
        const authLogin = await api.authLogin(username, password);
        dispatch({ type: AUTH_LOGIN, data: authLogin })
    }
    } catch (error) {
        console.log("GAGAL DI AUTH ACTION", error)
    }
}

export const authLogout = (sesionId) => ({ type: AUTH_LOGOUT, data: sesionId })

export const setCredential = ([sessionId, accountId]) => ({
    type: AUTH_CREDENTIAL,
    data: [sessionId, accountId]
})
