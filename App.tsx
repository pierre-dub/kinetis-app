import * as React from 'react';
import {StatusBar, View} from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from "./src/navigations/AuthNavigator";

export default class App extends React.Component{
    render(){
        return (
            <View style={{flex: 1, marginTop: StatusBar.currentHeight}}>
                <NavigationContainer>
                    <AuthNavigator/>
                </NavigationContainer>
            </View>
        );
    }
}
