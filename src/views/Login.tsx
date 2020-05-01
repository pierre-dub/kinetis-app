import React from "react";
import ConnexionForm from "../components/ConnexionForm";
import {Provider} from "react-redux";
import store from "../redux/myStore";
import {Image, StyleSheet, View} from "react-native";
// const logo = require('../assets/logo.png');
const title = require('../assets/Kinelogo.png');


interface Props {
    navigation: any
}

export default class Login extends React.Component<Props>{
    constructor(props:any) {
        super(props);
    }

    state = {
        tabBarVisible: false,
    }

    render() {
        const {navigate} =this.props.navigation;
        return (
            <View style={styles.root_container}>
                {/*<View style={{flex: 2,  justifyContent:"center"}}>*/}
                {/*    <Image source={logo} style={styles.logo}/>*/}
                {/*</View>*/}
                <View style={{flex: 1,marginTop:180,  justifyContent:"center"}}>
                  <Image source={title} style={styles.title}/>
                </View>
                <View style={{flex: 3,  marginTop:50,justifyContent:"flex-end"}}>
                    <Provider store={store}>
                            <ConnexionForm navigate={navigate}/>
                    </Provider>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    root_container:{
        flex: 1,
        alignItems: 'center',
        flexDirection:"column",
        backgroundColor:"ghostwhite"
    },
    logo: {
        alignItems: 'center',
        width: 200,
        height: 200,
    },
    title: {
        resizeMode: "contain",
        width: 350,
        height: 400,
    }
});
