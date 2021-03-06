import React, { useEffect } from "react";
import Scaffhold from "../components/Scaffhold";
import { Text, View, Image } from "react-native";
import * as Animatable from "react-native-animatable";
import { useAppComponent, useTheme } from "../Contexts";
import Fill from "../components/Fill";
import { connect } from "react-redux";
import { getCredential } from "../data/local/storage";
import { setCredential } from "../data/action/auth";

const SplashScreen = (props) => {
    const { navigation, dispatch } = props;
    const { appVersion, appName } = useAppComponent();
    const { colors, images, font } = useTheme();

    useEffect(() => {
        checkSession()
    }, [])

    const checkSession = async () => {
        let data = await getCredential([]);
        console.log("SESSION", data)
        if (data[0][1] != null && data[1][1] != null) {
            await dispatch(setCredential(data))
            navigation.replace("Home")
        } 
        else {
            navigation.replace("Login")
        }
    }

    return (
        <Scaffhold
            isPageCanScroll={false}
            body={
                <View
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: colors.white,
                        flex: 1,
                        padding: 16,
                    }}>
                    <Fill />

                    <Animatable.View
                        duration={400}
                        animation="blink"
                        >
                        <Image source={images.logo} style={{ width: 160, height: 160 }} />
                    </Animatable.View>

                    <Text style={{ marginTop: 48, fontSize: 24, color: colors.blue, fontFamily: font.medium }}>{appName}</Text>

                    <Fill />

                    <Text
                        style={{
                            marginBottom: 32,
                            fontSize: 16,
                            color: colors.blue,
                        }}>
                        Ver {appVersion}
                    </Text>
                </View>
            }
        />
    );
};

const mapStateToProps = ({ authReducer }) => {
    return {
        sessionId: authReducer.sessionId,
        accountId: authReducer.accountId,
    }
}

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
