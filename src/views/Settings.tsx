import {Switch, Text, TouchableOpacity, View} from "react-native";
import * as React from "react";

export default class Settings extends React.Component{
    state = {switchValue:true}
    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            switchValue: true,
        };
    }

    toggleSwitch = (value:any) => {
        //onValueChange of the switch this function will be called
        this.setState({switchValue: value})
        //state changes according to switch
        //which will result in re-render the text
    }
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Settings</Text>
                <Text>{this.state.switchValue?'Switch is ON':'Switch is OFF'}</Text>
                <Switch
                    style={{marginTop:30}}
                    onValueChange = {this.toggleSwitch}
                    value = {this.state.switchValue}/>
            </View>
        );
    }
}
