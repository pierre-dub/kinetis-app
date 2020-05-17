import React from 'react';
import {View, Text, StyleSheet, Alert, TouchableOpacity, AsyncStorage} from 'react-native';
import {Field, reduxForm} from 'redux-form';
import {checkAuthentication} from "../../db/checkAuthentication";
import {connexionFormValidator} from "../validator/ConnexionFormValidator";
import {renderTextInput} from "../renderTextInput";
import {renderPasswordInput} from "../renderPasswordInput";

interface Props {
    navigate: any,
    logged:any,
    handleSubmit:any
}

class ConnexionForm extends React.Component<Props>{
    constructor(props:any) {
        super(props);
    }
    state:any = {
        email: "",
        password: ""
    }

    onSubmit = async (value:any) => {
        const {logged} = this.props;
        await checkAuthentication(this.state.email, this.state.password).then(async (status) => {
            if (status === "200") {
                await AsyncStorage.setItem('userEmail', this.state.email);
                await AsyncStorage.setItem('userPassword', this.state.password);
                logged(true);
            } else {
                Alert.alert("Authentication failed")
            }
        })
    };

    render() {
        const {handleSubmit} = this.props
        return (
            <View style={styles.root}>
                <Field
                    name="email"
                    props={{
                        placeholder: "Email",
                    }}
                    component={renderTextInput}
                    onChange={(text: any) => this.setState({email: text})}
                />
                <Field
                    name="mdp"
                    props={{
                        placeholder: "Password",
                    }}
                    component={renderPasswordInput}
                    onChange={(text: any) => this.setState({password: text})}
                />
                <View style={{alignItems: 'center', justifyContent: 'center',paddingTop:40}}>
                    <TouchableOpacity onPress={handleSubmit(this.onSubmit)}>
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
    button:{backgroundColor: '#014a55',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        width: 300,
        height: 60,
    }
});

export default reduxForm({
    form: 'login-form',
    validate: connexionFormValidator
    // @ts-ignore
})(ConnexionForm);
