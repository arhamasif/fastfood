import {createStackNavigator} from 'react-navigation-stack';
import Notifications from '../../screens/Cust/CustNotifications';
import Header from '../../constants/header';
import React from 'react';

const screens = {
  Home: {
    screen: Notifications,
    navigationOptions: ({navigation}) => {
      return{
        headerTitle: () => <Header title="Notifications" navigation={navigation} />
      }
  }
}
}

const NotificationStack = createStackNavigator(screens,{
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

export default NotificationStack;
