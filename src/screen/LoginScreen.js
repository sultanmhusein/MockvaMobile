import React, { useState, useEffect } from "react";
import { View, Text, Image, KeyboardAvoidingView } from "react-native";
import { useTheme } from "../Contexts";
import Scaffhold from "../components/Scaffhold";
import { TextInput, Button } from "react-native-paper";
import { connect } from "react-redux";
import { authLogin } from "../data/action/auth";
import { AlertMessage } from "../components/AlertMessage";

const LoginScreen = (props) => {
    const { navigation, dispatch, sessionStatus, sessionId, messageLogin } = props;
    const { colors, images, styles, font } = useTheme();
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
            navigation.replace("Home")
        } else if (sessionId != null) {
            AlertMessage("Login Failed", "Please try again")
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
                    <KeyboardAvoidingView>
                    <Image source={images.logo} style={{ ...styles.imageCenter, width: 160, height: 160 }} />
                    <Text style={{ color: colors.blue, fontSize: 20, textAlign: "center", marginTop: 16, fontFamily: font.medium}}>Mockva Mobile</Text>
                    <Text style={{color: colors.red, textAlign: 'center'}}>{messageLogin}</Text>
                    <TextInput
                        label="Username"
                        mode="flat"
                        value={username}
                        style={styles.textInputFlat}
                        onChangeText={username => setUsername(username)}
                    />
                    <TextInput
                        label="Password"
                        mode="flat"
                        value={password}
                        secureTextEntry={true}
                        style={styles.textInputFlat}
                        onChangeText={password => setPassword(password)}
                    />
                    </KeyboardAvoidingView>
                    <Button
                        mode="contained"
                        color={colors.blue}
                        style={{ marginTop: 24 }}
                        loading={isRequesting}
                        disabled={isRequesting || username == '' || password == ''}
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
        messageLogin: authReducer.messageLogin
    }
}

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);