import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
const title = require('../assets/Kinelogo.png');

export default class Home extends React.Component{
    constructor(props:any) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center',justifyContent:'center',backgroundColor:"ghostwhite"}}>
                <Image source={title} style={stylesConnexion.title}/>
            </View>
        )
    }
}

const stylesConnexion = StyleSheet.create({
    title: {
        resizeMode: "contain",
        width: 350,
        height: 400,
    }
});
