import React, { useState,useEffect } from 'react';
import { View,Text,TextInput,StyleSheet } from 'react-native';
import Colors from './colors';

const DataBox = props =>
{
    const [secured,setSecured] = useState(false);
    useEffect(()=>{if(props.title==='Password' || props.title==='Re-enter Password')
    {
        setSecured(true);
    }});
    return(
        <View style={{...styles.signUpBox,...props.viewstyles}}>
        <Text style={{...styles.titleText,...props.textstyles}}>
                        {props.title}
                    </Text>

        <TextInput style={{...styles.inputBox,...props.inputboxstyles}} placeholder="" secureTextEntry={secured} onChangeText={props.inputData}/>
        </View>
    );
};
const styles = StyleSheet.create({
    inputBox:
    {
        marginTop:2,
        width:'60%',
        height:'40%',
        borderBottomWidth:3
    },
    titleText:
    {
        fontSize:13,
        fontWeight:'bold'
    },
    signUpBox:
    {
        flexWrap:'wrap',
        width:'30%',
        marginTop:3,
        height:'20%',
        justifyContent:'center',
        marginHorizontal:5
    },
});

export default DataBox;