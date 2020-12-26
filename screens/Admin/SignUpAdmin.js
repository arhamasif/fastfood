import React, { useState ,useRef} from 'react';
import { View,Text,StyleSheet, TouchableOpacity,TouchableWithoutFeedback,Keyboard,Alert,ScrollView } from 'react-native';
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
    function generateRandomString(length){
        var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*()';
        var random_string = '';
        if(length > 0){
          for(var i=0; i < length; i++){
              random_string += chars.charAt(Math.floor(Math.random() * chars.length));
          }
        }
        return random_string;
        }
    const confirmHandler = () =>
    {
        if(true/*check with database if username,email or phone number is same or not */){
            /*if it is not same,execute these commands*/
            /* Jab user signup pe click karey or sari details check hojaen to database me enter krne se pehle aik verification ka
            page show ho aur udr 5 length ki string input karega user "vcode" jo neche create horahi hai. usko aik variable me store karao
            or vcode se check karado same hogi to database me store hojaega warna verification code dubara mangey.*/
            const vcode = generateRandomString(5);
            app.post('/send',(req,res) => {
                const output = `</p>Welcome to Fast Foods. We recieved a registration request on our app.</p>
                <u1>
                <li>Name: ${user.Username}</li>
                </u1>
                <h3>Message</h3>
                <p> Kindly enter this verification code in the app </p>
                <p> ${vcode}<p>
                `;
            });
            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
            user: 'k181056@nu.edu.pk', // generated ethereal user
            pass: 'bingoregister./', // generated ethereal password
            },
            /* localhost par chalana ho to ye command uncommend krdena 
            tls:{
            rejectUnauthorized:false
            } */
            });
            // setup email data with unicode symbols
            let mailOptions = {
            from: '"Fast Foods" <k181056@nu.edu.pk>', // sender address
            to: user.email, // receiver
            subject: "Verification Email for Registration in Fast Foods", // Subject line
            text: "Hello user req.body.username We recieved a request for Registration of an account in our App Fast Foods. Kindly enter this Verification code in the App: ", // plain text body
            html: output, // html body
            }
            // send mail with defined transport object
            transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              return console.log(error);
            }
            console.log("Message sent: %s", info.messageId);
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
            });
            
            
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