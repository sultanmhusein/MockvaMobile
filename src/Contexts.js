import React, { createContext, useContext } from "react";
import Colors from "../constants/colors";
import Styles from "../constants/styles";
import Images from "../constants/images";
// import navigator from "./navigator";

export const AppComponentContext = createContext({
    networkStatus: false,
    keyboardShown: false,
    appVersion: "",
    appName: "",
    // navigator: navigator,
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
    },
});
export const ThemeProvider = ThemeContext.Provider;
export const useTheme = () => useContext(ThemeContext);
// export const NavigatorContext = createContext(navigator);
// export const NavigatorProvider = NavigatorContext.Provider;
// export const useNavigator = () => useContext(NavigatorContext);
