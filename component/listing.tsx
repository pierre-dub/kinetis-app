import {Text, View, SafeAreaView, FlatList, StyleSheet, Image} from "react-native";
import React from "react";
const illustration1 = require('../assets/JumpSquat.jpg');
const illustration2 = require('../assets/MonteeDeGenoux.jpg');
const illustration3 = require('../assets/PlancheLaterale.jpg');


interface Exercice {
    title: string,
    description: string,
    materiel: string,
    repetition: string,
    illustration: HTMLImageElement,
}

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Jump Squat',
        description: 'Partir les jambes fléchies (position chaise).\n Sauter en l\'air le corps tendu.\nRedescendre doucement en position chaise',
        materiel: '',
        repetition: '3 séries de 6 à 10 sauts consécutifs',
        illustration: illustration1,
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Planche latérale',
        description: 'Se mettre sur le coude à l\'aplomb de l\'épaule.\nGainer le corps et tenir la position.\nChanger de côté.',
        materiel: 'Tapis de sol',
        repetition:'Tenir la position entre 15 et 45 secondes de 3 à 5 fois.',
        illustration: illustration3,
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Montée de genoux opposés sur marche',
        description: 'Partir de profil avec la jambe droite sur la marche haute.\n Monter la jambe gauche à l\'horizontale en gardant le buste droit.\n',
        materiel: 'Marche haute',
        repetition:'Effectuer 15 à 20 répétitions par jambe à chaque séquence de 20 secondes.',
        illustration: illustration2,
    },
];

export default class Listing extends React.Component{
    render() {
        return (
            <SafeAreaView>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) =>
                        <Item
                            title={item.title}
                            description={item.description}
                            materiel={item.materiel}
                            repetition={item.repetition}
                            illustration={item.illustration}
                        />
                    }
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        )
    }
}

function Item({title,description,materiel,repetition,illustration}:Exercice) {
    return (
        <View style={styleListing.main_container}>
            <Image style={styleListing.image} source={illustration}/>
            <View style={styleListing.content_container}>
                <View style={styleListing.header_container}>
                    <Text style={styleListing.title_text}>{title}</Text>
                </View>
                <View style={styleListing.description_container}>
                    <Text style={styleListing.description_text}>{description}</Text>
                    <Text style={styleListing.description_text}>{repetition}</Text>
                </View>
                <View style={styleListing.materiel_container}>
                    <Text style={styleListing.materiel_text}>Materiel: {materiel}</Text>
                </View>
            </View>
        </View>
    );
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
