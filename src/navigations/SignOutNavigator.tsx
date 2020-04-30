import Login from "../views/Login";
import SignIn from "../views/SignIn";
import * as React from "react";
import {Component} from "react";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

export default class SignOutNavigator extends Component{
    constructor(props:any) {
        super(props);
    }
    render() {
        return (
            <Stack.Navigator headerMode={"none"}>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="SignIn" component={SignIn}/>
            </Stack.Navigator>
        )
    }
}
