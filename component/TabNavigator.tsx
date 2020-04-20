import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "./Home";
import Settings from "./Settings";
import Listing from "./Listing";
import AddContent from "./New";
import Patient from "./Patients";

const Tab = createBottomTabNavigator();

export default class TabNavigator extends React.Component{
    render(){
        return (
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home}/>
                <Tab.Screen name="Listing" component={Listing}/>
                <Tab.Screen name="New" component={AddContent}/>
                <Tab.Screen name="Patients" component={Patient}/>
                <Tab.Screen name="Settings" component={Settings}/>
            </Tab.Navigator>
        )
    }
}
