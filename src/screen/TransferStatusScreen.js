import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useAppComponent, useTheme } from "../Contexts";
import Scaffhold from "../components/Scaffhold";
import { connect } from "react-redux";

const TransferStatusScreen = (props) => {
    const { navigation, accountSrcId, accountSrcName, accountDstId, accountDstName, amount, transactionTimestamp, clientRef } = props;
    const { networkStatus } = useAppComponent();
    const { colors, images, styles } = useTheme();
    const [isRequesting, setIsRequesting] = useState(false);

    console.log("HAHA");
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
                            <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
                                <Text>Reference Number</Text>
                                <Text>{clientRef != null ? clientRef : ""}</Text>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
                                <Text>Timestamp</Text>
                                <Text>{transactionTimestamp != null ? transactionTimestamp : ""}</Text>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
                                <Text>Status</Text>
                                <Text>Success</Text>
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
                        onPress={() => navigation.reset({
                            index: 0,
                            routes: [{ name: 'Main' }],
                        })}>
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
        transactionTimestamp: transferReducer.transactionTimestamp,
        clientRef: transferReducer.clientRef
    }
}

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(TransferStatusScreen);