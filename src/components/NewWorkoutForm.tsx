import React from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {Field, reduxForm} from 'redux-form';
import PicturePicker from "./PicturePicker";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {setNewWorkout} from "../db/setNewWorkout";
import {uploadImage} from "../db/saveImage";
import {newWorkoutFormValidator} from "./NewWorkoutFormValidator"


const required = (value: any) => (value ? undefined : 'Required')

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

// @ts-ignore
    renderTextInput = ({input: {onChange, ...input}, meta: {error, submitFailed}, ...rest}) => {
        let valide = true;
        if(error !== undefined){
            valide = false;
        }
        return (
            <View>
                <TextInput style={styles.textInput}
                           multiline={true}
                           onChangeText={onChange} {...input} {...rest}
                           placeholderTextColor="#014a55"
                />
                {submitFailed ? ( !valide ?
                    <View style={styles.errorContainer}>
                        <Text style={styles.textErrorValidation}>
                            ⚠️  {error}
                        </Text>
                    </View> : <View/>)
                    :
                    <View/>
                }
            </View>
        )
    };

// @ts-ignore
    renderTextArea = ({input: {onChange, ...input}, meta: {error, submitFailed}, ...rest}) => {
        let valide = true;
        if(error !== undefined){
            valide = false;
        }
        return (
            <View>
                <TextInput style={styles.textArea}
                           multiline={true}
                           onChangeText={onChange} {...input} {...rest}
                           placeholderTextColor="#014a55"
                />
                {submitFailed ? ( !valide ?
                    <View style={styles.errorContainer}>
                        <Text style={styles.textErrorValidation}>
                            ⚠️  {error}
                        </Text>
                    </View> : <View/>)
                    :
                    <View/>
                }
            </View>
        )
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
                        //    placeholder: "Power push down",
                        }}
                        component={this.renderTextInput}
                        onChange={(text: any) => this.setState({title: text})}
                    />
                    <Text style={styles.subTitles}>Description</Text>
                    <Field
                        name="description"
                        props={{
                         //   placeholder: "In a standing position, lean over slightly at the hips keeping the back flat. Begin with the medicine ball at the chest with elbows out to the sides and forcefully push the ball toward the floor underneath the chest. Catch the ball when it rebounds and repeat quickly.",
                        }}
                        component={this.renderTextArea}
                        onChange={(text: any) => this.setState({description: text})}
                    />
                    <Text style={styles.subTitles}>Repetition</Text>
                    <Field
                        name="repetition"
                        props={{
                         //   placeholder: "10 times",
                        }}
                        component={this.renderTextInput}
                        onChange={(text: any) => this.setState({repetition: text})}
                    />
                    <Text style={styles.subTitles}>Equipment</Text>
                    <Field
                        name="materiel"
                        props={{
                        //    placeholder: "Medicine Ball",
                        }}
                        component={this.renderTextInput}
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
    },
    errorContainer : {
        height:12,
        marginLeft:5
    },
    textErrorValidation: {
        fontSize:12,
        color: "#FF0000",
    }
});

export default reduxForm({
    form: 'workout-form',
    // @ts-ignore
    validate: newWorkoutFormValidator,
})(NewWorkoutForm);
