import {Text, View} from "react-native";
import React from "react";

export default class Home extends React.Component{
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Home</Text>
            </View>
        )
    }
}
