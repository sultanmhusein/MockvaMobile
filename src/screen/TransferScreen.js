import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useAppComponent, useTheme } from "../Contexts";
import Scaffhold from "../components/Scaffhold";
import { connect } from "react-redux";
import { transferInquiry } from "../data/action/transfer";
import { AlertMessage } from "../components/AlertMessage";

const TransferScreen = (props) => {
    const { navigation, dispatch, sessionId, accountSrcId, messageError } = props;
    const { networkStatus } = useAppComponent();
    const { colors, images, styles } = useTheme();
    const [accountDestination, setAccountDestination] = useState("8243200409103259");
    const [amount, setAmount] = useState("1");
    const [isRequesting, setIsRequesting] = useState(false);
    const setRequesting = requesting => setIsRequesting(requesting);

    const Inquiry = async () => {
        if (accountDestination == '' && amount == '') {
            console.log("TIDAK BOLEH KOSONG")
        }

        if (accountDestination != '' && amount != '') {
            setRequesting(true);
            await dispatch(transferInquiry(sessionId, accountSrcId, accountDestination, amount))
            setRequesting(false);
            navigation.navigate("TransferInquiry")

        }

    }

    useEffect(() => {
        setRequesting(false)
        if (messageError != null) {
            AlertMessage("FAILED", messageError)
        }
    }, [messageError])

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
        messageError: transferReducer.messageError
    }
}

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(TransferScreen);
