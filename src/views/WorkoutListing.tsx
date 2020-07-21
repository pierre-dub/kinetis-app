import {FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import React from "react";
import WorkoutItem from "../components/WorkoutItem";
import {getMyWorkout} from "../db/getMyWorkout";
import {getMyWorkoutWithTitle} from "../db/getWorkoutWithTitle";
import HideWithKeyboard from "react-native-hide-with-keyboard";

interface Props {
    navigation: any,
}

export default class WorkoutListing extends React.Component<Props>{
    constructor(props:any) {
        super(props);
    }
    state: any = {
        myWorkouts: null,
        searchedTitle: "",
        refreshing: false,
    };
    fetch: any = {}

    componentDidMount(): void {
        this.fetch = getMyWorkout().then(async res => {
            this.fetch = null;
            let workoutData = this.sortWorkout(res.data);
            // @ts-ignore
            this.setState({myWorkouts: workoutData, refreshing: false});
        })
    }

    sortWorkout = (array:any) => {
        array = array.sort(function (a:any,b:any){
            if(a.TITLE[0].toLowerCase() == b.TITLE[0].toLowerCase())
                return 0;
            if(a.TITLE[0].toLowerCase() < b.TITLE[0].toLowerCase())
                return -1;
            if(a.TITLE[0].toLowerCase() > b.TITLE[0].toLowerCase())
                return 1;
        });
        return array
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
        this.setState({searchedTitle: titre})
        if (this.state.searchedTitle.length > 0) {
            getMyWorkoutWithTitle(this.state.searchedTitle).then(res => {
                this.setState({myWorkouts : this.sortWorkout(res.data), refreshing: false})
            })
        } else {
            this.componentDidMount()
        }
    }

     render() {
        const {navigation} = this.props;
        const {navigate} = this.props.navigation;
        if (this.state.myWorkouts !== null) {
            return (
                <View style={{padding: 5, flex: 1, backgroundColor: 'ghostwhite', paddingBottom: 50}}>
                    <TextInput
                        style={styles.input}
                        placeholder="Workout name"
                        onChangeText={async (text) => await this.searchWorkout(text)}
                    />
                    <SafeAreaView>
                        <FlatList
                            data={this.state.myWorkouts}
                            renderItem={({item}) =>
                                <WorkoutItem workout={item} navigation={navigation}/>
                            }
                            keyExtractor={item => item.ID.toString()}
                            refreshing={this.state.refreshing}
                            onRefresh={this.handleRefresh}
                        />
                    </SafeAreaView>
                    <View style={styles.button_container}>
                        <HideWithKeyboard>
                            <TouchableOpacity onPress={() => {
                                navigate("New")
                            }}>
                                <View style={styles.button}>
                                    <Text style={{color: 'white', fontSize: 35, marginBottom: 5}}>+</Text>
                                </View>
                            </TouchableOpacity>
                        </HideWithKeyboard>
                    </View>
                </View>
            )
        }
        return (
            <View style={{padding: 5, flex: 1, backgroundColor: 'ghostwhite', paddingBottom: 50}}/>
            )
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
    },
    button_container:{
        position:'absolute',
        bottom:40,
        alignSelf:'flex-end',
        paddingRight:20

    },
    button:{backgroundColor: '#014a55',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        width: 60,
        height: 60,
    }
})
