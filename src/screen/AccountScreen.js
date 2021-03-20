import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { useAppComponent, useTheme } from "../Contexts";
import Scaffhold from "../components/Scaffhold";

const AccountScreen = (props) => {
    const { navigation } = props;
    const { networkStatus } = useAppComponent();
    const { colors, images, styles } = useTheme();
    
    return (
        <Scaffhold 
            isPageCanScroll={false}
            body={
                <View style={{
                    flex: 1,
                    justifyContent: "center",
                    padding: 24
                }}>
                    <Button
                        mode="contained"
                        color={colors.blue}
                        style={{ marginTop: 64 }}
                        // loading={isRequesting}
                        // disabled={isRequesting || username == '' || password == ''}
                        onPress={() => navigation.replace("Login")}>
                        Logout
                    </Button>
                    {/* <Text style={{ color: colors.black, fontSize: 20, textAlign: "center" }}>Account Screen</Text> */}
                </View>
            }
        />
    )
}

export default AccountScreen;