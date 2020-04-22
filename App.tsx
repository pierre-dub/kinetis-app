import * as React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {StatusBar, View} from "react-native";
import Navigator from "./src/navigations/homeStack";

export default function App() {
    return (
        <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
            <Navigator/>
        </View>
    );
}
