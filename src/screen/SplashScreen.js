import React, { useEffect } from "react";
import Scaffhold from "../components/Scaffhold";
import { Text, View, Image } from "react-native";
import * as Animatable from "react-native-animatable";
import { useAppComponent, useNavigator, useTheme } from "../Contexts";
import Fill from "../components/Fill";
import { connect } from "react-redux";
import { getCredential } from "../data/local/storage";
import { setUpCredential } from "../data/action/auth";

const SplashScreen = (props) => {
    const { navigation, dispatch, credential } = props;
    const { appVersion, appName, navigator } = useAppComponent();
    const { colors, images } = useTheme();

    // console.log("cccccccc ", credential)
    console.log("gggggggg", getCredential())

    useEffect(() => {
        checkSession()
        // const data = getCredential();
        // console.log("DATA SPLASH", data)
        // if (data != null) {
        //     dispatch(setUpCredential(data))
        //     navigation.replace("Main")
        // } 
        // else {
        //     console.log("DATANYA", data)
        //     navigation.replace("Login")
        // }
    }, [])

    const checkSession = async () => {
        let data = await getCredential();
        if (data != null) {
            await dispatch(setUpCredential(data))
            console.log("DATANYA KE MAIN", data)
            navigation.replace("Main")
        } 
        else {
            console.log("DATANYA KE LOGIN", data)
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
                        duration={1000}
                        animation="blink"
                        >
                        <Image source={images.logo} style={{ width: 160, height: 160 }} />
                    </Animatable.View>

                    <Text style={{ marginTop: 48, fontSize: 24, color: colors.blue }}>{appName}</Text>

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
        credential: authReducer.credential
    }
}

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
