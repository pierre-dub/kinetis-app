import * as React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, View} from "react-native";

import Home from "./src/views/Home";
import Connexion from "./src/views/Connexion";
import TabNavigator from "./src/components/TabNavigator";
import workoutDetail from "./src/components/WorkoutDetail";
import Navigator from "./src/navigations/homeStack";
const Stack = createStackNavigator();

function WelcomeStack() {
    return (
        <Stack.Navigator headerMode={"none"}>
            <Stack.Screen name="Connexion" component={Connexion}/>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Listing" component={TabNavigator} />
            <Stack.Screen name="New" component={TabNavigator} />
            <Stack.Screen name="Patients" component={TabNavigator} />
            <Stack.Screen name="Settings" component={TabNavigator} />
            <Stack.Screen name="WorkoutDetail" component={workoutDetail}/>
        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
            <Navigator/>
        </View>
    );
}
