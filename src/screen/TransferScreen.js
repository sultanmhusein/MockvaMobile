import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useAppComponent, useTheme } from "../Contexts";
import Scaffhold from "../components/Scaffhold";

const TransferScreen = (props) => {
    const { navigation } = props;
    const { networkStatus } = useAppComponent();
    const { colors, images, styles } = useTheme();
    const [accountDestination, setAccountDestination] = useState("");
    const [amount, setAmount] = useState("");
    const [isRequesting, setIsRequesting] = useState(false);

    console.log("HAHA");
    return (
        <Scaffhold
            isPageCanScroll={false}
            body={
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        padding: 24,
                    }}>
                    <SafeAreaView>
                        <ScrollView>
                            <TextInput
                                label="Account Destination"
                                mode="flat"
                                value={accountDestination}
                                style={{
                                    backgroundColor: colors.white,
                                    color: colors.blue,
                                    marginTop: 8,
                                }}
                                onChangeText={(accountDestination) =>
                                    setAccountDestination(accountDestination)
                                }
                            />
                            <TextInput
                                label="Amount"
                                mode="flat"
                                value={amount}
                                style={{
                                    backgroundColor: colors.white,
                                    color: colors.blue,
                                    marginTop: 8,
                                }}
                                onChangeText={(amount) =>
                                    setAmount(amount)
                                }
                            />
                        </ScrollView>
                    </SafeAreaView>
                    <Button
                        mode="contained"
                        color={colors.blue}
                        style={{ marginTop: 8 }}
                        // loading={isRequesting}
                        // disabled={
                        //     isRequesting ||
                        //     accountDestination == "" ||
                        //     amount == ""
                        // }
                        onPress={() => navigation.navigate("TransferInquiry")}>
                        Transfer
                    </Button>
                </View>
            }
        />
    );
};

export default TransferScreen;
