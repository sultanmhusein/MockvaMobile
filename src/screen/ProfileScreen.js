import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Images from '../../constants/images'
import MaleAvatar from '../../assets/images/maleAvatar.svg';

const ProfileScreen = (props) => {
        return (
            <View>
                {/* <MaleAvatar height={40} width={40} /> */}
                {Images.maleAvatar()} 
            </View>
        );
}

export default ProfileScreen
