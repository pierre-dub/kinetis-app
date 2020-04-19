import {Text, View} from "react-native";
import React from "react";

export default class Listing extends React.Component{
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Listing</Text>
            </View>
        )
    }
}
