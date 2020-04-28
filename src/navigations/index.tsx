import AppNavigator from "./AppNavigator";
import AuthNavigator from "./AuthNavigator";
import {createAppContainer, createSwitchNavigator} from "react-navigation";
import * as React from "react";
import Login from "../views/Login";

const rootNavigator = createSwitchNavigator(
    {
        log: Login,
        auth: AuthNavigator,
        app: AppNavigator
    },
    {
        initialRouteName:'log'
    }
)
export default createAppContainer(rootNavigator);
