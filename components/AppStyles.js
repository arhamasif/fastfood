import React from 'react';
import { StyleSheet } from 'react-native';
import Colors from '../components/colors';

const defaultStyles = StyleSheet.create({
    screen:
    {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:12
    },
    title:
    {
        fontWeight:'bold',
        fontSize:20,
    },
    buttonbox:
    {
        width:'60%',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    button:
    {
        width:'50%',
        backgroundColor: Colors.primary,
        elevation:10
    }

});

export default defaultStyles;