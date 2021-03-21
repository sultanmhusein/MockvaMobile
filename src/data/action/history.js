import { HISTORY_GET } from "../action/types";
import { remote } from "../remote/remote";

export const historyGet = (sessionId, accountId) => {
    try {
        return async dispatch => {
            console.log("History act", sessionId, accountId)
            const api = await remote();
            const dataHistory = await api.historyGet(sessionId, accountId);
            dispatch({ type: HISTORY_GET, data: dataHistory })
        }
    } catch (error) {
        console.log("NOT GET HISTORY")
    }
}