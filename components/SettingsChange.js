import React,{useState} from 'react';
import { Modal,TextInput,Button,StyleSheet } from 'react-native';
import Colors from "./colors";

const settingsChange = props =>
{

    const {modalVisibility,visibleFunc,value} = props;

    return (
        <Modal visible={modalVisibility} animationType='slide' style={styles.modalz}>
        <TextInput style={styles.textinputstyle} onChangeText={props.changeUser}/>
        <Button title="Confirm" color={Colors.primary} onPress={visibleFunc}/>
        </Modal>
    );
}

const styles = StyleSheet.create({
    textinputstyle:
    {
        width:'100%',
        height:120,
        backgroundColor:Colors.secondary,
        alignItems:'center',
        justifyContent:'center'
    },
    modalz:
    {
        justifyContent:'center',
        alignItems:'center'
    }
});

export default settingsChange;
