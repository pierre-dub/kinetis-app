import Login from "../views/Login";
import SignIn from "../views/SignIn";
import * as React from "react";
import {Component} from "react";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

interface Props {
    logged:any
}

export default class SignOutNavigator extends Component<Props>{
    constructor(props:any) {
        super(props);
    }

    render() {
        const {logged} =this.props;
        return (
            <Stack.Navigator headerMode={"none"}>
                <Stack.Screen name="Login">
                    {props => <Login {...props} logged={logged} />}
                </Stack.Screen>
                <Stack.Screen name="SignIn">
                    {props => <SignIn {...props} logged={logged}/>}
                </Stack.Screen>
            </Stack.Navigator>
        )
    }
}
