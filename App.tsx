import * as React from 'react';
import {AsyncStorage, StatusBar, View} from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import SignInNavigator from "./src/navigations/SignInNavigator";
import SignOutNavigator from "./src/navigations/SignOutNavigator";
import {Component} from "react";
import {SplashScreen} from "expo";
import {checkAuthentication} from "./src/db/checkAuthentication";

export default class App extends Component{
    constructor(props:any) {
        super(props);
        SplashScreen.preventAutoHide();
    }

    state: any = {
        logged:false,
    };

    setLogged =  (status:boolean) => {
        this.setState({logged:status})
    }

    componentDidMount = async () => {
        let email = await AsyncStorage.getItem('userEmail') || undefined;
        let password = await AsyncStorage.getItem('userPassword') || undefined;
        if (email !== undefined && password !== undefined){
            this.setLogged(true);
        }
        SplashScreen.hide();
    }

    render() {
        return (
            <View style={{flex: 1, marginTop: StatusBar.currentHeight}}>
                <NavigationContainer>
                    {this.state.logged ? (
                        <SignInNavigator logged={this.setLogged}/>
                    ) : (
                        <SignOutNavigator logged={this.setLogged}/>
                    )}
                </NavigationContainer>
            </View>
        );
    }
}
