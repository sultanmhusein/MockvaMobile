import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useAppComponent, useTheme } from "../Contexts";
import Scaffhold from "../components/Scaffhold";
import { historyGet } from "../data/action/history";
import { connect } from "react-redux";
import { currencyFormat } from "../../constants/helper";

const HistoryScreen = (props) => {
    const { navigation, dispatch, sessionId, accountSrcId, history } = props;
    const { networkStatus } = useAppComponent();
    const { colors, images, styles } = useTheme();

    useEffect(() => {
        getCredential()
    }, [])

    const getCredential = async () => {
        if (sessionId != null) {
            dispatch(historyGet(sessionId, accountSrcId))
        }
    }

    console.log("SCREN HIS", history)

    const historyi = [
        {
            id: "01",
            date: "2020-04-03",
            amount: "1.000.000",
            ref: "1234123131",
            destination: "0123131313"
        },
        {
            id: "02",
            date: "2020-04-01",
            amount: "1.000.000",
            ref: "1234123131",
            destination: "0123131313"
        },
        {
            id: "03",
            date: "2020-04-03",
            amount: "1.000.000",
            ref: "1234123131",
            destination: "0123131313"
        },
        {
            id: "04",
            date: "2020-04-03",
            amount: "1.000.000",
            ref: "1234123131",
            destination: "0123131313"
        },
    ]
    
    return (
        <Scaffhold 
            isPageCanScroll={false}
            body={
                <View style={{
                    flex: 1,
                    justifyContent: "center",
                    padding: 8
                }}>
                    <FlatList 
                        data={history}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item, index}) => {
                            return (
                                <TouchableOpacity
                                    style={{
                                        borderBottomWidth: 1
                                    }}
                                >
                                    <View>
                                        <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
                                            <Text>Date</Text>
                                            <Text>{item.transactionTimestamp}</Text>
                                        </View>
                                        <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
                                            <Text>Amount</Text>
                                            <Text>{currencyFormat(parseInt(item.amount))}</Text>
                                        </View>
                                        <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
                                            <Text>Ref</Text>
                                            <Text>{item.clientRef}</Text>
                                        </View>
                                        <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
                                            <Text>Destination</Text>
                                            <Text>{item.accountDstId}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>
            }
        />
    )
}

const mapStateToProps = ({ authReducer, historyReducer }) => {
    return {
        sessionId: authReducer.sessionId,
        accountSrcId: authReducer.accountId,
        history: historyReducer.history
    }
}

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(HistoryScreen);