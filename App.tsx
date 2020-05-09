import * as React from 'react';
import {AsyncStorage, StatusBar, View} from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import SignInNavigator from "./src/navigations/SignInNavigator";
import SignOutNavigator from "./src/navigations/SignOutNavigator";
import {Component} from "react";
import {checkAuthentication} from "./src/db/checkAuthentication";

export default class App extends Component{

    state: any = {
        logged:false
    };

    setLogged =  (status:boolean) => {
        this.setState({logged:status})
    }

    componentDidMount = async () => {
        let email = await AsyncStorage.getItem('userEmail') || undefined;
        let password = await AsyncStorage.getItem('userPassword') || undefined;
        if (email !== undefined && password !== undefined){
            await checkAuthentication(email, password).then(async (status) => {
                if (status === "200") {
                    this.setLogged(true);
                }
            })
        }
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
