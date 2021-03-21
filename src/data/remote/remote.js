import Config from "react-native-config";
import axios from "axios";
import apisauce from "apisauce";

export const remote = async () => {
    const api = apisauce.create({
        baseURL: "https://mockva.daksa.co.id/mockva-rest",
        // timeout: 1000,
        headers: {
            "Content-Type": "application/json",
        },
    });

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
    const profileGet = (sessionId, accountId) => 
        api.get(`/rest/account/detail?id=${accountId}`, null, {
            headers: { _sessionId: sessionId },
        })
    const historyGet = (sessionId, accountSrcId) =>
        api.get(
            "rest/account/transaction/log?accountSrcId=" + accountSrcId,
            null,
            {
                headers: { _sessionId: sessionId },
            },
        );
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
            "/rest/account/transaction/transferInquiry",
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
