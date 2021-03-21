import { PROFILE_GET } from "../action/types";
import { remote } from "../remote/remote";

export const profileGet = (credential, accountId) => {
    try {
    return async dispatch => {
        console.log("PROF ACT", credential, accountId)
        const api = await remote();
        const dataProfile = await api.profileGet(credential, accountId);
        dispatch({ type: PROFILE_GET, data: dataProfile })
    }
    } catch(error) {
        console.log("NOT GET")
    }
}