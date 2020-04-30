import {tabNavigator} from "./TabNavigator";
import Listing from "../views/Listing";
import New from "../views/New";
import Patients from "../views/Patients";
import Settings from "../views/Settings";
import WorkoutDetail from "../views/WorkoutDetail";
import * as React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {Component} from "react";

const Stack = createStackNavigator();

export default class SignInNavigator extends Component{
    constructor(props:any) {
        super(props);
    }
    render() {
        return (
            <Stack.Navigator headerMode={"none"}>
                <Stack.Screen name="Home" component={tabNavigator}/>
                <Stack.Screen name="Listing" component={Listing}/>
                <Stack.Screen name="New" component={New}/>
                <Stack.Screen name="Patients" component={Patients}/>
                <Stack.Screen name="Settings" component={Settings}/>
                <Stack.Screen name="WorkoutDetail" component={WorkoutDetail}/>
            </Stack.Navigator>
        );
    }
}
