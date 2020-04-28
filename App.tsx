import * as React from 'react';
import Navigator from "./src/navigations/index";
import {StatusBar, View} from "react-native";

export default function App() {
    return (
        <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
          <Navigator/>
        </View>
        );
}
