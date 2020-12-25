import React from 'react';
import { View,Text,StyleSheet,Button } from 'react-native';

const ShoppingCart = props =>
{
    const {navigation} = props;

    const continueShoppingHandler = () =>
    {
        navigation.pop();
    }
   return(
     <View>
        <Text>
            This is a shopping cart!
        </Text>
        <Button title="Continue Shopping" onPress={continueShoppingHandler} />
    </View>
   );
};

const styles = StyleSheet.create({
    
});

export default ShoppingCart;