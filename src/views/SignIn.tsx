import {View} from "react-native";
import React from "react";
import SignInForm from "../components/form/SignInForm";
import {Provider} from "react-redux";
import store from "../redux/store";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

interface Props {
    navigation: any
    logged: any
}

export default class SignIn extends React.Component<Props> {
    constructor(props: any) {
        super(props);
    }
    render() {
        const {logged} = this.props
        const {navigate} =this.props.navigation;
        return (
            <KeyboardAwareScrollView
                style ={{backgroundColor:"ghostwhite"}}>
                <View style={{flex: 1, marginTop:80,justifyContent: 'center', alignItems: 'center'}}>
                    <Provider store={store}>
                        <SignInForm navigate={navigate} logged={logged}/>
                    </Provider>
                </View>
            </KeyboardAwareScrollView>
        )
    }
}
