import {createStackNavigator} from 'react-navigation-stack';
import Settings from '../../screens/Cust/Settings';
import Header from '../../constants/header';
import React from 'react';

const screens = {
    Setting:
    {
        screen: Settings,
        navigationOptions: ({navigation}) => {
            return{
                headerTitle: () => <Header title="Settings" navigation={navigation} navFrom="Cust" />
            }
         }
    }
}

const CustSettingsStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
      headerLeft:()=>null,
      headerTintColor:'#fff',
      headerStyle:
      {
        backgroundColor:'#e76f51',
        height:60
      }
    }});

export default CustSettingsStack;