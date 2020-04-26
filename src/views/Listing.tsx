import {SafeAreaView, FlatList, View, TouchableOpacity, Text, TextInput, Button, StyleSheet} from "react-native";
import React from "react";
import WorkoutItem from "../components/WorkoutItem";
import {getMyWorkout} from "../db/getMyWorkout";
import {getMyWorkoutWithTitle} from "../db/getWorkoutWithTitle";

interface Props {
    navigation: any,
}

export default class Listing extends React.Component<Props>{
    constructor(props:any) {
        super(props);
        refreshing: false
    }
    state: any = {
        myWorkouts: null,
        searchedTitle: ""
    };
    fetch: any = {}

    componentDidMount(): void {
        console.log("fetch all")
        this.fetch = getMyWorkout()
            .then(res => {
                this.fetch = null;
                // @ts-ignore
                this.setState({myWorkouts : res.data, refreshing: false})
            })
    }

    componentWillUnmount(): void {
        if(this.fetch){
            this.fetch.cancel();
        }
    }

    handleRefresh = () => {
        this.setState({
            refreshing: true,
        },
            () => {
            this.searchWorkout(this.state.searchedTitle);
        })
    }

    searchWorkout = async (titre: any) => {
        await this.setState({searchedTitle: titre})
        if (this.state.searchedTitle.length > 0) {
            getMyWorkoutWithTitle(this.state.searchedTitle).then(res => {
                this.setState({myWorkouts: res.data, refreshing: false})
            })
        } else {
            this.componentDidMount()
        }
    }

    render() {
        console.log("RENDER")
        const {navigate} =this.props.navigation;
        if(this.state.myWorkouts === null){
            return(
                <View style={{padding:5, flex:1}}>
                    <TextInput
                        style={styles.input}
                        placeholder="Nom de l'exercice"
                        onChangeText={async (text) => await this.searchWorkout(text)}
                    />
                </View>
            )
        }
        else{
            return(
                <View style={{padding:5, flex:1}}>
                    <TextInput
                        style={styles.input}
                        placeholder="Nom de l'exercice"
                        onChangeText={async (text) => await this.searchWorkout(text)}
                    />
                <SafeAreaView>
                    <FlatList
                        data={this.state.myWorkouts}
                        renderItem={({ item }) =>
                            <WorkoutItem workout={item} navigate={navigate}/>
                        }
                        keyExtractor={item => item.ID.toString()}
                        refreshing={this.state.refreshing}
                        onRefresh={this.handleRefresh}
                    />
                </SafeAreaView>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    input: {
        padding: 5,
        marginBottom: 5,
        borderColor: '#014a55',
        borderWidth: 1,
        borderRadius: 4,
        height: 50,
        color: 'white',
        justifyContent: "center",
        backgroundColor:'#014a55'
    }
})
