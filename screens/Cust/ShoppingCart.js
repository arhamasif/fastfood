import React from 'react';
import { View,Text,StyleSheet,Button,FlatList } from 'react-native';

const ShoppingCart = props =>
{
    const {navigation} = props;

    const continueShoppingHandler = () =>
    {
        navigation.pop();
    }
   return(
     <View>
        <FlatList 
        data={}/>
        <Button title="Continue Shopping" onPress={continueShoppingHandler} />
    </View>
   );
};

const styles = StyleSheet.create({
    
});

export default ShoppingCart;