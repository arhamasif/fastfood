import React from 'react';
import { View,StyleSheet,Button,FlatList } from 'react-native';

const ShoppingCart = props =>
{
    const {navigation} = props;
    // const data = navigation.getParam(); // you will get your data here which you send from header
    // making a temporary data here so you know how this data will be
    const [data,setData] = useState([
        {
            orderid:    '123',
            itemid:     '555',
            title:      'Pizza',
            price:      quantity*200,
            quantity:   2,
            userid:     '1234'
        },
        {
            orderid:    '123',
            itemid:     '512',
            title:      'Burger',
            price:      quantity*150,
            quantity:   1,
            userid:     '1234'
        },
        {
            orderid:    '123',
            itemid:      '515',
            title:      'Chicken BBQ Roll',
            price:      quantity*150,
            quantity:   4,
            userid:     '1234'
        }

    ]);


    //keyExtractor={(item) => item.id};

    const continueShoppingHandler = () =>
    {
        navigation.pop();
    }
   return(
     <View>
         <Text>{data.orderid}</Text>
        <Button title="Continue Shopping" onPress={continueShoppingHandler} />
    </View>
   );
};

const styles = StyleSheet.create({
    
});

export default ShoppingCart;