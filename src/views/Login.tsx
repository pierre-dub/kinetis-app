import React from "react";
import ConnexionForm from "../components/form/ConnexionForm";
import {Provider} from "react-redux";
import store from "../redux/store";
import {Image, StyleSheet, View} from "react-native";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

const title = require('../assets/Kinelogo.png');


interface Props {
    navigation: any,
    logged: any
}

export default class Login extends React.Component<Props> {
    constructor(props:any) {
        super(props);
    }

    state = {
        tabBarVisible: false,
    }

    render() {
        const {navigate} =this.props.navigation;
        const {logged} =this.props;
        return (
            <KeyboardAwareScrollView
                style={{backgroundColor:"ghostwhite"}}>
                <View style={styles.root_container}>
                    <View style={{flex: 1,marginTop:40,  justifyContent:"center"}}>
                      <Image source={title} style={styles.title}/>
                    </View>
                    <View style={{flex: 3,  marginTop:50,justifyContent:"flex-end"}}>
                        <Provider store={store}>
                                <ConnexionForm navigate={navigate} logged={logged}/>
                        </Provider>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        )
    }
}

const styles = StyleSheet.create({
    root_container:{
        flex: 1,
        alignItems: 'center',
        flexDirection:"column",
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
