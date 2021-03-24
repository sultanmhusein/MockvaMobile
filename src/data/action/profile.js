import { PROFILE_GET } from "../action/types";
import { remote } from "../remote/remote";

export const profileGet = (sessionId, accountId) => {
    try {
        return async dispatch => {
            const api = await remote();
            const dataProfile = await api.profileGet(sessionId, accountId);
            dispatch({ type: PROFILE_GET, data: dataProfile })
        }
    } catch(error) {
        console.log("GET PROFILE FAILED", error)
    }
}