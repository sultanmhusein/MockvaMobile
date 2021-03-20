import * as Animatable from "react-native-animatable";

export const animations = {
    logoAnimation: "logoAnimation",
    blink: "blink",
};

export const registerAnimation = () => {
    Animatable.initializeRegistryWithDefinitions({
        logoAnimation: {
            0: {
                opacity: 0,
                scale: 0,
                transform: [{ rotate: "360deg" }],
            },
            0.2: {
                opacity: 0.7,
                scale: 0.7,
            },
            0.8: {
                opacity: 0.7,
                scale: 1.2,
                transform: [{ rotate: "-10deg" }],
            },
            1: {
                opacity: 1,
                scale: 1,
                transform: [{ rotate: "30deg" }],
            },
        },
        blink: {
            0: {
                opacity: 0,
                scale: 1,
            },
            0.8: {
                opacity: 0.8,
                scale: 1.1,
            },
            1: {
                opacity: 1,
                scale: 1,
            },
        },
    });
};
