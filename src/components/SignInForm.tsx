import React from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {Field, reduxForm, submit} from 'redux-form';
import {setNewUser} from "../db/setNewUSer";
import {CheckBox} from "react-native-elements";

interface Props {
    navigate: any
}

class SignInForm extends React.Component<Props> {
    constructor(props: any) {
        super(props);
    }
    state:any = {
        surname: "",
        name: "",
        password: "",
        passwordConfirmation: "",
        email: "",
        kine: false,

    }

    onSubmit = async () => {
        console.log(this.state)
            let json = await setNewUser(this.state.surname,this.state.name,this.state.password,this.state.email,this.state.kine)
            .then(this.props.navigate('SignInNavigator')
        );
    };

// @ts-ignore
    renderTextInput = ({input: {onChange, ...input}, ...rest}) => {
        return <TextInput style={styles.textInput}
        onChangeText={onChange} {...input} {...rest}
        placeholderTextColor="#014a55"
            />
    };

    renderCheckBox = () => {
        return <CheckBox
            containerStyle={{backgroundColor:'ghostwhite',borderColor:'#014a55'}}
            title='Are you kiné ?'
            checked={this.state.kine}
            onPress={() => this.setState({kine: !this.state.kine})}
        />
    };

    render(){
        return (
            <View style={styles.root}>
            <Text style={styles.subTitles}>Name</Text>
            <Field
            name="name"
            props={{
                placeholder: "name",
            }}
            component={this.renderTextInput}
            onChange={(text: any) => this.setState({name: text})}
            />
                <Text style={styles.subTitles}>Surname</Text>
                <Field
                    name="surname"
                    props={{
                        placeholder: "surname",
                    }}
                    component={this.renderTextInput}
                    onChange={(text: any) => this.setState({surname: text})}
                />
            <Text style={styles.subTitles}>Password</Text>
            <Field
            name="password"
            props={{
                placeholder: "password",
            }}
            component={this.renderTextInput}
            onChange={(text: any) => this.setState({password: text})}
            />
            <Text style={styles.subTitles}>Password Confirmation</Text>
            <Field
            name="passwordConfirmation"
            props={{
                placeholder: "password confirmation",
            }}
            component={this.renderTextInput}
            onChange={(text: any) => this.setState({passwordConfirmation: text})}
            />
            <Text style={styles.subTitles}>Email</Text>
            <Field
            name="email"
            props={{
                placeholder: "email",
            }}
            component={this.renderTextInput}
            onChange={(text: any) => this.setState({email: text})}
            />
            <View style={{paddingTop:20}}>
                <Field
                    name="kine"
                    component={this.renderCheckBox}
                    onChange={(check: any) => this.setState({kine: check})}
                />
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', paddingTop: 40}}>
                <TouchableOpacity onPress={(this.onSubmit)}>
                    <View style={styles.button}>
                        <Text style={{color: 'white', fontSize: 20}}>Create</Text>
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
export default reduxForm({form: 'workout-form'})(SignInForm);