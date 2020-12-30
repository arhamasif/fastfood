import React, { useRef, useState } from 'react';
import { SafeAreaView,Text,StyleSheet,View,TextInput, Alert } from 'react-native';
import Colors from '../../components/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import SettingsChange from '../../components/SettingsChange';

const Settings = props =>
{
    const {navigation} = props;

    const user = useRef({
        name: 'Arham Asif',
        username: 'thearhamasif'
    });

    const [isVisible,setIsVisible] = useState(false);

    const modalHandler = () =>
    {
        setIsVisible(false);
    }

    const editIcon=<Icon name='edit' size={18} style={styles.editicon} onPress={()=>{()=>{}}} />;
    

    

    return(
        <SafeAreaView style={styles.screen}>
            <View style={styles.upperBar}>
            <Text style={styles.accountName}>
                 {user.current.name}  {editIcon}
                </Text>
                <SettingsChange modalVisibility={isVisible} visibleFunc={modalHandler} changeUser={(enteredText)=>{user.current.name=enteredText}} value={user.current.name}/>
                <Text style={styles.userName}>
                    {user.current.username}   {editIcon}
                </Text>
                <SettingsChange modalVisibility={isVisible} visibleFunc={modalHandler} value={user.current.name} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen:
    {
        alignItems:'center',
        justifyContent:'center'
    },
    upperBar:
    {
        height:120,
        width:'100%',
        backgroundColor:'#f9f9f9',
        padding:25,
        alignItems:'flex-start'
    },
    accountName:
    {
        fontWeight:'bold',
        fontSize:30,
        color:Colors.primary,
        left:4,
    },
    userName:
    {
        fontWeight:'400',
        fontSize:15,
        color:Colors.secondary,
        left:4,
    },
    editicon:
    {
        color:'#d3d3d3'
    }
});

export default Settings;