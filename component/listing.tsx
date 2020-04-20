import {SafeAreaView, FlatList} from "react-native";
import React from "react";
import WorkoutItem from "./workoutItem";
import WorkoutDetail from "./workoutDetail";
const illustration1 = require('../assets/JumpSquat.jpg');
const illustration2 = require('../assets/MonteeDeGenoux.jpg');
const illustration3 = require('../assets/PlancheLaterale.jpg');

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Jump Squat',
        description: 'Partir les jambes fléchies (position chaise).\nSauter en l\'air le corps tendu.\nRedescendre doucement en position chaise',
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
        description: 'Partir de profil avec la jambe droite sur la marche haute.\nMonter la jambe gauche à l\'horizontale en gardant le buste droit.\n',
        materiel: 'Marche haute',
        repetition:'Effectuer 15 à 20 répétitions par jambe à chaque séquence de 20 secondes.',
        illustration: illustration2,
    },
];

interface Props {
    navigation: any,
}


export default class Listing extends React.Component<Props>{
    render() {
        const {navigate} =this.props.navigation;
        return (
            <SafeAreaView>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) =>
                        <WorkoutItem workout={item} navigate={navigate}/>
                    }
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        )
    }
}
