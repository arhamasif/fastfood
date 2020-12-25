import React, { useEffect } from 'react';
import { View,Text,StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../components/colors';

const header = props =>
{
    const {navigation} = props;
    const drawerHandler = () =>
    {  
        navigation.openDrawer();
    };

    const shoppingCartHandler = () =>
    {
        navigation.navigate('ShoppingCart');
    }
    
    let shoppingCartIcon;
    useEffect(()=>{
        if(props.navigatingFrom==='Cust')
    {
        shoppingCartIcon=<Icon name='shopping-cart' size={34} style={styles.carticon} onPress={shoppingCartHandler} />;
    }
    },[props.navigatingFrom]);
    

    return(
        <View style={styles.header}>
            <Icon name='navicon' size={34} style={styles.menuicon} onPress={drawerHandler}/>
            {shoppingCartIcon}
            <View style={styles.insideHeader}>
                <Text style={styles.headerText}>
                    {props.title}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header:
    {
        width:'100%',
        height:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:Colors.primary
    },
    headerText:
    {
        fontWeight:'bold',
        fontSize:20,
        color:'white',
        letterSpacing:1
    },
    insideHeader:
    {
        height:'100%',
        width:'100%',
        alignItems:'center',
        justifyContent:'space-between'
    },
    menuicon:
    {
        color:'white',
        position:'absolute',
        left:0
    },
    carticon:
    {
        color:'white',
        position:'absolute',
        right:0
    }
});

export default header;