import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useAppComponent, useTheme } from "../Contexts";
import Scaffhold from "../components/Scaffhold";
import { connect } from "react-redux";
import { currencyFormat } from "../../constants/helper";

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
                        padding: 16,
                    }}>
                    <SafeAreaView>
                        <ScrollView>
                            <View style={{backgroundColor: "white", padding: 16, borderWidth: 2, borderColor: colors.lightgray, borderRadius: 8}}>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <Text>{transactionTimestamp != null ? transactionTimestamp : ""}</Text>
                                    <Text style={{fontFamily: "PoppinsMedium", color: colors.blue}}>Mockva</Text>
                                </View>
                                <Image source={images.logo} style={{ width: 120, height: 120, justifyContent: 'center', alignSelf: "center", marginVertical: 16 }} />
                                <Text style={{color: colors.blue, fontSize: 14, fontFamily: "PoppinsMedium", textAlign: 'center'}}>{clientRef != null ? clientRef : ""}</Text>
                                <View style={{flexDirection: 'column', justifyContent: "space-between", marginBottom: 8, borderBottomWidth: 0.5, borderColor: colors.blue}}>
                                    <Text>Send From</Text>
                                    <Text style={{fontSize: 20, fontFamily: "PoppinsMedium"}}>{accountSrcName != null ? accountSrcName : ""}</Text>
                                    <Text style={{fontSize: 16}}>Mockva - {accountSrcId != null ? accountSrcId : ""}</Text>
                                </View>
                                <View style={{flexDirection: 'column', justifyContent: "space-between", borderBottomWidth: 0.5, borderColor: colors.blue}}>
                                    <Text>Send To</Text>
                                    <Text style={{fontSize: 20, fontFamily: "PoppinsMedium"}}>{accountDstName != null ? accountDstName : ""}</Text>
                                    <Text style={{fontSize: 16}}>Mockva - {accountDstId != null ? accountDstId : ""}</Text>
                                </View>
                                <View style={{flexDirection: 'column', justifyContent: "space-between", marginTop: 8}}>
                                    <Text>Amount</Text>
                                    <Text style={{fontSize: 32, fontFamily: "PoppinsMedium", color: colors.blue}}>{amount != null ? currencyFormat(parseInt(amount)) : "0"}</Text>
                                </View>
                            </View>
                        </ScrollView>
                    </SafeAreaView>
                    <Button
                        mode="contained"
                        color={colors.blue}
                        style={{ marginTop: 8 }}
                        onPress={() => navigation.reset({
                            index: 0,
                            routes: [{ name: 'Main' }],
                        })}>
                        Ok
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