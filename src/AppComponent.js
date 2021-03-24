import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppComponentProvider } from "./Contexts";
import Routes from "./screen/Routes";
import NetInfo from "@react-native-community/netinfo";
import DeviceInfo from "react-native-device-info";
import Globalfont from "react-native-global-font";
import { Keyboard } from "react-native";

const AppComponent = (props) => {
    const [networkStatus, setNetworkStatus] = useState(false)
    const [keyboardShown, setKeyboardShown] = useState(false)

    useEffect(() => {
        Globalfont.applyGlobal("PoppinsRegular")

        let timeout = null
        const netHandler = NetInfo.addEventListener(state => setNetworkStatus(state.isConnected))
        const keyboardShown = Keyboard.addListener("keyboardDidShow", () => {
            if (timeout != null)
                clearTimeout(timeout)
            setKeyboardShown(true)
        })
        const keyboardHide = Keyboard.addListener("keyboardDidHide", () => {
            timeout = setTimeout(() => setKeyboardShown(false), 500)
        })

        return () => {
            netHandler()
            keyboardShown.remove()
            keyboardHide.remove()
            clearTimeout(timeout)
        }
    }, [])

    return <AppComponentProvider value={{
        networkStatus: networkStatus,
        keyboardShown: keyboardShown,
        appVersion: DeviceInfo.getVersion(),
        appName: "Mockva",
    }}>
        <NavigationContainer>
            <Routes initialRoute="splash" />
        </NavigationContainer>
    </AppComponentProvider>
}

export default AppComponent;
