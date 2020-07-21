import {StyleSheet, Text, TextInput, View} from "react-native";
import React from "react";

// @ts-ignore
export function renderTextArea({input: {onChange, ...input}, meta: {error, submitFailed}, ...rest}){
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
}

const styles = StyleSheet.create({
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
    errorContainer : {
        height:24,
        marginLeft:5
    },
    textErrorValidation: {
        fontSize:12,
        color: "#FF0000",
    }
});
