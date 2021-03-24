import { HISTORY_GET } from "../action/types";
import { remote } from "../remote/remote";

export const historyGet = (sessionId, accountSrcId) => {
    try {
        return async dispatch => {
            const api = await remote();
            const dataHistory = await api.historyGet(sessionId, accountSrcId);
            dispatch({ type: HISTORY_GET, data: dataHistory })
        }
    } catch (error) {
        console.log("GET HISTORY FAILED", error)
    }
}