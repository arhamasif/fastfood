import React from 'react';
import { View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import Colors from '../components/colors';

const AppStartingScreen = props => {

    const {navigation} = props;

    const toCustLoginScreen = () =>
    {
        navigation.navigate('CustLogin');
    }
    const toAdminLoginScreen = () =>
    {
        navigation.navigate('AdminLogin');
    }


    return(
        <View style={styles.screen}>
            <View style={styles.buttonbox}>
            <TouchableOpacity activeOpacity={0.8} onPress={toCustLoginScreen}>
                <View style={styles.insideButtonBox}>
                    <Text style={styles.title}>
                        Teacher
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8} onPress={toAdminLoginScreen}>
                <View style={styles.insideButtonBox}>
                    <Text style={styles.title}>
                        Canteen
                    </Text>
                </View>
            </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        width:'100%',
        height:'100%',
        padding:10,
        justifyContent:'center',
        alignItems:'center'
    },
    insideButtonBox:
    {
        width:200,
        height:'40%',
     marginVertical:5,
     backgroundColor:Colors.primary,
     alignItems:'center',
     justifyContent:'space-around',
     borderWidth:4,
     borderRadius:8,
     borderColor:Colors.secondary
    },
    buttonbox:{
        flex:0.4,
        height:'15%',
        width:'100%',
        justifyContent:'space-between',
        alignItems:'center',
        padding:10
    },
    title:
    {
        color:'white',
        fontSize:20,
        fontWeight:'bold'
    }
});

export default AppStartingScreen;