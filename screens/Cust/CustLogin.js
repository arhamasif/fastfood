import React from 'react';
import { useRef } from 'react';
import { View,Text,StyleSheet, Alert,TouchableOpacity, Keyboard,TouchableWithoutFeedback } from 'react-native';
import Colors from '../../components/colors';
import DataBox from'../../components/DataBox';

const CustLogin = props =>
{
    const {navigation} = props;
    const user = useRef(
        {
            username: '',
            email:'',
            password:''
        }
    );
    const navigateToHome = () =>
    {
        console.log(user);
        if((user.current.username==='thearhamasif' || user.current.email==='arhamasif@gmail.com') && (user.current.password==='1234'))
        {
            navigation.navigate('NavigatorCust');
        }
        else if(user.current.username!=='thearhamasif' || user.current.email!=='arhamasif@gmail.com')
        {
            Alert.alert('Wrong username or email!','Please re-enter',[{text:'Re Enter',style:'destructive',onPress:()=>{}}]);
        }
        else
        {
            Alert.alert('Wrong password!','Please re-enter',[{text:'Re Enter',style:'destructive',onPress:()=>{}}]);
        }
    }

    const navigateToSignUp = () =>
    {
        navigation.navigate('SignUpCust');
    }

    const usernameOremailInput = usernameOremailValue => {
            user.current.username=usernameOremailValue;
            user.current.email=usernameOremailValue;
    }
    const passwordInput = passwordValue => {
        user.current.password=passwordValue;
    }
    const keyboardDisappear = () =>
    {
        Keyboard.dismiss();
    }
    return(
        <TouchableWithoutFeedback onPress={keyboardDisappear}>
        <View style={styles.screen}>
           
            <View style={styles.outerBox}>
                <DataBox title='Username/Email' inputData={usernameOremailInput} viewstyles={styles.loginBox} textstyles={styles.titleTextt} inputboxstyles={styles.inputBoxx} />
            <DataBox title="Password" inputData={passwordInput} viewstyles={styles.loginBox} textstyles={styles.titleTextt} inputboxstyles={styles.inputBoxx}/>
            </View>


            <View style={styles.buttonBox}>
            {/*button for Login*/}
            <TouchableOpacity onPress={navigateToHome}>
                    <View style={styles.insideButtonBox}>
                        <Text style={styles.insideButtonTitle}>
                            Login
                        </Text>
                    </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToSignUp}>
                    <View style={styles.insideButtonBox}>
                        <Text style={styles.insideButtonTitle}>
                            Sign Up
                        </Text>
                    </View>
            </TouchableOpacity>
            </View>
        </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    outerBox:
    {
        padding:10,
        width:'80%',
        height:'35%',
        backgroundColor:Colors.primary,
        justifyContent:'center',
        elevation:10,
        borderBottomWidth:10,
        borderRadius:10,
        borderColor:Colors.secondary,
        alignItems:'center'
    },
    loginBox:
    {
        marginVertical:10,
        height:'40%',
        width:'100%',
        flexWrap:'nowrap'
    },
    inputBoxx:
    {
        borderWidth:4,
        marginVertical:10,
        borderRadius:5,
        borderColor:Colors.secondary,
        backgroundColor:'#d3d3d3',
        width:'100%',
        height:'60%'
    },
    titleTextt:
    {
        fontSize:20,
        fontWeight:'bold',
        color:'white'
    },
    insideButtonBox:
    {
     width:100,
     height:'24%',
     backgroundColor:Colors.primary,
     alignItems:'center',
     justifyContent:'center',
     borderWidth:4,
     borderRadius:8,
     borderColor:Colors.secondary,
     marginHorizontal:15
    },
    insideButtonTitle:
    {
        color:'white',
        fontSize:20,
        fontWeight:'bold'
    },
    buttonBox:
    {
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    }
});  

export default CustLogin;