import React, { useRef, useState,useEffect } from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';
import Foods from '../../components/Foods';
import Colors from '../../components/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../../components/colors';

const FoodItems = props =>
{
    const {navigation} = props;
    const category = navigation.getParam('category');
    const itemlist = useRef([]);

    const navigateToHome = () =>
    {
        navigation.pop();
    }

    //built this to record the order
    const [order,setOrder] = useState([]);

   /* useEffect(()=>
    {   let i=0;
        //enter backend here to fetch category wise data from database with the variable 'category'
        while(i<Foods.length)
        {
            if(category===Foods[i].category)
            {
                itemlist.current=[...itemlist.current,Foods[i]];
                console.log(itemlist.current);
                i++;
            }
            else{
                i++;
            }
        }
    },[category]);*/

    //using a temporary object i imported from folder components here
    //flatlist's key prop will take your unique ID from database
    //filhal saray items display karraha hai but once you fetch data according to category
    //insert that data into FlatList's data prop
    
    const addToCartHandler = addItem =>
    {
        //adds items to the order list, modify here for quantity
        //for help, i've added key here, check if item present with key
        console.log(addItem.key);
        setOrder([...order,{...addItem,key:Date.now()}]);
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
                <TouchableOpacity onPress={addToCartHandler.bind(this,(item))}>
                    <View style={styles.insideButtonBox}>
                        <Text style={styles.insideButtonTitle}>
                            Add to Cart
                        </Text>
                    </View>
                </TouchableOpacity>
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
        height:'8%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        marginBottom:10,
    },
    buttonBox:
    {
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    insideButtonBox:
    {
     width:'100%',
     height:'4%',
     backgroundColor:Colors.primary,
     alignItems:'center',
     justifyContent:'center',
     borderWidth:2,
     borderRadius:8,
     borderColor:Colors.secondary,
     padding:10,
     marginTop:2
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
        width:'80%',
        justifyContent:'center',
        backgroundColor:Colors.secondary,
        borderTopLeftRadius:8,
        borderBottomStartRadius:8
    },
    itemPriceBox:
    {
        flexDirection:'row',
        width:'20%',
        right:0,
        justifyContent:'center',
        backgroundColor:colors.tertiary,
        borderTopRightRadius:8,
        borderBottomEndRadius:8
    },
    title:
    {
        fontWeight:'bold',
        fontSize:15,
        color:'white'
    },
    list:
    {
        width:'100%',
        height:'12%'
    },
    backButton:
    {
        backgroundColor:Colors.primary,
        marginVertical:10
    },
    flist:
    {
        
    }
});

export default FoodItems;