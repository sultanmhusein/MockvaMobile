import Config from "react-native-config";
import apisauce from "apisauce";

export const remote = async () => {
    const api = apisauce.create({
        baseURL: Config.API_URL,
        // timeout: 1000,
        // headers: {
        //     "Content-Type": "application/json",
        // },
    });
    // auth
    const authLogin = (username, password) =>
        api.post(
            "/rest/auth/login",
            { username: username, password: password },
            { headers: null },
        );
    const authLogout = (sessionId) =>
        api.delete("/rest/auth/logout", null, {
            headers: { _sessionId: sessionId },
        });
    // profile
    const profileGet = (sessionId, accountId) => 
        api.get(`/rest/account/detail?id=${accountId}`, null, {
            headers: { _sessionId: sessionId },
        })
    // history
    const historyGet = (sessionId, accountSrcId) =>
        api.get(
            "rest/account/transaction/log?accountSrcId=" + accountSrcId,
            null,
            {
                headers: { _sessionId: sessionId },
            },
        );
    // transfer
    const transferInquiry = (sessionId, accountSrcId, accountDstId, amount) =>
        api.post(
            "/rest/account/transaction/transferInquiry",
            {
                accountSrcId: accountSrcId,
                accountDstId: accountDstId,
                amount: amount,
            },
            { headers: { _sessionId: sessionId } },
        );
    const transferConfirm = (
        sessionId,
        accountSrcId,
        accountDstId,
        amount,
        inquiryId,
    ) =>
        api.post(
            "/rest/account/transaction/transfer",
            {
                accountSrcId: accountSrcId,
                accountDstId: accountDstId,
                amount: amount,
                inquiryId: inquiryId,
            },
            { headers: { _sessionId: sessionId } },
        );

    return {
        authLogin,
        authLogout,
        profileGet,
        historyGet,
        transferInquiry,
        transferConfirm,
    };
};
