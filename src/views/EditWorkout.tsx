import React from 'react'
import {View, Text, Image, StyleSheet, TouchableOpacity, Alert} from 'react-native'
// @ts-ignore
import Dialog, { DialogContent, DialogTitle, DialogButton, DialogFooter } from 'react-native-popup-dialog';
import EditWorkoutForm from "../components/form/EditWorkoutForm";
import {Provider} from "react-redux";
import store from "../redux/myStore";
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import {deleteWorkout} from "../db/deleteWorkout";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

interface Props {
    workout:any,
    navigation:any,
    handleSubmit:any
}

export default class EditWorkout extends React.Component<Props> {
    constructor(props:any) {
        super(props);
    }
    state: any = {
        dialogVisible:false
    };

    render() {
        // @ts-ignore
        const {workout} = this.props.route.params;
        const {navigation} = this.props;
        return (
            <View style={styleWorkout.main_container}>
                <Provider store={store}>
                    <EditWorkoutForm workout={workout} navigation={navigation} initialValues={
                        {title : workout.TITLE,
                        description: workout.DESCRIPTION,
                        repetition: workout.REPETITION,
                        materiel: workout.MATERIEL,
                        image: workout.IMAGE}
                    }/>
                </Provider>
                <Dialog
                    onDismiss={() => {
                        this.setState({ dialogVisible: false });
                    }}
                    width={0.9}
                    visible={this.state.dialogVisible}
                    rounded
                    actionsBordered
                    dialogTitle={
                        <DialogTitle
                            title="Do you want to remove this workout ?"
                            style={{
                                backgroundColor: '#F7F7F8',
                            }}
                            hasTitleBar={false}
                            align="left"
                        />
                    }
                    footer={
                        <DialogFooter>
                            <DialogButton
                                text="CANCEL"
                                bordered
                                onPress={() => {
                                    this.setState({ dialogVisible: false });
                                }}
                                key="button-1"
                            />
                            <DialogButton
                                text="OK"
                                onPress={async () => {
                                    await deleteWorkout(workout.ID)
                                    this.setState({ dialogVisible: false });
                                    navigation.pop(2)
                                }}
                                key="button-2"
                            />
                        </DialogFooter>
                    }>
                    <DialogContent
                        style={{
                            backgroundColor: '#F7F7F8',
                        }}>
                        <Text>It will be definitely lost</Text>
                    </DialogContent>
                </Dialog>

                <View style={styleWorkout.delete_button_container}>
                    <HideWithKeyboard>
                        <TouchableOpacity onPress={() => {
                            this.setState({dialogVisible:true})
                        }}>
                            <View style={styleWorkout.buttonDelete}>
                                <Image style={styleWorkout.icon} source={require('../assets/icons/delete.png')}/>
                            </View>
                        </TouchableOpacity>
                    </HideWithKeyboard>
                </View>
        </View>
        )
    }
}

const styleWorkout = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor:"ghostwhite",
    },
    image: {
        flex:4,
        resizeMode:"cover",
        margin: 5,
        backgroundColor: 'gray'
    },
    icon: {
        resizeMode:"contain",
        width: 30,
        height: 30,
    },
    description_container: {
        paddingTop:15,
        flex: 6,
    },
    title_container:{
        flex:1,
        justifyContent:"center",
        paddingLeft:10,
        backgroundColor:"#014a55"
    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 25,
        color:"#f8f8ff",
        flexWrap: 'wrap',
        paddingRight: 5,
        justifyContent:"center",
    },
    title_section:{
        fontSize: 15,
        flexWrap: 'wrap',
        color: "white",
        margin:7,
    },
    description_text: {
        fontSize: 18,
        paddingHorizontal: 40,
    },
    subTitle_container:{
        alignSelf:"flex-start",
        justifyContent:"center",
        backgroundColor:"#014a55",
        borderRadius:20,
        marginLeft:10,
        marginBottom:10,
        marginTop:10
    },
    content_container:{
        marginBottom:0
    },
    delete_button_container:{
        position:'absolute',
        bottom:40,
        alignSelf:'flex-end',
        paddingRight:20

    },
    buttonDelete:{
        backgroundColor: '#c4151c',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        width: 60,
        height: 60,
    }
})
