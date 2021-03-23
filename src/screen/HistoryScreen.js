import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useAppComponent, useTheme } from "../Contexts";
import Scaffhold from "../components/Scaffhold";
import { historyGet } from "../data/action/history";
import { connect } from "react-redux";
import { currencyFormat } from "../../constants/helper";
import moment from 'moment-timezone';

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

    const historyList = history != null ? history.reverse() : history
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
                        data={historyList}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item, index}) => {
                            const timeStamp = item.transactionTimestamp;
                            const dateOnly = timeStamp.slice(0, 10);
                            const timeOnly = timeStamp.slice(11, 16)
                            const date = moment(dateOnly).format('D MMMM YYYY')
                            return (
                                <TouchableOpacity
                                    style={{
                                        borderBottomWidth: 1,
                                        borderColor: colors.darkgray
                                    }}
                                >
                                    <View>
                                        <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
                                            <Text style={{color: colors.darkgray}}>Date</Text>
                                            <Text style={{color: colors.darkgray}}>{date}{' '}{timeOnly}</Text>
                                        </View>
                                        <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
                                            <Text style={{color: colors.darkgray}}>Amount</Text>
                                            <Text style={{color: colors.darkgray}}>{currencyFormat(parseInt(item.amount))}</Text>
                                        </View>
                                        <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
                                            <Text style={{color: colors.darkgray}}>Ref</Text>
                                            <Text style={{color: colors.darkgray}}>{item.clientRef}</Text>
                                        </View>
                                        <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
                                            <Text style={{color: colors.darkgray}}>Destination</Text>
                                            <Text style={{color: colors.darkgray}}>{item.accountDstId}</Text>
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