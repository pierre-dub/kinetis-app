import * as React from "react";
import { Provider } from "react-redux";
import store from "../redux/myStore";
import UserForm from "../components/NewWorkoutForm";

export default class New extends React.Component{
    render() {
        return (
        <Provider store={store}>
            <UserForm />
        </Provider>
        )
    }
}
