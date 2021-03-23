import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useAppComponent, useTheme } from "../Contexts";
import Scaffhold from "../components/Scaffhold";
import { connect } from "react-redux";
import { transferInquiry, transferClear } from "../data/action/transfer";
import { AlertMessage } from "../components/AlertMessage";

const TransferScreen = (props) => {
    const { navigation, dispatch, sessionId, accountSrcId, messageError, statusApi, statusOk, transferInq } = props;
    const { networkStatus } = useAppComponent();
    const { colors, images, styles } = useTheme();
    const [accountDestination, setAccountDestination] = useState("8243200409103259");
    const [amount, setAmount] = useState("1");
    const [isRequesting, setIsRequesting] = useState(false);
    const setRequesting = requesting => setIsRequesting(requesting);

    useEffect(() => {
        transferClear()
    }, [])

    const Inquiry = async () => {
        if (accountDestination == '' && amount == '') {
            console.log("TIDAK BOLEH KOSONG")
        }

            setRequesting(true);
            await dispatch(transferInquiry(sessionId, accountSrcId, accountDestination, amount))
            setRequesting(false);
            navigation.navigate("TransferInquiry")
    }


    return (
        <Scaffhold
            isPageCanScroll={false}
            body={
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        padding: 24,
                    }}>
                    <SafeAreaView>
                        <ScrollView>
                            <TextInput
                                label="Account Destination"
                                mode="flat"
                                value={accountDestination}
                                style={{
                                    backgroundColor: colors.white,
                                    color: colors.blue,
                                    marginTop: 8,
                                }}
                                onChangeText={(accountDestination) =>
                                    setAccountDestination(accountDestination)
                                }
                            />
                            <TextInput
                                label="Amount"
                                mode="flat"
                                value={amount}
                                style={{
                                    backgroundColor: colors.white,
                                    color: colors.blue,
                                    marginTop: 8,
                                }}
                                onChangeText={(amount) =>
                                    setAmount(amount)
                                }
                            />
                        </ScrollView>
                    </SafeAreaView>
                    <Button
                        mode="contained"
                        color={colors.blue}
                        style={{ marginTop: 8 }}
                        // loading={isRequesting}
                        // disabled={
                        //     isRequesting ||
                        //     accountDestination == "" ||
                        //     amount == ""
                        // }
                        onPress={Inquiry}>
                        Transfer
                    </Button>
                </View>
            }
        />
    );
};

const mapStateToProps = ({ authReducer, transferReducer }) => {
    return {
        sessionId: authReducer.sessionId,
        accountSrcId: authReducer.accountId,
        messageError: transferReducer.messageError,
        transferInq: transferReducer.transferInq,
        statusApi: transferReducer.statusApi,
        statusOk: transferReducer.statusOk,
    }
}

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(TransferScreen);
