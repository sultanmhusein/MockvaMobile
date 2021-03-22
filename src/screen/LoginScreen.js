import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useAppComponent, useTheme } from "../Contexts";
import Scaffhold from "../components/Scaffhold";
import { TextInput, Button } from "react-native-paper";
import { connect } from "react-redux";
import { authLogin } from "../data/action/auth";

const LoginScreen = (props) => {
    const { navigation, dispatch, sessionStatus, sessionId } = props;
    const { networkStatus } = useAppComponent();
    const { colors, images, styles } = useTheme();
    const [username, setUsername] = useState("USER040905");
    const [password, setPassword] = useState("QYd2991");
    const [isRequesting, setIsRequesting] = useState(false);
    const setRequesting = requesting => setIsRequesting(requesting);

    const Login = async () => {
        setRequesting(true);
        await dispatch(authLogin(username, password))
    }

    useEffect(() => {
        setRequesting(false);
        if (sessionId != null && sessionStatus == 'ACTIVE') {
            navigation.replace('Main')
        } else if (sessionId != null) {
            console.log("LOGIN GAGAL")
            
        }
    }, [sessionId])

    return (
        <Scaffhold 
            isPageCanScroll={false}
            body={
                <View style={{
                    flex: 1,
                    justifyContent: "center",
                    padding: 24
                }}>
                    <Text style={{ color: colors.black, fontSize: 20, textAlign: "center" }}>Mockva Mobile</Text>
                    <TextInput
                        label="Username"
                        mode="flat"
                        value={username}
                        style={{ backgroundColor: colors.white, color: colors.blue, marginTop: 32 }}
                        onChangeText={username => setUsername(username)}
                    />
                    <TextInput
                        label="Password"
                        mode="flat"
                        value={password}
                        // underlineColor={colors.blue}
                        style={{ backgroundColor: colors.white, color: colors.blue, marginTop: 32 }}
                        onChangeText={password => setPassword(password)}
                    />
                    <Button
                        mode="contained"
                        color={colors.blue}
                        style={{ marginTop: 64 }}
                        // loading={isRequesting}
                        // disabled={isRequesting || username == '' || password == ''}
                        onPress={Login}>
                        Login
                    </Button>
                </View>
            }
        />
    )
}

const mapStateToProps = ({ authReducer }) => {
    return {
        sessionStatus: authReducer.sessionStatus,
        sessionId: authReducer.sessionId,
    }
}

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);