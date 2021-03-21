import { TRANSFER_INQUIRY, TRANSFER_CONFIRM } from "./types";
import { remote } from "../remote/remote";

export const transferInquiry = (
    credential,
    accountSrcId,
    accountDstId,
    amount,
) => {
    try {
        return async (dispatch) => {
            const api = await remote();
            const inquiryTransfer = await api.transferInquiry(
                credential,
                accountSrcId,
                accountDstId,
                amount,
            );
            dispatch({ type: TRANSFER_INQUIRY, data: inquiryTransfer });
        };
    } catch (error) {
        console.log("TF ACT", error);
    }
};

export const transferConfirm = (
    credential,
    accountSrcId,
    accountDstId,
    amount,
    inquiryId,
) => {
    try {
        return async (dispatch) => {
            const api = await remote();
            const confirmTransfer = await api.transferConfirm(
                credential,
                accountSrcId,
                accountDstId,
                amount,
                inquiryId,
            );
            dispatch({ type: TRANSFER_CONFIRM, data: confirmTransfer });
        };
    } catch (error) {
        console.log("GAGAL CONFIRM");
    }
};
