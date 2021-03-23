import React from "react";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useTheme } from "../Contexts";
import colors from "../../constants/colors";

const Stack = createStackNavigator();
const Tab = AnimatedTabBarNavigator();

const BottomTabs = () => {
    const { colors, styles, font } = useTheme();
    return (
        <Tab.Navigator
        backBehavior="history"
        appearence={{
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
                        <Text style={{textAlign: "center", fontSize: 16, color: colors.blue, fontFamily: "PoppinsMedium"}}>Mockva Mobile</Text>
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
                name="DetailProduct"
                component={require("./DetailProductScreen").default}
                options={{ headerShown: true, headerBackTitle: "Kembali" }}
            />
        </Stack.Navigator>
    );
};

export default Routes;
