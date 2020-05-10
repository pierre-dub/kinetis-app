import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";

import React from "react";
import WorkoutDetail from "../views/WorkoutDetail";
import EquipmentItem from "./EquipmentItem";

interface Props {
    workout: any,
    navigation: any
}

export default class WorkoutItem extends React.Component<Props>{
    render() {
        const {navigate} = this.props.navigation;
        const {workout} = this.props;
        return (
            <TouchableOpacity
                style={styleListing.main_container}
                onPress={() => navigate("WorkoutDetail",{workout : workout})}>
                    <Image style={styleListing.image} source={{uri: `data:image/gif;base64,${workout.IMAGE}`}} />
                    <View style={styleListing.content_container}>
                        <View style={styleListing.header_container}>
                            <Text style={styleListing.title_text}>{workout.TITLE}</Text>
                        </View>
                            <View style={styleListing.repetition_container}>
                                <Text>
                                    <Text style={styleListing.subSectionTitle}>Reps:</Text>
                                    <Text style={styleListing.materiel_text}> {workout.REPETITION}</Text>
                                </Text>
                            </View>
                        <EquipmentItem workout={workout}/>
                    </View>
            </TouchableOpacity>
        );
    }
}

const styleListing = StyleSheet.create({
    main_container: {
        height: 200,
        flexDirection: "row",
        borderBottomWidth:1
    },
    image: {
        flex:4,
        resizeMode:"cover",
        margin: 5,
        backgroundColor: 'gray'
    },
    content_container: {
        flex: 5,
        margin: 5,
        flexDirection: "column"
    },
    header_container: {
        flex: 2,
    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 20,
        flexWrap: 'wrap',
        paddingRight: 5
    },
    subSectionTitle: {
        fontWeight: "bold",
        color:"#014a55",
    },
    repetition_container: {
        flex: 3,
        justifyContent:'flex-start'
    },
    description_text: {
        fontSize:15,
        textAlign: "center"
    },
    materiel_container: {
        flex: 1
    },
    materiel_text: {
        textAlign: 'left',
        fontSize: 14
    }
})
