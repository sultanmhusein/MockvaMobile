import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class FavoriteScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontFamily: 'PoppinsMedium'}}>FavoriteScreen</Text>
                <Text>FavoriteScreen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
