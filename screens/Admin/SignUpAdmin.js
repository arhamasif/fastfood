import React, { useState ,useRef} from 'react';
import { View,Text,StyleSheet, TouchableOpacity,TouchableWithoutFeedback,Keyboard,Alert,ScrollView } from 'react-native';
import Colors from '../../components/colors';
import DataBox from '../../components/DataBox';
import Verification from '../../components/Verification';

const SignUpAdmin = props =>
{

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
        if(enteredText===user.current.password)
        {
            return;
        }
        else
        {
            Alert.alert('Passwords do not match','Re-enter Password',[{title:'Re-enter',style:'destructive',onPress:()=>{user.current.password=''}}]);
        }
    }
    const locInputFunction = enteredText =>
    {
        user.current.canteenlocation=enteredText;
    }
    const Submitdata  = ()=>{
        fetch("http://10.0.2.2:3000/send-data",{
            method :"post",
            headers :{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                Username:user.current.username,
                FirstName:user.current.firstname,
                LastName:user.current.lastname,
                email:user.current.email,
                PhoneNumber:user.current.phonenumber,
                password:user.current.password,
                department:user.current.department,
                roomno:user.current.officelocation
            })
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }

    return(
        
        <TouchableWithoutFeedback onPress={keyboardDisappear} >
        
        <View style={styles.screen}>
            <Verification visible={isVisible} visibleFunc={removeVerification} navigation={navigation} signUpFrom="Admin" submitData={Submitdata}/>
            <View style={styles.outerBox}>
                <ScrollView style={styles.scroll}>
                    <DataBox title="Username" inputData={usernameInputFunction} inputboxstyles={styles.boxStyle} textstyles={styles.textStyle} />
                    <DataBox title="First Name" inputData={firstnameInputFunction} inputboxstyles={styles.boxStyle} textstyles={styles.textStyle} />
                    <DataBox title="Last Name" inputData={lastnameInputFunction} inputboxstyles={styles.boxStyle} textstyles={styles.textStyle} />
                    <DataBox title="Phone Number" inputData={phonenumberInputFunction} inputboxstyles={styles.boxStyle} textstyles={styles.textStyle}  />
                    <DataBox title="Email" inputData={emailInputFunction} inputboxstyles={styles.boxStyle} textstyles={styles.textStyle}  />
                    <DataBox title="Password" inputData={passwordInputFunction} inputboxstyles={styles.boxStyle} textstyles={styles.textStyle}  />
                    <DataBox title="Re-enter Password" inputData={rePwInputFunction} inputboxstyles={styles.boxStyle} textstyles={styles.textStyle}  />
                    <DataBox title="Canteen Location" inputData={locInputFunction} inputboxstyles={styles.boxStyle} textstyles={styles.textStyle}  />
                 </ScrollView>
            </View>
            <View style={styles.buttonBox}>
            {/*button for Confirm*/}
            <TouchableOpacity activeOpacity={0.8} onPress={confirmHandler}>
                    <View style={styles.insideButtonBox}>
                        <Text style={styles.buttonText}>
                            Confirm
                        </Text>
                    </View>
            </TouchableOpacity>
            {/*button for Cancel*/}
            <TouchableOpacity activeOpacity={0.8} onPress={navigateToLogin}>
                    <View style={styles.insideButtonBox}>
                        <Text style={styles.buttonText}>
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
    scroll:{

    },
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.primary
    },
    outerBox:
    {
        flex:0.8,
        marginTop:'20%',
        padding:10,
        width:'80%',
        height:'80%',
        backgroundColor:'white',
        borderRadius:5,
        justifyContent:'center'
    },
    insideButtonBox:
    {
        width:'90%',
        height:'24%',
        backgroundColor:Colors.primary,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:4,
        borderRadius:8,
        borderColor:Colors.secondary,
        marginHorizontal:'10%'
    },
    buttonBox:
    {
        width:'70%',
        marginBottom:'20%',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    boxStyle:
    {
        borderColor:Colors.secondary
    },
    textStyle:
    {
        color:Colors.primary
    },
    buttonText:
    {
        fontWeight:'bold',
        fontSize:20,
        color:'white'
    }
});

export default SignUpAdmin;