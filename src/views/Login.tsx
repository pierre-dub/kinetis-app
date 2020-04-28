import React from "react";
import ConnexionForm from "../components/ConnexionForm";
import {Provider} from "react-redux";
import store from "../redux/myStore";

interface Props {
    navigation: any
}

export default class Login extends React.Component<Props>{
    state = {
        tabBarVisible: false,
    }
    onSubmit = () => {
        this.props.navigation.navigate("app")
    };

    render() {
        const {navigate} =this.props.navigation;
        return (
            <Provider store={store}>
                <ConnexionForm navigate={navigate}/>
            </Provider>
        )
    }
}
