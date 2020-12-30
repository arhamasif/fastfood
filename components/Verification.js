import React, {useEffect, useRef, useState} from 'react';
import { View,Text,StyleSheet, Modal, TouchableOpacity} from 'react-native';

import Colors from './colors';
import UnderlineExample from'./UnderlineExample';

const Verification = props =>
{
        

        const {navigation,submitData} = props;
        useEffect(()=>{
            if(value.length==5/*value===verification wali value*/)
            {
                submitData();
                props.visibleFunc();
                if(props.signUpFrom==='Admin')
                {
                    navigation.navigate('NavigatorAdmin');
                }
                else if (props.signUpFrom==='Cust')
                {
                    navigation.navigate('NavigatorCust');
                }
            }
        });


    const [value, setValue] = useState('');
    

    return(
        <Modal style={styles.screen} visible={props.visible} animationType="slide">
            <UnderlineExample value={value} setValue={setValue}/>
            <View style={styles.outerBox}>
            <Text>Verification link is sent</Text>
            <View style={styles.buttonBox}>
            <TouchableOpacity style={styles.insideButtonBox} onPress={props.verificationFunc}>
                <Text style={{color:'white'}}>Press this to send again!</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.insideButtonBox} onPress={props.visibleFunc}>
                <Text style={{color:'white'}}>Go Back</Text>
            </TouchableOpacity>
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
        backgroundColor:Colors.primary,
        justifyContent:'center'
    },
    outerBox:
    {
        padding:10,
        width:'80%',
        maxHeight:'80%',
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center'
    },
    insideButtonBox:
    {
        width:'50%',
        height:'55%',
        backgroundColor:Colors.primary,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:4,
        borderRadius:8,
        borderColor:Colors.secondary,
        marginHorizontal:20
    },
    buttonBox:
    {
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center'
    }
});

export default Verification;