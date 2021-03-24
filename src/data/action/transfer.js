import { TRANSFER_INQUIRY, TRANSFER_CONFIRM, TRANSFER_CLEAR } from "./types";
import { remote } from "../remote/remote";

export const transferInquiry = (
    sesionId,
    accountSrcId,
    accountDstId,
    amount,
) => {
    try {
        return async (dispatch) => {
            const api = await remote();
            const inquiryTransfer = await api.transferInquiry(
                sesionId,
                accountSrcId,
                accountDstId,
                amount,
            );
            dispatch({ type: TRANSFER_INQUIRY, data: inquiryTransfer });
        };
    } catch (error) {
        console.log("TRANSFER INQUIRY FAILED", error);
    }
};

export const transferConfirm = (
    sesionId,
    accountSrcId,
    accountDstId,
    amount,
    inquiryId,
) => {
    try {
        return async (dispatch) => {
            const api = await remote();
            const confirmTransfer = await api.transferConfirm(
                sesionId,
                accountSrcId,
                accountDstId,
                amount,
                inquiryId,
            );
            dispatch({ type: TRANSFER_CONFIRM, data: confirmTransfer });
        };
    } catch (error) {
        console.log("TRANSFER CONFIRM FAILED", error);
    }
};

export const transferClear = () => ({ type: TRANSFER_CLEAR });