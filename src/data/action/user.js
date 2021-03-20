import { GET_USER, ERROR_USER } from "../action/types";
import api from "../remote/remote";

const service = api.remote();

export const getUser = () => {
    return async (dispatch) => {
        try {
            const users = await service.getUsers();
            if (users.status == 200) {
                dispatch({ type: GET_USER, data: users.data.map((item) => ({id: item.id, name:item.name})) });
            } else {
                dispatch({ type: ERROR_USER, error: "Gagal mendapatkan data" });
            }
        } catch (error) {
            dispatch({ type: ERROR_USER, error: error });
        }
    };
};
