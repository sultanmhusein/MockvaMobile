import { PROFILE_GET } from "../action/types";
import { remote } from "../remote/remote";

export const profileGet = (sessionId, accountId) => {
    return async dispatch => {
        const api = await remote();
        const dataProfile = await api.profileGet(sessionId, accountId);
        dispatch({ type: PROFILE_GET, data: dataProfile })
    }
}