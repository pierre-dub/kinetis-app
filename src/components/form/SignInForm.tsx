import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Field, reduxForm} from 'redux-form';
import {setNewUser} from "../../db/setNewUSer";
import {CheckBox} from "react-native-elements";
import {signInValidator} from "../validator/SignInFormValidator";
import {renderTextInput} from "../renderTextInput";
import {renderPasswordInput} from "../renderPasswordInput";

interface Props {
    navigate: any,
    logged:any,
    handleSubmit:any
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
        const {logged} = this.props;
        console.log(this.state)
        await setNewUser(this.state.surname, this.state.name, this.state.password, this.state.email, this.state.kine)
            .then(
                logged(true)
            );
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
        const {handleSubmit} = this.props
        return (
            <View style={styles.root}>
            <Text style={styles.subTitles}>Name</Text>
            <Field
            name="name"
            props={{
                placeholder: "name",
            }}
            component={renderTextInput}
            onChange={(text: any) => this.setState({name: text})}
            />
                <Text style={styles.subTitles}>Surname</Text>
                <Field
                    name="surname"
                    props={{
                        placeholder: "surname",
                    }}
                    component={renderTextInput}
                    onChange={(text: any) => this.setState({surname: text})}
                />
            <Text style={styles.subTitles}>Password</Text>
            <Field
            name="password"
            props={{
                placeholder: "password",
            }}
            component={renderPasswordInput}
            onChange={(text: any) => this.setState({password: text})}
            />
            <Text style={styles.subTitles}>Password Confirmation</Text>
            <Field
            name="passwordConfirmation"
            props={{
                placeholder: "password confirmation",
            }}
            component={renderPasswordInput}
            onChange={(text: any) => this.setState({passwordConfirmation: text})}
            />
            <Text style={styles.subTitles}>Email</Text>
            <Field
            name="email"
            props={{
                placeholder: "email",
            }}
            component={renderTextInput}
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
                <TouchableOpacity onPress={handleSubmit(this.onSubmit)}>
                    <View style={styles.button}>
                        <Text style={{color: 'white', fontSize: 20}}>Create</Text>
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
    button:{
        backgroundColor: '#014a55',
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
    validate: signInValidator,
})(SignInForm);