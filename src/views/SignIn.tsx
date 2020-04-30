import {Text, View} from "react-native";
import React from "react";
import SignInForm from "../components/SignInForm";
import {Provider} from "react-redux";
import store from "../redux/myStore";

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
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:"ghostwhite"}}>
                <Provider store={store}>
                    <SignInForm navigate={navigate}/>
                </Provider>
            </View>
        )
    }
}
