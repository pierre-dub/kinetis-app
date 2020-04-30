import * as React from "react";
import {Component} from "react";
import {createStackNavigator} from "@react-navigation/stack";
import SignInNavigator from "./SignInNavigator";
import SignOutNavigator from "./SignOutNavigator";

const Stack = createStackNavigator();

export default class AuthNavigator extends Component {
    state: any = {
        logged: false,
    };
    render() {
        return(
            <Stack.Navigator headerMode={"none"}>
                <Stack.Screen name="SignOutNavigator" component={SignOutNavigator}/>
                <Stack.Screen name="SignInNavigator" component={SignInNavigator}/>
            </Stack.Navigator>
        )
    }
}
