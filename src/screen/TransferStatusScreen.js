import React from "react";
import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, ToastAndroid } from "react-native";
import {  Button } from "react-native-paper";
import {useTheme } from "../Contexts";
import Scaffhold from "../components/Scaffhold";
import { connect } from "react-redux";
import { currencyFormat } from "../../constants/helper";
import Clipboard from '@react-native-clipboard/clipboard';
import Icon from 'react-native-vector-icons/FontAwesome';

const TransferStatusScreen = (props) => {
    const { navigation, accountSrcId, accountSrcName, accountDstId, accountDstName, amount, transactionTimestamp, clientRef } = props;
    const { colors, images, styles, font } = useTheme();
    return (
        <Scaffhold
            isPageCanScroll={false}
            body={
                <View style={{ flex: 1, padding: 16 }}>
                    <SafeAreaView>
                        <ScrollView>
                            <View style={{backgroundColor: colors.white, padding: 16, borderWidth: 2, borderColor: colors.lightgray, borderRadius: 8}}>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <Text>{transactionTimestamp != null ? transactionTimestamp : ""}</Text>
                                    <Text style={{fontFamily: font.medium, color: colors.blue}}>Mockva</Text>
                                </View>
                                <Image source={images.success} style={{ ...styles.imageCenter, width: 80, height: 80, marginVertical: 16 }} />
                                <View style={{ ...styles.containerRow, justifyContent: "center" }}>
                                    <Text style={{color: colors.blue, fontSize: 14, fontFamily: font.medium, textAlign: 'center'}}>{clientRef != null ? clientRef : ""}</Text>
                                    <TouchableOpacity onPress={() => {
                                        Clipboard.setString(clientRef);
                                        ToastAndroid.show('Copied to clipboard', ToastAndroid.LONG)
                                    }}>
                                        <Icon name="copy" size={16} color={colors.black} style={{marginLeft: 4}} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{justifyContent: "space-between", marginBottom: 8, borderBottomWidth: 0.5, borderColor: colors.blue}}>
                                    <Text>Send From</Text>
                                    <Text style={styles.textMediumBig}>{accountSrcName != null ? accountSrcName : ""}</Text>
                                    <Text style={{fontSize: 16}}>Mockva - {accountSrcId != null ? accountSrcId : ""}</Text>
                                </View>
                                <View style={{justifyContent: "space-between", borderBottomWidth: 0.5, borderColor: colors.blue}}>
                                    <Text>Send To</Text>
                                    <Text style={styles.textMediumBig}>{accountDstName != null ? accountDstName : ""}</Text>
                                    <Text style={{fontSize: 16}}>Mockva - {accountDstId != null ? accountDstId : ""}</Text>
                                </View>
                                <View style={{justifyContent: "space-between", marginTop: 8}}>
                                    <Text>Amount</Text>
                                    <Text style={{fontSize: 32, fontFamily: font.medium, color: colors.blue}}>{amount != null ? currencyFormat(parseInt(amount)) : "0"}</Text>
                                </View>
                            </View>
                        </ScrollView>
                    </SafeAreaView>
                    <Button
                        mode="contained"
                        color={colors.blue}
                        style={{ marginTop: 8 }}
                        onPress={() => 
                            navigation.reset({
                            index: 0,
                            routes: [{ name: "Home" }]})
                        }>
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