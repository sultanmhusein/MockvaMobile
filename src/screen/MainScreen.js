import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useAppComponent, useTheme } from "../Contexts";
import Scaffhold from "../components/Scaffhold";
import { profileGet } from "../data/action/profile";
import { connect } from "react-redux";

const MainScreen = (props) => {
    const { navigation, profile, dispatch, credential, accountId, sessionId, } = props;
    const { networkStatus } = useAppComponent();
    const { colors, images, styles } = useTheme();
    
    useEffect(() => {
        getCredential()
    }, [])

    const getCredential = async () => {
        if (sessionId != null && accountId != null) {
            dispatch(profileGet(sessionId, accountId))
        }
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
                    <View style={{ backgroundColor: colors.blue, padding: 16, borderRadius: 8 }}>
                        <Text style={{ color: colors.white }}>Account Number</Text>
                        <Text style={{ color: colors.white }}>{profile != null ? profile.id : ""}</Text>
                        <Text style={{ color: colors.white }}>Name</Text>
                        <Text style={{ color: colors.white }}>{profile != null ? profile.name : ""}</Text>
                        <Text style={{ color: colors.white }}>Balance</Text>
                        <Text style={{ color: colors.white }}>{profile != null ? profile.balance : ""}</Text>
                    </View>
                </View>
            }
        />
    );
};

const mapStateToProps = ({ authReducer, profileReducer }) => {
    return {
        credential: authReducer.credential,
        sessionId: authReducer.sessionId,
        accountId: authReducer.accountId,
        profile: profileReducer.profile
    }
}

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
