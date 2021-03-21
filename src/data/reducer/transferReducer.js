import { TRANSFER_INQUIRY, TRANSFER_CONFIRM } from "../action/types";

const initialState = {
    transferInquiry: null,
    transferConfirm: null,
    message: null
}

const transferReducer = (state = initialState, action) => {
    switch (action.type) {
        case TRANSFER_INQUIRY:
            console.log("TF INQ", action.data)
            if (action.data.status != 200) {
                return {
                    ...state,
                    message: "GAGAL INQ :("
                }
            } else {
                console.log("INQ MUNCUL", action.data.data)
                return {
                    ...state,
                    transferInquiry: action.data.data
                }
            }
        case TRANSFER_CONFIRM:
            if (action.data.status != 200) {
                return {
                    ...state,
                    message: "GAGAL INQ CFR :("
                }
            } else {
                console.log("INQ CFR MUNCUL", action.data.data)
                return {
                    ...state,
                    transferConfirm: action.data.data
                }
            }
        default:
            return state;
    }
}

export default transferReducer;