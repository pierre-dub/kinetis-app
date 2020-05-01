import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'

interface Props {
    workout:any,
}

export default class WorkoutDetail extends React.Component<Props> {
    constructor(props:any) {
        super(props);
    }
    render() {
        // @ts-ignore
        const {workout} = this.props.route.params;
        return (
                <View style={styleWorkout.main_container}>
                    <View style={styleWorkout.title_container}>
                        <Text style={styleWorkout.title_text}>{workout.TITLE}</Text>
                    </View>
                    <Image style={styleWorkout.image} source={workout.ILLUSTRATION}/>
                    <View style={styleWorkout.description_container}>
                        <Text style={styleWorkout.title_section}>Description :</Text>
                        <Text style={styleWorkout.description_text}>{workout.DESCRIPTION}</Text>
                        <Text style={styleWorkout.title_section}>Répétition : </Text>
                        <Text style={styleWorkout.description_text}>{workout.REPETITION}</Text>
                        <Text style={styleWorkout.title_section}>Materiel:</Text>
                        <Text style={styleWorkout.description_text}>{workout.MATERIEL}</Text>
                    </View>
                </View>
        )
    }
}

const styleWorkout = StyleSheet.create({
    main_container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"ghostwhite"
    },
    title_container:{
        flex:1,
    },
    image: {
        width: 160,
        height: 240,
        margin: 5,
        backgroundColor: 'gray'
    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 40,
        flexWrap: 'wrap',
        paddingRight: 5
    },
    title_section:{
        fontWeight: 'bold',
        fontSize: 30,
        flexWrap: 'wrap',
        paddingTop: 10,
        color: "#014a55"
    },
    description_container: {
        flex: 7,
    },
    description_text: {
        fontSize: 20,
        paddingLeft: 10
    },
})
