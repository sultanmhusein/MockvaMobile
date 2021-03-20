import { CommonActions, StackActions } from "@react-navigation/core";

export default {
    goToMain: StackActions.replace("Login"),
    resetToMain: CommonActions.reset({
        index: 1,
        routes: [{ name: "Login" }],
    }),
};
