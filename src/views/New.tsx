import * as React from "react";
import { Provider } from "react-redux";
import store from "../redux/myStore";
import NewWorkoutForm from "../components/form/NewWorkoutForm";

interface Props {
    navigation: any
}

export default class New extends React.Component<Props>{
    constructor(props:any) {
        super(props);
    }
    render() {
        const {navigation} =this.props;
        return (
        <Provider store={store}>
            <NewWorkoutForm navigation={navigation}/>
        </Provider>
        )
    }
}
