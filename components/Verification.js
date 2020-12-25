import React, {useEffect} from 'react';
import { View,Text,StyleSheet, Modal, TouchableHighlight} from 'react-native';
import Colors from './colors';

const Verification = props =>
{
    const {navigation} = props;
    useEffect(()=>{
        if(true/*verified*/)
        {
            props.visibleFunc();
            if(props.signUpFrom==='Admin')
            {
                navigation.navigate('NavigatorAdmin');
            }
            else
            {
                navigation.navigate('NavigatorCust');
            }
        }
        else{
        /*insert verification function here*/
        }
    });



    return(
        <Modal style={styles.screen} visible={props.visible} animationType="slide">
            <View style={styles.outerBox}>
            <Text>Verification link is sent</Text>
            <View style={styles.buttonBox}>
            <TouchableHighlight style={styles.insideButtonBox} onPress={()=>{/*insert verification function here*/}}>
                <Text>Press this to send again!</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.insideButtonBox} onPress={props.visibleFunc}>
                <Text>Go Back</Text>
            </TouchableHighlight>
            </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
        backgroundColor:Colors.primary
    },
    outerBox:
    {
        padding:10,
        width:'80%',
        maxHeight:'80%',
        backgroundColor:'white',
        flexWrap:'wrap'
    },
    insideButtonBox:
    {
        width:'40%',
        height:'44%',
        backgroundColor:Colors.primary,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:4,
        borderRadius:8,
        borderColor:Colors.secondary,
        marginHorizontal:15
    },
    buttonBox:
    {
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    }
});

export default Verification;