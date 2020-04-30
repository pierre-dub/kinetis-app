import React from 'react';
import {View, Button, Text, TextInput, StyleSheet, Alert, TouchableOpacity} from 'react-native';
import {Field, reduxForm, submit} from 'redux-form';
import {setNewWorkout} from "../db/setNewWorkout";
import WorkoutListing from "../views/WorkoutListing";

interface Props {
    navigate: any
}

class NewWorkoutForm extends React.Component<Props> {
    constructor(props: any) {
        super(props);
    }
    state:any = {
        title: "",
        description: "",
        repetition: "",
        materiel: "",
    }

    onSubmit = async (values: any) => {
        let json = await setNewWorkout(this.state.title,this.state.description,this.state.repetition,this.state.materiel);
        this.props.navigate("WorkoutListing")
    };

// @ts-ignore
    renderTextInput = ({input: {onChange, ...input}, ...rest}) => {
        return <TextInput style={styles.textInput}
                          onChangeText={onChange} {...input} {...rest}
                          placeholderTextColor="#014a55"
        />
    };

// @ts-ignore
    renderTextArea = ({input: {onChange, ...input}, ...rest}) => {
        return <TextInput style={styles.textArea}
                          multiline={true}
                          onChangeText={onChange} {...input} {...rest}
                          placeholderTextColor="#014a55"
        />
    };

    render(){
        return (
            <View style={styles.root}>
                <Text style={styles.subTitles}>Workout name</Text>
                <Field
                    name="title"
                    props={{
                        placeholder: "Workout name",
                    }}
                    component={this.renderTextInput}
                    onChange={(text: any) => this.setState({title: text})}
                />
                <Text style={styles.subTitles}>Description</Text>
                <Field
                    name="description"
                    props={{
                        placeholder: "Description",
                    }}
                    component={this.renderTextArea}
                    onChange={(text: any) => this.setState({description: text})}
                />
                <Text style={styles.subTitles}>Repetition</Text>
                <Field
                    name="repetition"
                    props={{
                        placeholder: "Repetition",
                    }}
                    component={this.renderTextInput}
                    onChange={(text: any) => this.setState({repetition: text})}
                />
                <Text style={styles.subTitles}>Equipment</Text>
                <Field
                    name="materiel"
                    props={{
                        placeholder: "Equipment",
                    }}
                    component={this.renderTextInput}
                    onChange={(text: any) => this.setState({materiel: text})}
                />
                <View style={{alignItems: 'center', justifyContent: 'center', paddingTop: 40}}>
                    <TouchableOpacity onPress={(this.onSubmit)}>
                        <View style={styles.button}>
                            <Text style={{color: 'white', fontSize: 20}}>Save</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        padding: 32,
        justifyContent: 'center'
    },
    subTitles:{
        fontSize:20,
        color: '#014a55'
    },
    textInput: {
        fontSize: 15,
        padding: 5,
        marginBottom: 5,
        borderColor: '#014a55',
        borderWidth: 1,
        borderRadius: 4,
        height: 40,
        justifyContent: "center"
    },
    textArea: {
        fontSize: 15,
        padding: 8,
        marginBottom: 8,
        borderColor: '#014a55',
        borderWidth: 1,
        borderRadius: 4,
        height: 150,
        justifyContent: "flex-start",
    },
    button:{backgroundColor: '#014a55',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 2,
        width: 200,
        height: 60,
    }
});

// @ts-ignore
export default reduxForm({form: 'workout-form'})(NewWorkoutForm);