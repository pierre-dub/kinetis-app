import {StyleSheet, Text, TextInput, View} from "react-native";
import React from "react";

// @ts-ignore
export function renderTextInput({input: {onChange, ...input}, meta: {error, submitFailed}, ...rest}){
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

const styles = StyleSheet.create({
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
    errorContainer : {
        height:24,
        marginLeft:5
    },
    textErrorValidation: {
        fontSize:12,
        color: "#FF0000",
    }
});
