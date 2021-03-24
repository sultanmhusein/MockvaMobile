import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import { Button } from "react-native-paper";
import { useTheme } from "../Contexts";
import Scaffhold from "../components/Scaffhold";
import { connect } from "react-redux";
import { transferClear, transferConfirm } from "../data/action/transfer";
import { AlertMessageReset } from "../components/AlertMessage";
import { currencyFormat } from "../../constants/helper";

const TransferInquiryScreen = (props) => {
    const { navigation, dispatch, sessionId, accountSrcId, accountSrcName, accountDstId, accountDstName, amount, inquiryId, transferInq } = props;
    const { colors, images, styles, font } = useTheme();
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
                    routes: [{name: "Home"}],
                });
                dispatch(transferClear())
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
                        padding: 16,
                    }}>
                    <SafeAreaView>
                        <ScrollView>
                            <View style={{backgroundColor: "white", padding: 16, borderWidth: 2, borderColor: colors.lightgray, borderRadius: 8}}>
                                <Text style={{...styles.textMediumBig, color: colors.blue, textAlign: 'center'}}>Confirm Transfer</Text>
                                <Image source={images.logo} style={{ width: 120, height: 120, justifyContent: 'center', alignSelf: "center", marginVertical: 16 }} />
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
                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                        <Button
                            mode="outlined"
                            color={colors.blue}
                            style={{ marginTop: 8, width: '45%', marginRight: '5%' }}
                            onPress={() => {navigation.reset({
                                index: 0,
                                routes: [{name: "Home"}],
                            })}}>
                            Cancel
                        </Button>
                        <Button
                            mode="contained"
                            color={colors.blue}
                            style={{ marginTop: 8, width: '45%' }}
                            loading={isRequesting}
                            disabled={
                                isRequesting ||
                                accountSrcId == "" ||
                                accountSrcName == "" ||
                                accountDstId == "" ||
                                accountDstName == "" ||
                                amount == "0"
                            }
                            onPress={Transfer}>
                            Transfer
                        </Button>
                    </View>
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