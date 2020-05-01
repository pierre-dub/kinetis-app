import {Text, View} from "react-native";
import React from "react";
import SignInForm from "../components/SignInForm";
import {Provider} from "react-redux";
import store from "../redux/myStore";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

interface Props {
    navigation: any
}

export default class SignIn extends React.Component<Props>{
    constructor(props:any) {
        super(props);
    }
    render() {
        const {navigate} =this.props.navigation;
        return (
            <KeyboardAwareScrollView
                style ={{backgroundColor:"ghostwhite"}}>
                <View style={{flex: 1, marginTop:80,justifyContent: 'center', alignItems: 'center'}}>
                    <Provider store={store}>
                        <SignInForm navigate={navigate}/>
                    </Provider>
                </View>
            </KeyboardAwareScrollView>
        )
    }
}
