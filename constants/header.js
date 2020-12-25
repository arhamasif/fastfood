import React,{useRef} from 'react';
import { View,Text,StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const header = props =>
{
    const {navigation} = props;
    const drawerHandler = () =>
    {  
        navigation.openDrawer();
    };

    return(
        <View style={styles.header}>
            <Icon name='navicon' size={34} style={styles.menuicon} onPress={drawerHandler}/>
            <Icon name='shopping-cart' size={34} style={styles.carticon} onPress={()=>{}} />
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
        justifyContent:'center'
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