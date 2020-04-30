import * as React from 'react';
import {StatusBar, View} from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {rootNavigator} from "./src/navigations";

interface Props {
    navigate: any
}

export default class App extends React.Component<Props>{
    constructor(props: any) {
        super(props);
    }

    render(){
        const Navigator = rootNavigator;
        return (
            <View style={{flex: 1, marginTop: StatusBar.currentHeight}}>
                <NavigationContainer>
                    <Navigator/>
                </NavigationContainer>
            </View>
        );
    }
}
