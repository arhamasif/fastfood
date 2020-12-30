import React,{useRef} from 'react';
import { View,StyleSheet,Button,FlatList,Text, SafeAreaView } from 'react-native';
import Colors from '../../components/colors';
import Icon from 'react-native-vector-icons/FontAwesome';


const ShoppingCart = props =>
{
    const {navigation} = props;
    // const data = navigation.getParam(); // you will get your data here which you send from header
    // making a temporary data here so you know how this data will be
    const data = useRef([
        {
            orderid:    '123',
            itemid:     '1',
            title:      'Pizza',
            quantity:   2,
            price:      ()=>{return data.current.quantity*200},
            userid:     '1234'
        },
        {
            orderid:    '123',
            itemid:     '2',
            title:      'Burger',
            quantity:   1,
            price:      ()=>{return data.current.quantity*150},
            userid:     '1234'
        },
        {
            orderid:    '123',
            itemid:     '3',
            title:      'Chicken BBQ Roll',
            quantity:   4,
            price:      ()=>{return this.quantity*150},
            userid:     '1234'
        }

    ]);

    const addQuantityHandler = (itemKey) =>
    {
        //add quantity increasing backend here and remove the code below
        for(let i=0;i<data.current.length;i++)
        {
            if(data.current[i].itemid===itemKey)
            data.current[i].quantity+=1;
        }
    }
    const removeQuantityHandler = (itemKey) =>
    {   //add quantity reducing backend here and remove the code below
        for(let i=0;i<data.current.length;i++)
        {
            if(data.current[i].itemid===itemKey)
            data.current[i].quantity-=1;
        }
    }
    //keyExtractor={(item) => item.id};

    const continueShoppingHandler = () =>
    {
        navigation.pop();
    }
    
    const checkoutHandler = () =>
    {
        //enter backend here to confirm order
        return;
    }

   return(
     <View style={styles.screen}>
         <View style={styles.orderId}>
         <Text style={styles.orderTitle}>Order ID</Text>
         <View style={styles.idTitle}>
         <Text style={styles.orderIdTitle}>{data.current[0].orderid}</Text>
         </View>
         </View>
         <FlatList
         data={data.current}
         keyExtractor={(item)=>item.itemid}
         renderItem={({item}) => {
            return (
            <SafeAreaView style={styles.list}>
                <Text>{item.title}</Text>
                <View style={styles.itemBox}>
                <View>
                    <Text>Quantity</Text>
                    <Text>{item.quantity}</Text>
                </View>
                <View>
                <Text>Price</Text>
                <Text>{item.price}</Text>
                </View>
                </View>
                <Icon name='plus' size={26} style={styles.quantityicon} onPress={addQuantityHandler} />
                <Icon name='minus' size={26} style={styles.quantityicon} onPress={removeQuantityHandler} />
            </SafeAreaView>
            );
         }}
         />
        <View style={styles.button}>
        <Button title="Checkout" color={Colors.primary} onPress={checkoutHandler} />
        <Button title="Continue Shopping" color={Colors.primary} onPress={continueShoppingHandler} />
        </View>
    </View>
   );
};

const styles = StyleSheet.create({
    orderTitle:{
        fontSize:20,
        fontWeight:'bold'
    },
    orderIdTitle:
    {
        fontSize:20
    },
    screen:
    {
        alignItems:'center',
        justifyContent:'center'
    },
    quantityicon:
    {
        color:Colors.primary,
        marginHorizontal:5
    },
    list:
    {
        flexDirection:'row'
    },
    button:
    {
        flexDirection:'row',
        justifyContent:'space-between',
        width: '65%',
        marginBottom:20
    },
    orderId:
    {
        width:'100%',
        left:5,
        padding:15
    },
    idTitle:
    {
        width:'100%',
        left:5,
        padding:15

    },
    itemBox:
    {
        width:'40%',
        flexDirection:'row'
    }
});

export default ShoppingCart;