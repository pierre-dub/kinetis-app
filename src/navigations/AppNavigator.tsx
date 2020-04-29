import * as React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from '@react-navigation/native';

import Connexion from "../views/Connexion";
import TabNavigator from "../components/TabNavigator";
import WorkoutDetail from "../views/WorkoutDetail";
import Listing from "../views/Listing";
import New from "../views/New";
import Patients from "../views/Patients";
import Settings from "../views/Settings";

const Stack = createStackNavigator();

export default function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode={"none"}>
                <Stack.Screen name="Home" component={TabNavigator} />
                <Stack.Screen name="Listing" component={Listing} />
                <Stack.Screen name="New" component={New} />
                <Stack.Screen name="Patients" component={Patients} />
                <Stack.Screen name="Settings" component={Settings} />
                <Stack.Screen name="WorkoutDetail" component={WorkoutDetail}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}