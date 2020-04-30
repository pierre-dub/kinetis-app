import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
const logo = require('../assets/logo.png');

export default class Home extends React.Component{
    constructor(props:any) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center'}}>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Image source={logo} style={stylesConnexion.logo}/>
                <Text style={stylesConnexion.text}>Welcome</Text>
                </View>
            </View>
        )
    }
}

const stylesConnexion = StyleSheet.create({
    text: {
        color:"#000000",
        fontSize:40,
        fontWeight: "bold",
    },
    logo: {
        alignItems: 'center',
        width: 200,
        height: 200,
    }
});
