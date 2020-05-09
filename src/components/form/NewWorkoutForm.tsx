import React from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {Field, reduxForm} from 'redux-form';
import PicturePicker from "../PicturePicker";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {setNewWorkout} from "../../db/setNewWorkout";
import {uploadImage} from "../../db/saveImage";
import {newWorkoutFormValidator} from "../validator/NewWorkoutFormValidator"
import {renderTextInput} from "../renderTextInput";
import {renderTextArea} from "../renderTextArea";

interface Props {
    navigation: any,
    handleSubmit: any
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
        image: undefined,
    }

    onPictureChange = (imagePicked:any) => {
        this.setState({ image: imagePicked });
    }

    onSubmit = async (value:any) => {
        if (newWorkoutFormValidator(value).validate){
            let idWorkout = await setNewWorkout(this.state.title,this.state.description,this.state.repetition,this.state.materiel,this.state.image)
            if(this.state.image !== undefined){
                await uploadImage(this.state.image, idWorkout)
            }
            this.props.navigation.goBack();
        }
    };

    render(){
        const {handleSubmit} = this.props;
        return (
            <KeyboardAwareScrollView>
                <View style={styles.root}>
                    <PicturePicker image={this.state.image} onPictureChange={this.onPictureChange}/>
                    <Text style={styles.subTitles}>Workout name</Text>
                    <Field
                        name="title"
                        props={{
                            placeholder: "Power push down",
                        }}
                        component={renderTextInput}
                        onChange={(text: any) => this.setState({title: text})}
                    />
                    <Text style={styles.subTitles}>Description</Text>
                    <Field
                        name="description"
                        props={{
                            placeholder: "My awesome description ...",
                        }}
                        component={renderTextArea}
                        onChange={(text: any) => this.setState({description: text})}
                    />
                    <Text style={styles.subTitles}>Repetition</Text>
                    <Field
                        name="repetition"
                        props={{
                            placeholder: "10 times",
                        }}
                        component={renderTextInput}
                        onChange={(text: any) => this.setState({repetition: text})}
                    />
                    <Text style={styles.subTitles}>Equipment</Text>
                    <Field
                        name="materiel"
                        props={{
                            placeholder: "Medicine Ball",
                        }}
                        component={renderTextInput}
                        onChange={(text: any) => this.setState({materiel: text})}
                    />
                    <View style={{alignItems: 'center', justifyContent: 'center', paddingTop: 40}}>
                        <TouchableOpacity onPress={handleSubmit(this.onSubmit)}>
                            <View style={styles.button}>
                                <Text style={{color: 'white', fontSize: 20}}>Save</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAwareScrollView>
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
        color: '#014a55',
        marginTop:40,
    },
    button:{backgroundColor: '#014a55',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 2,
        width: 200,
        height: 60,
    }
});

export default reduxForm({
    form: 'workout-form',
    // @ts-ignore
    validate: newWorkoutFormValidator,
})(NewWorkoutForm);
