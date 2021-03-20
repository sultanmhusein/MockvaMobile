import React, { useEffect, useState } from "react";
import { View, Image, TouchableOpacity, Alert, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Images from '../../constants/images';
import { connect } from "react-redux";
import { useTheme } from "../Contexts";

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();
const Tab = AnimatedTabBarNavigator();

const BottomTabs = () => {
    const { colors, styles, font } = useTheme();
    return (
        // <Tab.Navigator
        //     backBehavior="history"
        //     tabBarOptions={{
        //         activeTintColor: Colors.grayBlue,
        //         inactiveTintColor: Colors.grayBlue,
        //         activeBackgroundColor: Colors.darkBlue,
        //         inactiveBackgroundColor: Colors.darkBlue,
        //         keyboardHidesTabBar: true,
        //     }}>
        //     <Tab.Screen
        //         name="Main"
        //         component={require("./MainScreen").default}
        //         options={{
        //             tabBarIcon: ({ color }) => (
        //                 <Icon name="home" size={22} color={color} />
        //             ),
        //         }}
        //     />
        //     <Tab.Screen
        //         name="Transfer"
        //         component={require("./TransferScreen").default}
        //         options={{
        //             tabBarIcon: ({ color }) => (
        //                 <Icon name="heart" size={22} color={color} />
        //             ),
        //         }}
        //     />
        //     <Tab.Screen
        //         name="Account"
        //         component={require("./AccountScreen").default}
        //         options={{
        //             tabBarIcon: ({ color }) => (
        //                 <Icon name="cat" size={22} color={color} />
        //             ),
        //         }}
        //     />
        // </Tab.Navigator>
        <Tab.Navigator
        backBehavior="history"
        appearence={{
            // floating: true,
            activeColors: [colors.white, colors.white, colors.white, colors.white],
            activeTabBackgrounds: [colors.blue, colors.blue, colors.blue, colors.blue],
            dotSize: 'small',
            dotCornerRadius: 24,
            }}
            tabBarOptions={{
                backgroundColor: 'red',
                showLabel: true,
                activeTintColor: colors.blue,
                inactiveTintColor: colors.blue,
                labelStyle: {
                    paddingBottom: 0,
                },
                tabStyle: {
                    // borderTopWidth: 0.5,
                    // borderColor: colors.accent,
                    backgroundColor: colors.white,
                },
                style: {
                    position: 'absolute'
                }
            }}
            >
                <Tab.Screen
            name="Home"
            component={require("./MainScreen").default}
            options={{
                tabBarIcon: ({ focused, color, size }) => <Icon name="home" size={size ? size : 24} color={focused ? color : "#222"} focused={focused} color={color} />
            }} />
           <Tab.Screen
            name="Transfer"
            component={require("./TransferScreen").default}
            options={{
                tabBarIcon: ({ focused, color, size }) => <Icon name="swap-vertical" size={size ? size : 24} color={focused ? color : "#222"} focused={focused} color={color} />
            }} />
           <Tab.Screen
            name="History"
            component={require("./HistoryScreen").default}
            options={{
                tabBarIcon: ({ focused, color, size }) => <Icon name="history" size={size ? size : 24} color={focused ? color : "#222"} focused={focused} color={color} />
            }} />
            <Tab.Screen
            name="Account"
            component={require("./AccountScreen").default}
            options={{
                tabBarIcon: ({ focused, color, size }) => <Icon name="account" size={size ? size : 24} color={focused ? color : "#222"} focused={focused} color={color} />
            }} />
        </Tab.Navigator>
    );
};

const Routes = ({ initialParams, initialRoute }) => {
    return (
        <Stack.Navigator initialRouteName={initialRoute}>
            <Stack.Screen
                name="Splash"
                component={require("./SplashScreen").default}
                options={{ headerShown: false, headerBackTitle: "Kembali" }}
            />
            <Stack.Screen
                name="Main"
                component={BottomTabs}options={({ navigation }) => ({
                    headerBackTitle: () => <Text>KEMBALI</Text>,
                    headerTitle: () => (
                        <Text style={{textAlign: "center", fontSize: 16}}>Mockva Mobile</Text>
                    )
                })}
            />
            <Stack.Screen
                name="Login"
                component={require("./LoginScreen").default}
                options={{ headerShown: false, headerBackTitle: "Kembali" }}
            />
            <Stack.Screen
                name="TransferInquiry"
                component={require("./TransferInquiryScreen").default}
                options={{ headerBackTitle: "Kembali", headerTitle: "Transfer" }}
            />
            <Stack.Screen
                name="TransferStatus"
                component={require("./TransferStatusScreen").default}
                options={{ headerBackTitle: "Kembali", headerTitle: "Transfer" }}
            />
            <Stack.Screen
                name="Bonus"
                component={require("./BonusScreen").default}
                options={{ headerShown: false, headerBackTitle: "Kembali" }}
            />
            <Stack.Screen
                name="DetailProduct"
                component={require("./DetailProductScreen").default}
                options={{ headerShown: true, headerBackTitle: "Kembali" }}
            />
        </Stack.Navigator>
    );
};

export default Routes;
