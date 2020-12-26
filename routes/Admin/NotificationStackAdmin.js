import {createStackNavigator} from 'react-navigation-stack';
import Notifications from '../../screens/Admin/AdminNotifications';
import Header from '../../constants/header';
import React from 'react';

const screens = {
  Notifications: {
    screen: Notifications,
    navigationOptions: ({navigation}) => {
      return{
        headerTitle: () => <Header title="Notifications" navigation={navigation} />
      }
  }
}
}

const NotificationStackAdmin = createStackNavigator(screens,{
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

export default NotificationStackAdmin;
