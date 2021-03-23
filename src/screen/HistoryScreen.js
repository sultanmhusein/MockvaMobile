import React, { useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useTheme } from "../Contexts";
import Scaffhold from "../components/Scaffhold";
import { historyGet } from "../data/action/history";
import { connect } from "react-redux";
import { currencyFormat } from "../../constants/helper";
import moment from 'moment-timezone';

const HistoryScreen = (props) => {
    const { dispatch, sessionId, accountSrcId, history } = props;
    const { colors, styles } = useTheme();

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
                    padding: 4
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
                                        borderBottomWidth: 0.5,
                                        borderColor: colors.blue,
                                        padding: 8
                                    }}
                                >
                                    <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
                                        <Text style={{color: colors.darkgray, fontFamily: "PoppinsMedium"}}>{item.clientRef}</Text>
                                        <Text style={{color: colors.blue, fontFamily: "PoppinsMedium"}}>{currencyFormat(parseInt(item.amount))}</Text>
                                    </View>
                                    <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
                                        <Text style={{color: colors.blue, fontFamily: "PoppinsMedium"}}>{date}{' '}{timeOnly}</Text>
                                        <Text style={{color: colors.darkgray, fontFamily: "PoppinsMedium"}}>{item.accountDstId}</Text>
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