import React, { useState } from "react";
import {
    View,
    Text,
    RefreshControl,
    ScrollView,
    SafeAreaView,
} from "react-native";
import { Appbar, Searchbar } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useTheme } from "../Contexts";

const Scaffhold = ({
    networkStatus = true,
    networkProperties = {
        label: "Not Connected To Internet",
        style: {},
        icon: "cloud-off-outline",
        iconSize: 50,
    },
    isPageCanScroll = true,
    isPageCanRefresh = true,
    isRefreshing = false,
    isAppbarCustom = false,
    onRefresh = () => {},
    body,
    theme = useTheme(),
}) => {
    let render = body;

    if (!networkStatus)
        render = (
            <View
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                }}>
                <Icon
                    name={networkProperties.icon}
                    size={networkProperties.iconSize}
                    color={theme.colors.white}
                />
                <Text
                    style={{
                        marginTop: 4,
                        color: theme.colors.white,
                        ...networkProperties.style,
                    }}>
                    {networkProperties.label}
                </Text>
            </View>
        );

    const [searchQuery, setSearchQuery] = useState("");
    const onChangeSearch = (query) => setSearchQuery(query);
    if (isAppbarCustom)
        return (
            <View style={{ flex: 1, backgroundColor: theme.colors.white }}>
                <Appbar.Header style={{elevation: 0}}>
                    <Searchbar
                        placeholder="Search"
                        style={{
                            flex: 1,
                            marginHorizontal: "0.25%",
                            paddingVertical: 0,
                            fontFamily: "PoppinsRegular",
                            height: "80%",
                            fontSize: 8,
                        }}
                        onChangeText={onChangeSearch}
                        value={searchQuery}
                    />
                    <Appbar.Action
                        icon="abjad-hebrew"
                        color={"white"}
                        onPress={() => console.log("Icon 1")}
                        style={{ width: "10%" }}
                    />
                    <Appbar.Action
                        icon="abugida-thai"
                        color={"white"}
                        onPress={() => console.log("Icon 2")}
                        style={{ width: "10%" }}
                    />
                </Appbar.Header>
                {render}
            </View>
        );

    if (isPageCanScroll)
        return (
            <SafeAreaView>
                <ScrollView
                    style={{
                        flex: 1,
                        backgroundColor: theme.colors.white,
                    }}
                    contentContainerStyle={{ flexGrow: 1 }}
                    keyboardShouldPersistTaps="handled"
                    refreshControl={
                        isPageCanRefresh && (
                            <RefreshControl
                                tintColor={theme.colors.white}
                                refreshing={isRefreshing}
                                onRefresh={onRefresh}
                            />
                        )
                    }>
                    {render}
                </ScrollView>
            </SafeAreaView>
        );

    return (
        <View style={{ flex: 1, backgroundColor: theme.colors.white }}>
            {render}
        </View>
    );
};

export default Scaffhold;
