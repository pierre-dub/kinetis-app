import {SafeAreaView, FlatList} from "react-native";
import React from "react";
import WorkoutItem from "../components/WorkoutItem";
import {getMyWorkout} from "../db/getMyWorkout";

const illustration1 = require('../assets/JumpSquat.jpg');
const illustration2 = require('../assets/MonteeDeGenoux.jpg');
const illustration3 = require('../assets/PlancheLaterale.jpg');

const DATA = [
    {
        ID: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        TITLE: 'Jump Squat',
        DESCRIPTION: 'Partir les jambes fléchies (position chaise).\nSauter en l\'air le corps tendu.\nRedescendre doucement en position chaise',
        MATERIEL: '',
        REPETITION: '3 séries de 6 à 10 sauts consécutifs',
        ILLUSTRATION: illustration1,
    },
    {
        ID: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        TITLE: 'Planche latérale',
        DESCRIPTION: 'Se mettre sur le coude à l\'aplomb de l\'épaule.\nGainer le corps et tenir la position.\nChanger de côté.',
        MATERIEL: 'Tapis de sol',
        REPETITION:'Tenir la position entre 15 et 45 secondes de 3 à 5 fois.',
        ILLUSTRATION: illustration3,
    },
    {
        ID: '58694a0f-3da1-471f-bd96-145571e29d72',
        TITLE: 'Montée de genoux',
        DESCRIPTION: 'Partir de profil avec la jambe droite sur la marche haute.\nMonter la jambe gauche à l\'horizontale en gardant le buste droit.\n',
        MATERIEL: 'Marche haute',
        REPETITION:'Effectuer 15 à 20 répétitions par jambe à chaque séquence de 20 secondes.',
        ILLUSTRATION: illustration2,
    }
];

interface Props {
    navigation: any,
}


export default class Listing extends React.Component<Props>{
    constructor(props:any) {
        super(props);
        refreshing: false
    }
    state: any = {
        myWorkouts: null
    };
    fetch: any = {}

    componentDidMount(): void {
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
            page: 1,
            refreshing: true,
            seed: this.state.seed + 1
        },
            () => {
            this.componentDidMount();
        })
    }

    render() {
        const {navigate} =this.props.navigation;
        if(this.state.myWorkouts === null){
            return(
                <SafeAreaView>
                    <FlatList
                        data={DATA}
                        renderItem={({ item }) =>
                            <WorkoutItem workout={item} navigate={navigate}/>
                        }
                        keyExtractor={item => item.ID.toString()}
                    />
                </SafeAreaView>
            )
        }
        else{
            return(
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
            )
        }
    }
}
