import React from "react";
import Scaffhold from "../components/Scaffhold";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as Animatable from "react-native-animatable";
import { useAppComponent, useNavigator, useTheme } from "../Contexts";
import Colors from "../../constants/colors";
import Fill from "../components/Fill";

const SplashScreen = (props) => {
    const { navigation } = props;
    const { appVersion, appName, navigator } = useAppComponent();
    const { colors } = useTheme();
    return (
        <Scaffhold
            body={
                <View
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: Colors.background,
                        flex: 1,
                        padding: 16,
                    }}>
                    <Fill />

                    <Animatable.View
                        duration={2800}
                        animation="logoAnimation"
                        onAnimationEnd={() =>
                            setTimeout(
                                () => navigation.dispatch(navigator.goToMain),
                                1000,
                            )
                        }>
                        <Icon
                            name="react"
                            size={100}
                            color={Colors.red}
                        />
                    </Animatable.View>

                    <Animatable.Text
                        dutaion={400}
                        animation="blink"
                        style={{
                            marginTop: 8,
                            fontSize: 20,
                            fontWeight: "bold",
                            color: Colors.red,
                        }}>
                        Sharingan
                    </Animatable.Text>

                    <Animatable.Text
                        dutaion={400}
                        animation="blink"
                        style={{
                            marginTop: 8,
                            fontSize: 12,
                            fontWeight: "bold",
                            color: Colors.red,
                        }}>
                        {appName}
                    </Animatable.Text>

                    <Fill />

                    <Text
                        style={{
                            marginBottom: 8,
                            fontSize: 16,
                            color: Colors.red,
                        }}>
                        Ver {appVersion}
                    </Text>
                </View>
            }
        />
    );
};

export default SplashScreen;
