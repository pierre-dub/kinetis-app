import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";

import React from "react";
import WorkoutDetail from "../views/WorkoutDetail";

interface Props {
    workout: any,
    navigate: any
}

export default class WorkoutItem extends React.Component<Props>{
    render() {
        const {navigate} =this.props;
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
                        <View style={styleListing.description_container}>
                            <Text style={styleListing.description_text}>{workout.DESCRIPTION}</Text>
                        </View>
                        <View style={styleListing.materiel_container}>
                            <Text style={styleListing.materiel_text}>Materiel: {workout.MATERIEL}</Text>
                        </View>
                    </View>
            </TouchableOpacity>
        );
    }
}

const styleListing = StyleSheet.create({
    main_container: {
        height: 190,
        flexDirection: "row",
    },
    image: {
        width: 120,
        height: 180,
        margin: 5,
        backgroundColor: 'gray'
    },
    content_container: {
        flex: 1,
        margin: 5
    },
    header_container: {
        flex: 3,
        flexDirection: 'row'
    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 20,
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 5
    },
    description_container: {
        flex: 7
    },
    description_text: {
        fontStyle: 'italic',
        color: '#666666'
    },
    materiel_container: {
        flex: 1
    },
    materiel_text: {
        textAlign: 'right',
        fontSize: 14
    }
})
