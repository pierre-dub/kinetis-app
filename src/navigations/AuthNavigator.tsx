import * as React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from '@react-navigation/native';

import SignIn from "../views/SignIn";

const Stack = createStackNavigator();

export default function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode={"none"}>
                <Stack.Screen name="SignIn" component={SignIn}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
