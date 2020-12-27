import React, { useEffect, useRef } from 'react';
import { View,Text,StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../components/colors';

const header = props =>
{
    const {navigation,navFrom} = props;
    const drawerHandler = () =>
    {  
        navigation.openDrawer();
    };

    const shoppingCartHandler = () =>
    {
        navigation.navigate('ShoppingCart');
    }
    
    const accountHandler = () =>
    {
        navigation.navigate('Account');
    }
    
    const shoppingCartIcon=<Icon name='shopping-cart' size={34} style={styles.carticon} onPress={shoppingCartHandler} />;
    const accountIcon=<Icon name='user' size={34} style={styles.carticon} onPress={accountHandler} />;
    const headerRightIcon = useRef();

    useEffect(()=>{
        if(navFrom==='Cust')
        {
            headerRightIcon.current=shoppingCartIcon;
        }
        else if(navFrom==='Admin')
        {
            headerRightIcon.current=accountIcon;
        }
    },[navFrom,headerRightIcon])
    
    
    return(
        <View style={styles.header}>
            <Icon name='navicon' size={34} style={styles.menuicon} onPress={drawerHandler}/>
            {headerRightIcon.current}
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