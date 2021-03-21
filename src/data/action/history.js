import { HISTORY_GET } from "../action/types";
import { remote } from "../remote/remote";

export const historyGet = (credential, accountId) => {
    try {
        return async dispatch => {
            console.log("History act", credential, accountId)
            const api = await remote();
            const dataHistory = await api.historyGet(credential, accountId);
            dispatch({ type: HISTORY_GET, data: dataHistory })
        }
    } catch (error) {
        console.log("NOT GET HISTORY")
    }
}