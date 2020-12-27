import React, {useEffect, useState} from 'react';
import { View,Text,StyleSheet, Modal, TouchableHighlight,SafeAreaView} from 'react-native';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';
import Colors from './colors';
import stylesVer from './stylesVer';

const CELL_COUNT = 5;


const Verification = props =>
{

    const UnderlineExample = () => {
        const [value, setValue] = useState('');
        const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
        const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
        })};

        const {navigation,submitData,VerificationFunc} = props;
        const [verified,setVerified] = useState(false);
        useEffect(()=>{
            if(true/*verified*/)
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
            <SafeAreaView style={stylesVer.root}>
      <Text style={stylesVer.title}>Underline example</Text>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={stylesVer.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <View
            // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
            onLayout={getCellOnLayoutHandler(index)}
            key={index}
            style={[stylesVer.cellRoot, isFocused && stylesVer.focusCell]}>
            <Text style={stylesVer.cellText}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
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