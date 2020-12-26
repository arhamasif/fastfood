import {createStackNavigator} from 'react-navigation-stack';
import CustNotifications from '../../screens/Cust/CustNotifications';
import Header from '../../constants/header';
import React from 'react';

const screens = {
  Notifications: {
    screen: CustNotifications,
    navigationOptions: ({navigation}) => {
      return{
        headerTitle: () => <Header title="Notifications" navigation={navigation} navFrom="Cust" />
      }
  }
},
}

const NotificationStackCust = createStackNavigator(screens,{
  defaultNavigationOptions:{
    headerLeft:()=>null,
    headerTintColor:'#fff',
    headerStyle:
    {
      backgroundColor:'#e76f51',
      height:60
    }
}}
);

export default NotificationStackCust;
