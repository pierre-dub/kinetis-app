import React from "react";
import {StyleSheet, Text, View} from "react-native";

interface Props {
    workout: any,
}

export default class EquipmentItem extends React.Component<Props>{
    render() {
        const {workout} = this.props;
        if(workout.MATERIEL) {
            return (
                <View style={styleListing.materiel_container}>
                    <Text>
                        <Text style={styleListing.subSectionTitle}>Equipment:</Text>
                        <Text style={styleListing.materiel_text}> {workout.MATERIEL}</Text>
                    </Text>
                </View>
            )
        }
        else{
            return(
                <View style={styleListing.materiel_container}>
                    <Text style={styleListing.subSectionTitle}>No equipment needed</Text>
                </View>
            )
        }
    }
}

const styleListing = StyleSheet.create({
    materiel_container: {
        flex: 3,
        justifyContent:'flex-start'
    },
    subSectionTitle: {
        fontWeight: "bold",
        color:"#014a55",
    },
    materiel_text: {
        textAlign: 'left',
        fontSize: 14
    }
})
