import {Text, View} from "react-native";
import React from "react";

export default class Patient extends React.Component{
    constructor(props:any) {
        super(props);
    }
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Patients</Text>
        </View>
    )
    }
}
