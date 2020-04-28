import React from 'react';
import {View, Button, Text, TextInput, StyleSheet, Alert, TouchableOpacity} from 'react-native';
import {Field, reduxForm, submit} from 'redux-form';

interface Props {
    navigate: any
}

class ConnexionForm extends React.Component<Props>{
    constructor(props:any) {
        super(props);
    }

// @ts-ignore
    renderTextInput = ({ input: { onChange, ...input }, ...rest}) => {
        return <TextInput style={styles.textInput}
                          onChangeText={onChange} {...input} {...rest}
                          placeholderTextColor="grey"
        />
    };

    onSubmit = () => {
        this.props.navigate('app')
    }

    render() {
        return (
            <View style={styles.root}>
                <Text style={styles.subTitles}>Login</Text>
                <Field
                    name="login"
                    props={{
                        placeholder: "login",
                    }}
                    component={this.renderTextInput}
                />
                <Text style={styles.subTitles}>Mot de passe</Text>
                <Field
                    name="mdp"
                    props={{
                        placeholder: "Mot de Passe",
                    }}
                    component={this.renderTextInput}
                />
                <View style={{alignItems: 'center', justifyContent: 'center',paddingTop:40}}>
                    <TouchableOpacity onPress={this.onSubmit}>
                        <View style={styles.button}>
                            <Text style={{color: 'white', fontSize: 20}}>Enregistrer</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
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
export default reduxForm({form: 'login-form'})(ConnexionForm);
