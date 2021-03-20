import React from "react";
import AppComponent from "./src/AppComponent";
import { configureFonts, DefaultTheme, Provider } from "react-native-paper";
import { registerAnimation } from "./constants/animation";

const paperTheme = {
    ...DefaultTheme,
    fonts: configureFonts(FontConfig),
    roundness: 4,
    colors: {
        ...DefaultTheme.colors,
        // primary: "#767676",
        primary: "#0280FA",
        accent: "#FFF",
    },
};

const FontConfig = {
    default: {
      regular: {
        fontFamily: 'PoppinsRegular',
        fontWeight: 'normal',
      },
      medium: {
        fontFamily: 'PoppinsMedium',
        fontWeight: 'normal',
      },
      light: {
        fontFamily: 'PoppinsLight',
        fontWeight: 'normal',
      },
      bold: {
        fontFamily: 'PoppinsBold',
        fontWeight: 'bold'
      },
    },
  };

registerAnimation();

export default function App() {
    return (
        <Provider theme={paperTheme}>
            <AppComponent />
        </Provider>
    );
}
