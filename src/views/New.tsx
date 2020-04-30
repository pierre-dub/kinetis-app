import * as React from "react";
import { Provider } from "react-redux";
import store from "../redux/myStore";
import NewWorkoutForm from "../components/NewWorkoutForm";

interface Props {
    navigation: any
}

export default class New extends React.Component<Props>{
    constructor(props:any) {
        super(props);
    }
    render() {
        const {navigate} =this.props.navigation;
        return (
        <Provider store={store}>
            <NewWorkoutForm navigate={navigate}/>
        </Provider>
        )
    }
}
