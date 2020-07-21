import React from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'

interface Props {
    workout:any,
    navigation:any
}

export default class WorkoutDetail extends React.Component<Props> {
    constructor(props:any) {
        super(props);
    }
    render() {
        // @ts-ignore
        const {workout} = this.props.route.params;
        const {navigate} = this.props.navigation;
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
                    <View style={styleWorkout.button_container}>
                        <TouchableOpacity onPress={() => {
                            navigate("EditWorkout",{workout : workout})
                        }}>
                            <View style={styleWorkout.button}>
                                <Image style={styleWorkout.icon} source={require('../assets/icons/edit.png')}/>
                            </View>
                        </TouchableOpacity>
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
    icon: {
        resizeMode:"contain",
        width: 25,
        height: 25,
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
    },
    button_container:{
        position:'absolute',
        bottom:40,
        alignSelf:'flex-end',
        paddingRight:20

    },
    button:{
        backgroundColor: '#014a55',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        width: 60,
        height: 60,
    }
})
