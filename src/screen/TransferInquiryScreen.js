import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useAppComponent, useTheme } from "../Contexts";
import Scaffhold from "../components/Scaffhold";

const TransferInquiryScreen = (props) => {
    const { navigation } = props;
    const { networkStatus } = useAppComponent();
    const { colors, images, styles } = useTheme();
    const [accountSource, setAccountSource] = useState("");
    const [accountSourceName, setAccountSourceName] = useState("");
    const [accountDestination, setAccountDestination] = useState("");
    const [accountDestinationName, setAccountDestinationName] = useState("");
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
                            <Text>Account Source</Text>
                            <Text>Account Source Name</Text>
                            <Text>Account Destination</Text>
                            <Text>Account Destination Name</Text>
                            <Text>Amount</Text>
                        </ScrollView>
                    </SafeAreaView>
                    <Button
                        mode="contained"
                        color={colors.blue}
                        style={{ marginTop: 8 }}
                        // loading={isRequesting}
                        // disabled={
                        //     isRequesting ||
                        //     accountSource == "" ||
                        //     accountSourceName == "" ||
                        //     accountDestination == "" ||
                        //     accountDestinationName == "" ||
                        //     amount == "amount"
                        // }
                        onPress={() => navigation.replace("TransferStatus")}>
                        Confirm
                    </Button>
                </View>
            }
        />
    );
};

export default TransferInquiryScreen;