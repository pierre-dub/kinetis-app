import {tabNavigator} from "./TabNavigator";
import WorkoutListing from "../views/WorkoutListing";
import New from "../views/New";
import Settings from "../views/Settings";
import WorkoutDetail from "../views/WorkoutDetail";
import * as React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {Component} from "react";
import PatientListing from "../views/PatientListing";

const Stack = createStackNavigator();

export default class SignInNavigator extends Component{
    constructor(props:any) {
        super(props);
    }
    render() {
        return (
            <Stack.Navigator headerMode={"none"}>
                <Stack.Screen name="Home" component={tabNavigator}/>
                <Stack.Screen name="Listing" component={WorkoutListing}/>
                <Stack.Screen name="New" component={New}/>
                <Stack.Screen name="Patients" component={PatientListing}/>
                <Stack.Screen name="Settings" component={Settings}/>
                <Stack.Screen name="WorkoutDetail" component={WorkoutDetail}/>
            </Stack.Navigator>
        );
    }
}
