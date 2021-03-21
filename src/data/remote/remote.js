import Config from "react-native-config";
import axios from "axios";

export const remote = async () => {
    const api = axios.create({
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
    const authLogout = (_sessionId) =>
        api.delete("/rest/auth/logout", null, {
            headers: { _sessionId: credential },
        });
    const profileGet = (credential, accountId) =>
        api.get("/rest/account/detail?id=" + accountId, null, {
            headers: { _sessionId: credential }
        })

    return {
        authLogin,
        authLogout,
        profileGet
    };
};
