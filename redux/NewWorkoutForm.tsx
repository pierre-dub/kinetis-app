import React from 'react';
import {View, Button, Text, TextInput, StyleSheet, Alert, TouchableOpacity} from 'react-native';
import { Field, reduxForm } from 'redux-form';


const myForm = (props: { handleSubmit: any; }) => {

    const { handleSubmit } = props;

    const onSubmit = (values: any) => console.log(values);

    // @ts-ignore
    const renderTextInput = ({ input: { onChange, ...input }, ...rest}) => {
        return <TextInput style={styles.textInput}
                          onChangeText={onChange} {...input} {...rest}
                          placeholderTextColor="grey"
        />
    };

    // @ts-ignore
    const renderTextArea = ({ input: { onChange, ...input }, ...rest}) => {
        return <TextInput style={styles.textArea}
                          multiline={true}
                          onChangeText={onChange} {...input} {...rest}
                          placeholderTextColor="grey"
        />
    };

    return (
        <View style={styles.root}>
            <Text style={styles.subTitles}>Nom de l'exerice</Text>
            <Field
                name="exerice_name"
                props={{
                    placeholder: "Nom de l\'exercice",
                }}
                component={renderTextInput}
            />
            <Text style={styles.subTitles}>Description</Text>
            <Field
                name="description"
                props={{
                    placeholder: "Description",
                }}
                component={renderTextArea}
            />
            <Text style={styles.subTitles}>Répétition</Text>
            <Field
                name="repetition"
                props={{
                    placeholder: "Répétition",
                }}
                component={renderTextInput}
            />
            <Text style={styles.subTitles}>Matériel</Text>
            <Field
                name="metriel"
                props={{
                    placeholder: "Matériel",
                }}
                component={renderTextInput}
            />
            <View style={{alignItems: 'center', justifyContent: 'center',paddingTop:40}}>
                <TouchableOpacity onPress={handleSubmit(onSubmit)}>
                    <View style={styles.button}>
                        <Text style={{color: 'white', fontSize: 20}}>Enregistrer</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

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

export default reduxForm({form: 'test-form'})(myForm);