import Config from "react-native-config";
import axios from "axios";

const remote = () => {
    console.log('HEHE', Config.API_URL)
    const api = axios.create({
        baseURL: Config.API_URL,
        // baseURL: "https://jsonplaceholder.typicode.com/",
        timeout: 1000,
        headers: {
            "Application-Type": "application/json",
        },
    });

    const getUsers = () => api.get("/users");

    return {
        getUsers,
    };
};

export default {
    remote,
};
