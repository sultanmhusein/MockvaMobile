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
}

const transferReducer = (state = initialState, action) => {
    switch (action.type) {
        case TRANSFER_INQUIRY:
            if (action.data.status != 200) {
                return {
                    ...state,
                    messageError: action.data.data,
                }
            } else {
                return {
                    ...state,
                    accountSrcId: action.data.data.accountSrcId,
                    accountSrcName: action.data.data.accountSrcName,
                    accountDstId: action.data.data.accountDstId,
                    accountDstName: action.data.data.accountDstName,
                    amount: action.data.data.amount,
                    inquiryId: action.data.data.inquiryId,
                    transferInq: action.data.data
                }
            }
        case TRANSFER_CONFIRM:
            if (action.data.status != 200) {
                return state;
            } else {
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