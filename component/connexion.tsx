import {Text, View, TouchableOpacity, Alert, Image, StyleSheet} from "react-native";
import React from "react";
import Home from "./home";
const logo = require('../assets/logo.png');

interface Props {
    navigation: any
}

export default class Connexion extends React.Component<Props>{
    state = {
        tabBarVisible: false,
    }
    render() {
        const {navigate} =this.props.navigation;
        return (
            <View style={{flex: 1, alignItems: 'center'}}>
                 <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                     <Image source={logo} style={stylesConnexion.logo}/>
                 </View>
                 <Text style={stylesConnexion.text}>Bienvenue</Text>
                 <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                     <TouchableOpacity onPress={() => navigate("Home")}>
                         <View style={stylesConnexion.button}>
                             <Text style={{color: 'white', fontSize: 20}}>Commencer</Text>
                         </View>
                     </TouchableOpacity>
                 </View>
            </View>
        )
    }
}

const stylesConnexion = StyleSheet.create({
    button:{backgroundColor: '#014a55',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 2,
        width: 200,
        height: 60,
    },
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
