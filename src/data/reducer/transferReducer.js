import { TRANSFER_INQUIRY, TRANSFER_CONFIRM, TRANSFER_CLEAR } from "../action/types";

const initialState = {
    messageError: null,
    accountSrcId: null,
    accountSrcName: null,
    accountDstId: null,
    accountDstName: null,
    amount: null,
    inquiryId: null,
    transactionTimestamp: null,
    clientRef: null,
    transferInq: null,
    statusApi: null,
    statusOk: null
}

const transferReducer = (state = initialState, action) => {
    switch (action.type) {
        case TRANSFER_INQUIRY:
            // console.log("REDUCER", action.data.status)
            if (action.data.status != 200) {
                    console.log("HASIL", action.data)
                    return {
                        ...state,
                        messageError: action.data.data,
                        statusApi: action.data.status,
                        statusOk: action.data.ok
                    }
            } else {
                // console.log("INQ MUNCUL", action.data.data)
                console.log("INQ MUNCUL", action.data)
                return {
                    ...state,
                    accountSrcId: action.data.data.accountSrcId,
                    accountSrcName: action.data.data.accountSrcName,
                    accountDstId: action.data.data.accountDstId,
                    accountDstName: action.data.data.accountDstName,
                    amount: action.data.data.amount,
                    inquiryId: action.data.data.inquiryId,
                    transferInq: action.data.data,
                    statusApi: action.data.status
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
        case TRANSFER_CLEAR:
            return {
                ...state,
                messageError: null,
                transferInq: null
            }
        default:
            return state;
    }
}

export default transferReducer;