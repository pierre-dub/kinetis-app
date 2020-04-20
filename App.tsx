import * as React from 'react';
import Connexion from "./component/connexion";
import TabNavigator from "./component/tabNavigator";

import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, View} from "react-native";

const Stack = createStackNavigator();

function WelcomeStack() {
    return (
        <Stack.Navigator headerMode={"none"}>
            <Stack.Screen name="Connexion" component={Connexion}/>
            <Stack.Screen name="Home" component={TabNavigator} />
        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
            <NavigationContainer>
                <WelcomeStack/>
            </NavigationContainer>
        </View>
    );
}
