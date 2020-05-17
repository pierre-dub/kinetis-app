import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert, Image} from 'react-native';
import {Field, reduxForm} from 'redux-form';
import {renderTextInput} from "../renderTextInput";
import {renderTextArea} from "../renderTextArea";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import HideWithKeyboard from "react-native-hide-with-keyboard";
import {editWorkout} from "../../db/editWorkout";
import {newWorkoutFormValidator} from "../validator/NewWorkoutFormValidator";

interface Props {
    workout:any,
    navigation:any,
    handleSubmit:any,
    initialValue:any
}

class EditWorkoutForm extends React.Component<Props>{
    constructor(props:any) {
        super(props);
    }

    state:any = {
        title: this.props.workout.TITLE,
        description: this.props.workout.DESCRIPTION,
        repetition: this.props.workout.REPETITION,
        materiel: this.props.workout.MATERIEL,
        image: this.props.workout.IMAGE,
    }

    onSubmit = async (value:any) => {
        //TODO : automatique refresh WorkoutListing
        await editWorkout(this.props.workout.ID,this.state.title,this.state.description,this.state.repetition,this.state.materiel,"")
        this.props.navigation.pop(2);
    };
    render() {
        const {navigation} = this.props;
        const {handleSubmit} = this.props;
        return(
            // <KeyboardAwareScrollView>
                <View style={styles.main_container}>
                    <View style={styles.title_container}>
                        <Field
                        name="title"
                        props={{
                            value: this.state.title,
                        }}
                        style={styles.title_text}
                        component={renderTextInput}
                        onChange={(text: any) => this.setState({title: text})}
                    />
                    </View>
                    <View style={styles.description_container}>
                        <View style={{alignItems: 'center', justifyContent: 'center', paddingTop: 10, paddingBottom:20}}>
                            <TouchableOpacity onPress={() => {Alert.alert('Not Implemented Yet')}}>
                                <View style={styles.button}>
                                    <Text style={{color: 'white', fontSize: 20}}>Set new picture</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.subTitle_container}>
                            <Text style={styles.title_section}>Description</Text>
                        </View>
                        <View style={styles.content_container}>
                            <Field
                                name="description"
                                props={{
                                    value:this.state.description,
                                }}
                                style={styles.description_text}
                                component={renderTextArea}
                                onChange={(text: any) => this.setState({description: text})}
                            />
                        </View>
                        <View style={styles.subTitle_container}>
                            <Text style={styles.title_section}>Repetition</Text>
                        </View>
                        <View style={styles.content_container}>
                            <Field
                                name="repetition"
                                props={{
                                    value: this.state.repetition,
                                }}
                                style={styles.description_text}
                                component={renderTextInput}
                                onChange={(text: any) => this.setState({repetition: text})}
                            />
                        </View>
                        <View style={styles.subTitle_container}>
                            <Text style={styles.title_section}>Equipment</Text>
                        </View>
                        <View style={styles.content_container}>
                            <Field
                                name="materiel"
                                props={{
                                    value: this.state.materiel,
                                }}
                                style={styles.description_text}
                                component={renderTextInput}
                                onChange={(text: any) => this.setState({materiel: text})}
                            />
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center', paddingTop: 40, paddingBottom: 40}}>
                            <TouchableOpacity onPress={() => {navigation.goBack()}}>
                                <View style={styles.button}>
                                    <Text style={{color: 'white', fontSize: 20}}>Cancel</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.save_button_container}>
                        <HideWithKeyboard>
                            <TouchableOpacity onPress={handleSubmit(this.onSubmit)}>
                                <View style={styles.buttonSave}>
                                    <Image style={styles.icon} source={require('../../assets/icons/store.png')}/>
                                </View>
                            </TouchableOpacity>
                        </HideWithKeyboard>
                    </View>
                </View>
        );
    }
}


const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor:"ghostwhite",
    },
    description_container: {
        paddingTop:15,
        flex: 6,
    },
    image: {
        flex:4,
        resizeMode:"cover",
        margin: 5,
        backgroundColor: 'gray'
    },
    title_container:{
        justifyContent:"center",
        paddingLeft:10,
        backgroundColor:"#014a55",
        height:70,
    },
    title_text: {
        color:"#f8f8ff",
        fontWeight: 'bold',
        fontSize: 25,
        flexWrap: 'wrap',
        paddingRight: 5,
        justifyContent:"center",

        borderColor: '#f8f8ff',
        borderWidth: 1,
        borderRadius: 4,
        borderStyle: "dashed",
        marginRight:25,
        paddingHorizontal: 15,
        paddingVertical:5
    },
    title_section:{
        fontSize: 15,
        flexWrap: 'wrap',
        color: "white",
        margin:7,
    },
    description_text: {
        fontSize: 18,
        borderColor: '#014a55',
        borderWidth: 1,
        borderRadius: 4,
        borderStyle: "dashed",
        marginLeft:25,
        marginRight:25,
        paddingHorizontal: 15,
        paddingVertical:15
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
        marginBottom:0,
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
        borderRadius: 2,
        width: 200,
        height: 60,
    },
    icon: {
        resizeMode:"contain",
        width: 30,
        height: 30,
    },
    save_button_container:{
        position:'absolute',
        bottom:40,
        alignSelf:'flex-end',
        left: 20
    },
    buttonSave:{
        backgroundColor: '#014a55',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        width: 60,
        height: 60,
    }
});

export default reduxForm({
    form: 'edit-workout-form',
    validate: newWorkoutFormValidator
    // @ts-ignore
})(EditWorkoutForm);
