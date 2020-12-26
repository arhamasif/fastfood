import React, { useEffect, useState } from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';
import Foods from '../../components/Foods';
import Colors from '../../components/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

const FoodItems = props =>
{
    const {navigation} = props;
    const category = navigation.getParam('category');

    const navigateToHome = () =>
    {
        navigation.pop();
    }

    //built this to record the order
    const [order,setOrder] = useState([]);

    /*useEffect(()=>
    {   
        enter backend here to fetch category wise data from database with the variable 'category'
    },[category])*/

    //using a temporary object i imported from folder components here
    //flatlist's key prop will take your unique ID from database
    //filhal saray items display karraha hai but once you fetch data according to category
    //insert that data into FlatList's data prop

    const addToCartHandler = addItem =>
    {
        setOrder([...order,addItem]);
    }

    console.log(order);

    return(
        <View style={styles.screen}>
            <FlatList 
            style={styles.flist}
            data={Foods}
            key={Foods.key}
            renderItem={
                ({item}) =>{
        return(
            <View style={styles.list}>
            <View style={styles.itemBox}>
                <View style={styles.itemnameBox}>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
                <View style={styles.itemPriceBox}>
                    <Text style={styles.title}>{item.price} rs</Text>
                </View>
            </View>
            <View style={styles.buttonBox}>
                <TouchableOpacity onPress={addToCartHandler.bind(this,item)}>
                    <View style={styles.insideButtonBox}>
                        <Text style={styles.insideButtonTitle}>
                            Add to Cart
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>  
            </View> 
        );
        }}
            />
            <TouchableOpacity onPress={navigateToHome}>
                    <View style={styles.backButton}>
                        <Text style={styles.insideButtonTitle}>
                            Choose a different category
                        </Text>
                    </View>
                </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    screen:
    {
        flex:1,
        padding:10,
        alignItems:'center',
        justifyContent:'center'
    },
    itemBox:
    {
        width:'100%',
        height:'80%',
        flexDirection:'row',
        backgroundColor:Colors.tertiary,
        alignItems:'center',
        justifyContent:'center',
        padding:5
    },
    buttonBox:
    {
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    insideButtonBox:
    {
     width:'100%',
     height:'40%',
     backgroundColor:Colors.primary,
     alignItems:'center',
     justifyContent:'center',
     borderWidth:4,
     borderRadius:8,
     borderColor:Colors.secondary,
     padding:10
    },
    insideButtonTitle:
    {
        color:'white',
        fontSize:14,
        fontWeight:'bold'
    },
    itemnameBox:
    {
        flexDirection:'row',
        width:'60%',
        justifyContent:'center',
        backgroundColor:Colors.quaternary
    },
    itemPriceBox:
    {
        flexDirection:'row',
        width:'30%',
        right:0,
        justifyContent:'center',
        backgroundColor:'white'
    },
    title:
    {
        fontWeight:'bold',
        fontSize:15
    },
    list:
    {
        width:'100%',
        height:'22%',
        backgroundColor:Colors.primary,
        marginVertical:5
    },
    backButton:
    {
        backgroundColor:Colors.primary,
        marginVertical:10
    },
    flist:
    {
        backgroundColor:'white'
    }
});

export default FoodItems;