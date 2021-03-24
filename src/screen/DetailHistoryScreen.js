import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useAppComponent, useTheme } from "../Contexts";

const ProfileScreen = (props) => {
    const { networkStatus } = useAppComponent();
    const { route } = props;
    const { colors, styles, font, images } = useTheme();
    return (
        <View
            style={{ flex: 1, alignItems: "center" }}>
            <Image
                source={images.ecommerce[route.params.image]}
                style={{
                    width: 240,
                    height: 240,
                    resizeMode: "contain",
                    aspectRatio: 1,
                }}
            />
            <Text>{route.params.title}</Text>
        </View>
    );
};

export default ProfileScreen;
