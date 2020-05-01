import React from 'react';
import {View, Text, TextInput, StyleSheet, Alert, TouchableOpacity, Animated} from 'react-native';
import {Field, reduxForm} from 'redux-form';
import {checkAuthentication} from "../db/checkAuthentication";

interface Props {
    navigate: any
}

class ConnexionForm extends React.Component<Props>{
    constructor(props:any) {
        super(props);
    }
    state:any = {
        email: "",
        password: ""
    }

// @ts-ignore
    renderTextInput = ({ input: { onChange, ...input }, ...rest}) => {
        return <TextInput style={styles.textInput}
                          onChangeText={onChange} {...input} {...rest}
                          placeholderTextColor="#014a55"
        />
    };

    onSubmit = async () => {
        await checkAuthentication(this.state.email, this.state.password).then((status) => {
            if (status === "200"){
                this.props.navigate('SignInNavigator')
            }
            else{
                Alert.alert("Authentication failed")
            }
        })
    };

    render() {
        return (
            <View style={styles.root}>
                <Field
                    name="email"
                    props={{
                        placeholder: "Email",
                    }}
                    component={this.renderTextInput}
                    onChange={(text: any) => this.setState({email: text})}
                />
                <Field
                    name="mdp"
                    props={{
                        placeholder: "Password",
                    }}
                    component={this.renderTextInput}
                    onChange={(text: any) => this.setState({password: text})}
                />
                <View style={{alignItems: 'center', justifyContent: 'center',paddingTop:40}}>
                    <TouchableOpacity onPress={(this.onSubmit)}>
                        <View style={styles.button}>
                            <Text style={{color: 'white', fontSize: 20}}>Log In</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems: 'center', justifyContent: 'center',paddingTop:20}}>
                    <TouchableOpacity onPress={()=>{this.props.navigate('SignIn')}}>
                        <View style={styles.button}>
                            <Text style={{color: 'white', fontSize: 20}}>Create New Account</Text>
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
        borderRadius: 5,
        width:350,
        height: 50,
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
        borderRadius: 10,
        width: 300,
        height: 60,
    }
});

// @ts-ignore
export default reduxForm({form: 'login-form'})(ConnexionForm);
