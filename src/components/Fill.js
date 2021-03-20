import React from "react";
import { View } from "react-native";

const Fill = ({ space = 0 }) => (
    <View style={{ flex: space == 0 ? 1 : 0, height: space, width: space }} />
);

export default Fill;
