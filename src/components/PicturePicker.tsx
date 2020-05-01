import * as React from 'react';
import {Alert, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

export default class PicturePicker extends React.Component {
    state = {
        image: null,
        imageIsSelected: false,
    };

    render() {
        let { image } = this.state;
        if(this.state.imageIsSelected){
            return(
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    {image && <Image source={{ uri: image }} style={{ width: 500, height: 300,resizeMode:"contain" }} />}
                </View>
            )
        } else {
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={(this.pickImage)}>
                        <View style={styles.button}>
                            <Text style={{color: 'white', fontSize: 20}}>Upload picture</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            );
        }
    }

    componentDidMount() {
        this.getPermissionAsync();
    }

    getPermissionAsync = async () => {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                Alert.alert('Sorry, we need camera roll permissions to make this work!');
        }
    };

    pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.cancelled) {
                this.setState({ imageIsSelected: true, image: result.uri });
            }
            console.log(result);
        } catch (err) {
            console.log(err);
        }
    };
}

const styles = StyleSheet.create({
    button:{backgroundColor: '#014a55',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 2,
        width: 200,
        height: 60,
    }
});