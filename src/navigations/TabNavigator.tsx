import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "../views/Home";
import WorkoutListing from "../views/WorkoutListing";
import Patient from "../views/PatientListing";
import {Image, StyleSheet} from "react-native";
import {Component} from "react";

const Tab = createBottomTabNavigator();

interface Props {
    logged:any
}

export default class TabNavigator extends Component<Props>{
    render() {
        const {logged} = this.props;
        return (
            <Tab.Navigator tabBarOptions={{
                showLabel: true,
                activeTintColor: '#F8F8F8',
                inactiveTintColor: '#8A8A8A',
                keyboardHidesTabBar: true,
                style: {
                    height: 50,
                    backgroundColor: '#014a55',
                }
            }}>
                <Tab.Screen name="Home"
                            options={{
                                tabBarLabel: 'Home',
                                tabBarIcon: ({}) => (
                                    <Image style={styleListing.image}
                                           source={require('../assets/icons/home_white.png')}/>
                                ),
                            }}
                >
                    {props => <Home {...props} logged={logged} />}
                </Tab.Screen>
                <Tab.Screen name="Listing"
                            component={WorkoutListing}
                            options={{
                                tabBarLabel: 'WorkoutListing',
                                tabBarIcon: ({ }) => (
                                    <Image style={styleListing.image} source={require('../assets/icons/list_white.png')}/>
                                ),
                            }}
                />
                {/*<Tab.Screen name="Patients"*/}
                {/*            component={Patient}*/}
                {/*            options={{*/}
                {/*                tabBarLabel: 'Patients',*/}
                {/*                tabBarIcon: ({ }) => (*/}
                {/*                    <Image style={styleListing.image} source={require('../assets/icons/group_white.png')}/>*/}
                {/*                    ),*/}
                {/*            }}*/}
                {/*/>*/}

            </Tab.Navigator>
        )
    }
}

const styleListing = StyleSheet.create({
    image: {
        width: 30,
        height: 30,
    }
})
