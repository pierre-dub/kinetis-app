import appNavigator from "./appNavigator";
import authNavigator from "./authNavigator";
import {createAppContainer, createSwitchNavigator} from "react-navigation";
import * as React from "react";
import Login from "../views/Login";

const rootNavigator = createSwitchNavigator(
    {
        log: Login,
        auth: authNavigator,
        app: appNavigator
    },
    {
        initialRouteName:'log'
    }
)
export default createAppContainer(rootNavigator);
