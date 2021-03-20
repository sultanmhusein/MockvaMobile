import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useAppComponent, useTheme } from "../Contexts";
import Scaffhold from "../components/Scaffhold";
import { TextInput, Button } from "react-native-paper";

const LoginScreen = (props) => {
    const { navigation } = props;
    const { networkStatus } = useAppComponent();
    const { colors, images, styles } = useTheme();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isRequesting, setIsRequesting] = useState(false);

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
                        onPress={() => navigation.replace("Main")}>
                        Login
                    </Button>
                </View>
            }
        />
    )
}

export default LoginScreen;
