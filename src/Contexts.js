import React, { createContext, useContext } from "react";
import Colors from "../constants/colors";
import Styles from "../constants/styles";
import Images from "../constants/images";

export const AppComponentContext = createContext({
    networkStatus: false,
    keyboardShown: false,
    appVersion: "",
    appName: "",
});
export const AppComponentProvider = AppComponentContext.Provider;
export const useAppComponent = () => useContext(AppComponentContext);
export const ThemeContext = createContext({
    colors: Colors,
    styles: Styles,
    images: Images,
    font: {
        normal: "PoppinsRegular",
        light: "PoppinsLight",
        medium: "PoppinsMedium"
    },
});
export const ThemeProvider = ThemeContext.Provider;
export const useTheme = () => useContext(ThemeContext);
