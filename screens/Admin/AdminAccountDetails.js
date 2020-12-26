import React from 'react';
import { View,Text,StyleSheet,Button } from 'react-native';

const AdminAccountDetails = props =>
{
    const {navigation} = props;
    const navigateBack = () =>
    {
        navigation.pop();
    }
    return(
        <View style={styles.screen}>
            <Text>This is admin account details screen!</Text>
            <Button title="Go Back" onPress={navigateBack}/>
        </View>
    );
}

const styles = StyleSheet.create({
    screen:
    {
        flex:1,
        padding:10,
        alignItems:'center',
        justifyContent:'center'
    }
});

export default AdminAccountDetails;