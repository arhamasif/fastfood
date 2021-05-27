import React, { useRef, useState,useEffect } from 'react';
import {View,Text,StyleSheet,FlatList,SafeAreaView,ImageBackground} from 'react-native';
import Foods from '../../components/Foods';
import Colors from '../../components/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../../components/colors';
import Icon from 'react-native-vector-icons/FontAwesome';


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
            contentContainerStyle={{
                maxHeight:'80%',
                maxWidth:'90%',
                backgroundColor:'red',
                marginTop:10,
                justifyContent:'space-evenly'
            }}
            style={styles.flist}
            data={Foods}
            key={Foods.key}
            renderItem={
                ({item}) =>{
        return(
            <SafeAreaView style={styles.list}>
            <View style={styles.itemBox}>
            <ImageBackground style={styles.image} source={item.image}>
                    <View style={styles.itemNameBox}>
                        <Text style={styles.title}>{item.title}</Text>
                    </View>
                    <View style={styles.itemPriceBox}>
                        <Text style={styles.price}>{item.price} Rs</Text>
                    </View>
            </ImageBackground>
            </View>
            <View style={styles.iconBox}>
                <Icon name='cart-plus' size={34} style={styles.cartPlusIcon} onPress={addToCartHandler.bind(this,(item))} />
            </View>
            </SafeAreaView> 
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
        width:'80%',
        height:'100%',
        backgroundColor:'black',
        flexDirection:'column-reverse'
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
    itemNameBox:
    {
        width:'100%',
        height:'30%',
        justifyContent:'flex-end',
        backgroundColor:Colors.primary,
        opacity:20
    },
    itemPriceBox:
    {
        flexDirection:'row',
        width:'100%',
        height:'30%',
        justifyContent:'flex-end',
        backgroundColor:Colors.quaternary
    },
    title:
    {
        fontWeight:'bold',
        fontSize:15,
        color:'white',
        marginHorizontal:8,
        marginBottom:8
    },
    price:
    {
        fontWeight:'500',
        fontSize:20,
        color:'white',
        marginHorizontal:8,
        marginTop:3
    },
    list:
    {
        width:'100%',
        height:'50%',
        marginVertical:2,
        flexDirection:'row',
        backgroundColor:'blue'
    },
    backButton:
    {
        backgroundColor:Colors.primary,
        marginVertical:10
    },
    cartPlusIcon:
    {
        color:'white'
    },
    iconBox:
    {
        backgroundColor:Colors.primary,
        width:'20%',
        height:'30%',
        alignItems:'center'
    },
    image:
    {
        flex:1,
        maxWidth:'100%',
        maxHeight:'100%',
        resizeMode:'stretch'
    }
});

export default FoodItems;