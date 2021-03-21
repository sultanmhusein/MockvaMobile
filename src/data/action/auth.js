import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_SETSESSION } from "./types";
import { remote } from "../remote/remote";

export const setUpCredential = credential => ({
    type: AUTH_SETSESSION,
    data: credential
})

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

export const authLogout = (credential) => ({ type: AUTH_LOGOUT, data: credential })