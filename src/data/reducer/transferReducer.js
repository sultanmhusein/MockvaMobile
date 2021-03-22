import { TRANSFER_INQUIRY, TRANSFER_CONFIRM } from "../action/types";

const initialState = {
    messageError: null,
    accountSrcId: null,
    accountSrcName: null,
    accountDstId: null,
    accountDstName: null,
    amount: null,
    inquiryId: null,
    transactionTimestamp: null,
    clientRef: null
}

const transferReducer = (state = initialState, action) => {
    switch (action.type) {
        case TRANSFER_INQUIRY:
            console.log("TF INQ", action.data.data)
            if (action.data.status != 200) {
                console.log("XXXXXXXXX", action.data.data)
                return {
                    ...state,
                    messageError: action.data.data 
                }
            } else {
                console.log("INQ MUNCUL", action.data.data)
                console.log("INQ MUNCUL", action.data.data.accountDstId)
                return {
                    ...state,
                    accountSrcId: action.data.data.accountSrcId,
                    accountSrcName: action.data.data.accountSrcName,
                    accountDstId: action.data.data.accountDstId,
                    accountDstName: action.data.data.accountDstName,
                    amount: action.data.data.amount,
                    inquiryId: action.data.data.inquiryId
                }
            }
        case TRANSFER_CONFIRM:
            console.log("TF CF", action.data.data)
            if (action.data.status != 200) {
                console.log("****")
                // return {
                //     ...state,
                //     message: "GAGAL INQ CFR :("
                // }
            } else {
                console.log("INQ CFR MUNCUL", action.data.data)
                return {
                    ...state,
                    transactionTimestamp: action.data.data.transactionTimestamp,
                    clientRef: action.data.data.clientRef
                }
            }
        default:
            return state;
    }
}

export default transferReducer;