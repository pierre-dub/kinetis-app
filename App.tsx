import * as React from 'react';
import { StatusBar, View} from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import SignInNavigator from "./src/navigations/SignInNavigator";
import SignOutNavigator from "./src/navigations/SignOutNavigator";
import {Component} from "react";

export default class App extends Component{

    state: any = {
        logged:false
    };

    setLogged =  (status:boolean) => {
        this.setState({logged:status})
    }

    render() {
        return (
            <View style={{flex: 1, marginTop: StatusBar.currentHeight}}>
                <NavigationContainer>
                    {this.state.logged  ? (
                            <SignInNavigator logged={this.setLogged}/>
                    ) : (
                            <SignOutNavigator logged={this.setLogged}/>
                    )}
                </NavigationContainer>
            </View>
        );
    }
}
