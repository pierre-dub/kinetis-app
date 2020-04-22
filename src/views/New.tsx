import * as React from "react";
import { Provider } from "react-redux";
import store from "../redux/myStore";
import UserForm from "../components/NewWorkoutForm";
import {Alert, Text} from "react-native";

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};

interface IUser {
    firstName: string;
    lastName: string;
}


export default class New extends React.Component{
    render() {
        const greetTheUser = (user: IUser) => Alert.alert(`Hi, ${user.firstName} ${user.lastName}!`);
        return (
        <Provider store={store}>
            <UserForm />
        </Provider>
        )
    }
}

// <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//     <Text>New</Text>
// </View>
