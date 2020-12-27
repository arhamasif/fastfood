import React, {useEffect, useState} from 'react';
import { View,Text,StyleSheet, Modal, TouchableOpacity} from 'react-native';

import Colors from './colors';
import UnderlineExample from'./UnderlineExample';

const Verification = props =>
{

    

        const {navigation,submitData} = props;
        const [verified,setVerified] = useState(false);
        useEffect(()=>{
            /*verification function called*/
            if(false/*verified*/)
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



    return(
        <Modal style={styles.screen} visible={props.visible} animationType="slide">
            <UnderlineExample />
            <View style={styles.outerBox}>
            <Text>Verification link is sent</Text>
            <View style={styles.buttonBox}>
            <TouchableOpacity style={styles.insideButtonBox} onPress={()=>{/*insert verification function here*/}}>
                <Text>Press this to send again!</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.insideButtonBox} onPress={props.visibleFunc}>
                <Text>Go Back</Text>
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