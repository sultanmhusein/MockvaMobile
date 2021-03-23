import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useAppComponent, useTheme } from "../Contexts";
import Scaffhold from "../components/Scaffhold";
import { connect } from "react-redux";
import { transferConfirm } from "../data/action/transfer";
import { AlertMessage, AlertMessageReset } from "../components/AlertMessage";

const TransferInquiryScreen = (props) => {
    const { navigation, dispatch, sessionId, accountSrcId, accountSrcName, accountDstId, accountDstName, amount, inquiryId, transferInq } = props;
    const { networkStatus } = useAppComponent();
    const { colors, images, styles } = useTheme();
    const [isRequesting, setIsRequesting] = useState(false);
    const setRequesting = requesting => setIsRequesting(requesting);

    const Transfer = async () => {
        if (sessionId != null && accountSrcId != null && accountDstId != null && amount != null && inquiryId != null) {
            setRequesting(true);
            await dispatch(transferConfirm(sessionId, accountSrcId, accountDstId, amount, inquiryId))
            setRequesting(false);
            navigation.replace("TransferStatus")
            console.log("BERHASIL", inquiryId)
        }
    }

    useEffect(() => {
        setRequesting(false)
        if (transferInq == null) {
            AlertMessageReset('Failed', "Account Not Found", () => {
                navigation.reset({
                    index: 0,
                    routes: [{name: 'Main'}],
                });
            });
        }
    }, [transferInq])
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
                            <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
                                <Text>Account Source</Text>
                                <Text>{accountSrcId != null ? accountSrcId : ""}</Text>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
                                <Text>Account Source Name</Text>
                                <Text>{accountSrcName != null ? accountSrcName : ""}</Text>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
                                <Text>Account Destination</Text>
                                <Text>{accountDstId != null ? accountDstId : ""}</Text>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
                                <Text>Account Destination Name</Text>
                                <Text>{accountDstName != null ? accountDstName : ""}</Text>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
                                <Text>Amount</Text>
                                <Text>{amount != null ? amount : ""}</Text>
                            </View>
                        </ScrollView>
                    </SafeAreaView>
                    <Button
                        mode="contained"
                        color={colors.blue}
                        style={{ marginTop: 8 }}
                        // loading={isRequesting}
                        // disabled={
                        //     isRequesting ||
                        //     accountSource == "" ||
                        //     accountSourceName == "" ||
                        //     accountDestination == "" ||
                        //     accountDestinationName == "" ||
                        //     amount == "amount"
                        // }
                        onPress={Transfer}>
                        Confirm
                    </Button>
                </View>
            }
        />
    );
};

const mapStateToProps = ({ authReducer, transferReducer }) => {
    return {
        sessionId: authReducer.sessionId,
        accountSrcId: transferReducer.accountSrcId,
        accountSrcName: transferReducer.accountSrcName,
        accountDstId: transferReducer.accountDstId,
        accountDstName: transferReducer.accountDstName,
        amount: transferReducer.amount,
        inquiryId: transferReducer.inquiryId,
        transferInq: transferReducer.transferInq
    }
}

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(TransferInquiryScreen);