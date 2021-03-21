import { CommonActions, StackActions } from "@react-navigation/core";

export default {
    goToMain: StackActions.replace("Main"),
    resetToMain: CommonActions.reset({
        index: 1,
        routes: [{ name: "Main" }],
    }),
};
