import React, { useState } from 'react';
import { View,Text,FlatList,StyleSheet } from 'react-native';

const Notifications = props =>
{
    const {navigation} = props;

    const [notifs,setNotifs] = useState([
        {
            notif: 'This is a notification',
            key: '1'
        },
        {
            notif: 'This is another notif',
            key: '2'
        },
        {
            notif: 'This is another notification',
            key:'3'
        }
    ]);

    return(
        <View style={styles.screen}>
            <FlatList 
            data={notifs}
            key={notifs.key}
            renderItem={({item}) =>
            <View >
                <Text>{item.notif}</Text>
            </View>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen:
    {
        padding:20,
        alignItems:'center',
        justifyContent:'center'
    },
    text:
    {
        fontWeight:'bold',
    }
});

export default Notifications;