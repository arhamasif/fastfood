import React, { useState } from 'react';
import { View,Text,FlatList,StyleSheet } from 'react-native';
import Colors from '../../components/colors';

const Notifications = props =>
{
    const {navigation} = props;

    const [notifs,setNotifs] = useState([
        {
            notif: 'Order cancelled!',
            key: '1'
        },
        {
            notif: 'Order is on it\'s way',
            key: '2'
        },
        {
            notif: 'Order confirmed!',
            key:'3'
        }
    ]);

    return(
        <View style={styles.screen}>
            <FlatList 
            data={notifs}
            key={notifs.key}
            renderItem={({item}) =>
            <View style={styles.notifBox}>
<Text style={styles.text}>{item.notif}</Text>
            </View>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen:
    {
        flex:1,
        padding:20,
        alignItems:'center',
        justifyContent:'center'
    },
    text:
    {
        fontWeight:'bold',
        color:'white'
    },
    notifBox:
    {
        width:350,
        height:60,
        backgroundColor:Colors.primary,
        alignItems:'center',
        marginVertical:6,
        justifyContent:'center',
        borderRadius:6,
        elevation:2
    }
});

export default Notifications;