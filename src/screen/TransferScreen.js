import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, ScrollView, TextInput } from "react-native";
import {  Button } from "react-native-paper";
import { useTheme } from "../Contexts";
import Scaffhold from "../components/Scaffhold";
import { connect } from "react-redux";
import { transferInquiry, transferClear } from "../data/action/transfer";
import { AlertMessage } from "../components/AlertMessage";
import { numberFormatInput } from '../../constants/helper';

const TransferScreen = (props) => {
    const { navigation, dispatch, sessionId, accountSrcId, messageError, transferInq } = props;
    const { colors, images, styles } = useTheme();
    const [accountDestination, setAccountDestination] = useState("8243200409103259");
    const [amount, setAmount] = useState("1");
    const [isRequesting, setIsRequesting] = useState(false);
    const setRequesting = requesting => setIsRequesting(requesting);

    useEffect(() => {
        dispatch(transferClear())
    }, [])

    const Inquiry = async () => {
        if (accountDestination == '' && amount == '') {
            AlertMessage("Failed", "Please complete all forms")
        }
        setRequesting(true);
        await dispatch(transferInquiry(sessionId, accountSrcId, accountDestination, amount.replace(/[\D]/g, '')))
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
                            <Text style={styles.textMedium}>Account Destination</Text>
                            <TextInput 
                                placeholder="Account Destination"
                                keyboardType="numeric"
                                underlineColorAndroid={colors.blue}
                                value={accountDestination}
                                onChangeText={(accountDestination) =>
                                    setAccountDestination(accountDestination)
                                }
                            />
                            <Text style={{ ...styles.textMedium, marginTop: 16 }}>Amount</Text>
                            <TextInput 
                                placeholder="Amount"
                                keyboardType="numeric"
                                underlineColorAndroid={colors.blue}
                                value={amount}
                                onChangeText={(amount) => setAmount(numberFormatInput(amount))}
                            />
                        </ScrollView>
                    </SafeAreaView>
                    <Button
                        mode="contained"
                        color={colors.blue}
                        style={{ marginTop: 8 }}
                        loading={isRequesting}
                        disabled={
                            isRequesting ||
                            accountDestination == "" ||
                            amount == ""
                        }
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
    }
}

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(TransferScreen);
