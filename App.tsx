import * as React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, View} from "react-native";

import Connexion from "./component/Connexion";
import TabNavigator from "./component/TabNavigator";
import workoutDetail from "./component/WorkoutDetail";

const Stack = createStackNavigator();

function WelcomeStack() {
    return (
        <Stack.Navigator headerMode={"none"}>
            <Stack.Screen name="Connexion" component={Connexion}/>
            <Stack.Screen name="Home" component={TabNavigator} />
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
            <NavigationContainer>
                <WelcomeStack/>
            </NavigationContainer>
        </View>
    );
}
