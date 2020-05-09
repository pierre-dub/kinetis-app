import {AsyncStorage, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
const title = require('../assets/Kinelogo.png');

interface Props {
    navigation: any
    logged: any
}

export default class Home extends React.Component<Props>{
    constructor(props:any) {
        super(props);
    }

    onSubmit = async () => {
        const {logged} = this.props;
        await AsyncStorage.removeItem('userEmail');
        await AsyncStorage.removeItem('userPassword');
        logged(false)
    }

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center',justifyContent:'center',backgroundColor:"ghostwhite"}}>
                <Image source={title} style={stylesConnexion.image}/>
            <View style={{alignItems: 'center', justifyContent: 'center', paddingTop: 40}}>
                <TouchableOpacity onPress={(this.onSubmit)}>
                    <View style={stylesConnexion.button}>
                        <Text style={{color: 'white', fontSize: 20}}>Log Out</Text>
                    </View>
                </TouchableOpacity>
            </View>
            </View>
        )
    }
}

const stylesConnexion = StyleSheet.create({
    image: {
        resizeMode: "contain",
        width: 350,
        height: 400,
    },
    button:{backgroundColor: '#014a55',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 2,
        width: 200,
        height: 60,
    }
});
