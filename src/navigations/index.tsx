import * as React from "react";
import Login from "../views/Login";
import SignIn from "../views/SignIn";
import {createStackNavigator} from "@react-navigation/stack";
import Listing from "../views/Listing";
import New from "../views/New";
import Patients from "../views/Patients";
import Settings from "../views/Settings";
import WorkoutDetail from "../views/WorkoutDetail";
import {tabNavigator} from "./TabNavigator";

const Stack = createStackNavigator();

export const rootNavigator = () => {
    return(
        <Stack.Navigator headerMode={"none"}>
            <Stack.Screen name="Aut" component={authNavigation} />
            <Stack.Screen name="App" component={appNavigation} />
        </Stack.Navigator>
    )
}

export const authNavigation = () => {
    return (
        <Stack.Navigator headerMode={"none"}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignIn" component={SignIn} />
        </Stack.Navigator>
    )
}

export const appNavigation = () => {
    return (
            <Stack.Navigator headerMode={"none"}>
                <Stack.Screen name="Home" component={tabNavigator} />
                <Stack.Screen name="Listing" component={Listing} />
                <Stack.Screen name="New" component={New} />
                <Stack.Screen name="Patients" component={Patients} />
                <Stack.Screen name="Settings" component={Settings} />
                <Stack.Screen name="WorkoutDetail" component={WorkoutDetail}/>
            </Stack.Navigator>
    );
}