import React,{useRef} from 'react';
import { View,StyleSheet,Button,FlatList,Text, SafeAreaView } from 'react-native';
import Colors from '../../components/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react/cjs/react.development';


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
            price:      100,
            userid:     '1234'
        },
        {
            orderid:    '123',
            itemid:     '2',
            title:      'Burger',
            quantity:   1,
            price:      100,
            userid:     '1234'
        },
        {
            orderid:    '123',
            itemid:     '3',
            title:      'Chicken BBQ Roll',
            quantity:   4,
            price:      100,
            userid:     '1234'
        },
        {
            orderid:    '123',
            itemid:     '4',
            title:      'Beef Burger',
            quantity:   4,
            price:      100,
            userid:     '1234'
        },
        {
            orderid:    '123',
            itemid:     '5',
            title:      'Chicken Burger',
            quantity:   4,
            price:      100,
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

    const [totalAmount,setTotalAmount] = useState(0);
    const countTotal = (data) =>
    {
        let temp=0;
        for(let i=0;i<data.current.length;i++)
            {
                temp+=data.current[i].quantity*data.current[i].price;
                console.log(temp);
                setTotalAmount(temp);
            }
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
         contentContainerStyle={
            {
                justifyContent:'space-evenly'
            }
         }
         data={data.current}
         style={styles.flatlistContainer}
         keyExtractor={(item)=>item.itemid}
         renderItem={({item}) => {
            return (
            <SafeAreaView style={styles.list}>
                <View style={styles.titleBox}>
                <Text style={styles.subHeadings} >{item.title}</Text>
                </View>
                <View style={styles.quantityBox}>
                    <View style={styles.headingBox}>
                        <Text style={styles.subHeadings}>Quantity</Text>
                    </View>
                    <View style={styles.bodyBox}>
                        <Text style={styles.bodyText}>{item.quantity}</Text>
                    </View>
                </View>
                <View style={styles.priceBox}>
                <View style={styles.headingBox}>
                    <Text style={styles.subHeadings}>Price</Text>
                </View>
                <View style={styles.bodyBox}>
                    <Text style={styles.bodyText}>{item.price*item.quantity}</Text>
                </View>
                </View>
                <View style={styles.symbolBox}>
                    <View style={styles.insideSymbolBoxPlus}>
                    <Icon name='plus' size={24} style={styles.plusIcon} onPress={addQuantityHandler.bind(this,item.itemid)} />
                    </View>
                    <View style={styles.insideSymbolBoxMinus}>
                    <Icon name='minus' size={24} style={styles.minusIcon} onPress={removeQuantityHandler.bind(this,item.itemid)} />
                    </View>
                </View>
            </SafeAreaView>
            );
         }}
         />
        <View style={styles.outsideTotalBox}>
         <View style={styles.totalBox}>
             <Text style={styles.totalTextStyle} >Total</Text>
         </View>
         <View style={styles.totalAmountBox} onAccessibilityTap={countTotal.bind(this,data)}>
             <Text style={styles.totalTextStyle}>{totalAmount}</Text>
         </View>
        </View>
        <View style={styles.button}>
        <Button title="Checkout" color={Colors.primary} onPress={checkoutHandler} />
        <Button title="Continue Shopping" color={Colors.secondary} onPress={continueShoppingHandler} />
        </View>
    </View>
   );
};

const styles = StyleSheet.create({
    orderTitle:{
        fontSize:30,
        fontWeight:'bold',
        color:Colors.primary
    },
    orderIdTitle:
    {
        fontSize:22,
        color:Colors.primary
    },
    screen:
    {
        alignItems:'center',
        justifyContent:'center',
        flex:1
    },
    plusIcon:
    {
        color:Colors.secondary
    },
    minusIcon:
    {
        color:Colors.secondary
    },
    list:
    {
        flexDirection:'row',
        backgroundColor:Colors.primary,
        width: '100%',
        justifyContent:'space-evenly',
        alignItems:'flex-start',
        paddingLeft:3,
        height:'45%',
        paddingVertical:2
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
        width:'97%',
        padding:20,
    },
    idTitle:
    {
        width:'100%',
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    quantityBox:
    {
        width:'15%',
        marginHorizontal:2,
        height:'100%'
    },
    titleBox:
    {
        width: '30%',
        marginHorizontal:3,
        alignItems:'flex-start',
        height:'100%'
    },
    priceBox:
    {
        width:'20%',
        marginHorizontal:3,
        height:'100%'
    },
    symbolBox:
    {
        width:'20%',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        height:'100%'
    },
    insideSymbolBoxPlus:
    {
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
        width:'50%',
        borderRadius:5,
        marginRight:5,
        padding:5,
    },
    insideSymbolBoxMinus:
    {
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
        width:'50%',
        borderRadius:5,
        padding:5
    },
    subHeadings:
    {
        fontSize:14,
        fontWeight:'bold',
        color:'white'
    },
    headingBox:
    {
        height:'50%'
    },
    bodyBox:
    {
        height:'50%'
    },
    flatlistContainer:
    {
        maxHeight:'60%',
        marginHorizontal:6,
        borderRadius:5
    },
    outsideTotalBox:
    {
        flexDirection:'row',
        width:'80%',
        marginVertical:6,
        height:'5%'
    },
    totalBox:
    {
        width:'70%',
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
        backgroundColor:Colors.primary,
        borderLeftColor:Colors.secondary,
        borderRightColor:Colors.secondary,
        borderBottomColor:Colors.primary,
        borderTopColor:Colors.primary,
        borderWidth:4
    },
    totalAmountBox:
    {
        width:'30%',
        backgroundColor:Colors.secondary,
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
        borderWidth:4,
        borderLeftColor:Colors.primary,
        borderRightColor:Colors.primary,
        borderBottomColor:Colors.secondary,
        borderTopColor:Colors.secondary,
    },
    totalTextStyle:
    {
        color:'white',
        fontSize:15,
        fontWeight:'bold'
    },
    bodyText:
    {
        fontSize:16,
        fontWeight:'300',
        color:'white'
    }
});

export default ShoppingCart;