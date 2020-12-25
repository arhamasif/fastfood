import React, { useState ,useRef} from 'react';
import { View,Text,StyleSheet, TouchableOpacity,TouchableWithoutFeedback,Keyboard,Alert } from 'react-native';
import Colors from '../../components/colors';
import DataBox from '../../components/DataBox';
import Verification from '../../components/Verification';

const SignUpAdmin = props =>
{
    const usernameChecker = /^(?=.{8,20}$)[a-zA-Z0-9._]$/g;
    const emailChecker = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const passwordChecker = /^(?=.*\d).{4,8}$/; 

    const {navigation} = props;
    const keyboardDisappear = () =>
    {
        Keyboard.dismiss();
    }


    const navigateToLogin = () =>
    {
            navigation.pop();
    }
    /*temporary user object*/
    /*insert this object directly into the database*/
    /*user.current is the object to put into database, as it is a nested object */
    const user = useRef(
        {
            username: '',
            firstname:'',
            lastname:'',
            phonenumber:'',
            email:'',
            password:'',
            canteenlocation:''
        }
    );
    const [isVisible,setisVisible] = useState(false);

    const confirmHandler = () =>
    {
        if(true/*check with database if username,email or phone number is same or not */){
            /*if it is not same,execute these commands*/
            console.log(user);
            setisVisible(true);
        }
        else if(false/*username is same*/){
            return(
                Alert.alert('Username already in use','Choose another username',[{title:'Re-enter',style:'destructive',onPress:()=>{user.current.username='';}}])
            );
        }
        else if(false/*email is same*/){
            return(
                Alert.alert('Email already in use','Choose another email',[{title:'Re-enter',style:'destructive',onPress:()=>{user.current.email='';}}])
            );
        }
        else if(false/*phone number is same*/){
            return(
                Alert.alert('Phone number already in use','Choose another phone number',[{title:'Re-enter',style:'destructive',onPress:()=>{user.current.phonenumber='';}}])
            );
        }
    }
    const removeVerification = () =>
    {
        setisVisible(false);
    }
    let jani;

    const usernameInputFunction = (enteredText) =>
    {
        user.current.username=enteredText;
    }

    const firstnameInputFunction = enteredText =>
    {
        user.current.firstname=enteredText;
    }
    

    const lastnameInputFunction = enteredText =>
    {
        user.current.lastname=enteredText;
    }

    const phonenumberInputFunction = enteredText =>
    {
        user.current.lastname=enteredText;
    }
    const emailInputFunction = enteredText =>
    {
        user.current.email=enteredText;
    }
    const passwordInputFunction = enteredText =>
    {
        user.current.password=enteredText;
    }
    const rePwInputFunction = enteredText =>
    {
        return;
    }
    const locInputFunction = enteredText =>
    {
        user.current.canteenlocation=enteredText;
    }

    return(
        
        <TouchableWithoutFeedback onPress={keyboardDisappear} >
        <View style={styles.screen}>
            <Verification visible={isVisible} visibleFunc={removeVerification} navigation={navigation} signUpFrom="Admin"/>
            <View style={styles.outerBox}>
                <DataBox title="Username" inputData={usernameInputFunction} />
                <DataBox title="First Name" inputData={firstnameInputFunction}/>
                <DataBox title="Last Name" inputData={lastnameInputFunction}/>
                <DataBox title="Phone Number" inputData={phonenumberInputFunction} />
                <DataBox title="Email" inputData={emailInputFunction} />
                <DataBox title="Password" inputData={passwordInputFunction} />
                <DataBox title="Re-enter Password" inputData={rePwInputFunction} />
                <DataBox title="Canteen Location" inputData={locInputFunction} />
            </View>
            <View style={styles.buttonBox}>
            {/*button for Confirm*/}
            <TouchableOpacity activeOpacity={0.8} onPress={confirmHandler}>
                    <View style={styles.insideButtonBox}>
                        <Text>
                            Confirm
                        </Text>
                    </View>
            </TouchableOpacity>
            {/*button for Cancel*/}
            <TouchableOpacity activeOpacity={0.8} onPress={navigateToLogin}>
                    <View style={styles.insideButtonBox}>
                        <Text>
                            Cancel
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
    buttonBox:
    {
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    signUpBox:
    {
    }
});

export default SignUpAdmin;