import React from "react";
import { View } from "react-native";
import { useTheme } from "../Contexts";

const { colors } = useTheme();

const Line = ({
    space = 2,
    mode = "horizontal" || "vertical",
    color = colors.dark,
    margin = 0,
}) =>
    mode == "horizontal" ? (
        <View
            style={{
                backgroundColor: color,
                height: space,
                width: "100%",
                marginVertical: margin,
            }}
        />
    ) : (
        <View
            style={{
                backgroundColor: Color,
                width: space,
                height: "100%",
                marginVertical: margin,
            }}
        />
    );

export default Line;
