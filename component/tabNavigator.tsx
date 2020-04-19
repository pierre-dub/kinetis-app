import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./home";
import Settings from "./settings";

const Tab = createBottomTabNavigator();

export default class TabNavigator extends React.Component{
    render(){
        return (
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home}/>
                <Tab.Screen name="Settings" component={Settings}/>
            </Tab.Navigator>
        )
    }
}
