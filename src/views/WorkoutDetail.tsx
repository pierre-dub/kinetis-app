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
                    <Image style={styleWorkout.image} source={{uri: `data:image/gif;base64,${workout.IMAGE}`}}/>
                    <View style={styleWorkout.title_container}>
                        <Text style={styleWorkout.title_text}>{workout.TITLE}</Text>
                    </View>
                    <View style={styleWorkout.description_container}>
                        <View style={styleWorkout.subTitle_container}>
                            <Text style={styleWorkout.title_section}> Description </Text>
                        </View>
                        <View style={styleWorkout.content_container}>
                            <Text style={styleWorkout.description_text}>{workout.DESCRIPTION}</Text>
                        </View>
                        <View style={styleWorkout.subTitle_container}>
                            <Text style={styleWorkout.title_section}> Reps </Text>
                        </View>
                        <View style={styleWorkout.content_container}>
                            <Text style={styleWorkout.description_text}>{workout.REPETITION}</Text>
                        </View>
                        <View style={styleWorkout.subTitle_container}>
                            <Text style={styleWorkout.title_section}> Equipment </Text>
                        </View>
                        <View style={styleWorkout.content_container}>
                            <Text style={styleWorkout.description_text}>{workout.MATERIEL}</Text>
                        </View>
                    </View>
                </View>
        )
    }
}

const styleWorkout = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor:"ghostwhite",
    },
    image: {
        flex:4,
        resizeMode:"cover",
        margin: 5,
        backgroundColor: 'gray'
    },
    description_container: {
        paddingTop:15,
        flex: 6,
    },
    title_container:{
        flex:1,
        justifyContent:"center",
        paddingLeft:10,
        backgroundColor:"#014a55"
    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 25,
        color:"#f8f8ff",
        flexWrap: 'wrap',
        paddingRight: 5,
        justifyContent:"center",
    },
    title_section:{
        fontSize: 15,
        flexWrap: 'wrap',
        color: "white",
        margin:7,
    },
    description_text: {
        fontSize: 18,
        paddingHorizontal: 40,
    },
    subTitle_container:{
        alignSelf:"flex-start",
        justifyContent:"center",
        backgroundColor:"#014a55",
        borderRadius:20,
        marginLeft:10,
        marginBottom:10,
        marginTop:10
    },
    content_container:{
        marginBottom:0
    }
})
