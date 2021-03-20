import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useAppComponent, useTheme } from "../Contexts";
import Scaffhold from "../components/Scaffhold";

const MainScreen = (props) => {
    const { navigation } = props;
    const { networkStatus } = useAppComponent();
    const { colors, images, styles } = useTheme();

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
                        <Text style={{ color: colors.white }}>Name</Text>
                        <Text style={{ color: colors.white }}>Balance</Text>
                    </View>
                </View>
            }
        />
    );
};

export default MainScreen;
