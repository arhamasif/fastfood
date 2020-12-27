import {createStackNavigator} from 'react-navigation-stack';
import Home from '../../screens/Admin/AdminHome';
import Details from '../../screens/Admin/AdminOrderDetails';
import Header from '../../constants/header';
import React from 'react';
import AdminAccountDetails from '../../screens/Admin/AdminAccountDetails';


const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => {
      return{
        headerTitle: () => <Header title="Home" navigation={navigation} navFrom="Admin" />,
      }
    }
  },
  Details: {
    screen: Details
  },
  Account:
  {
    screen: AdminAccountDetails,
    navigationOptions: ({navigation}) => {
      return{
        headerTitle: () => <Header title="Account" navigation={navigation} navFrom="" />,
      }
    }
  }
};

const HomeStackAdmin = createStackNavigator(screens,{
  defaultNavigationOptions:{
    headerLeft:()=>null,
    headerTintColor:'#fff',
    headerStyle:
    {
      backgroundColor:'#e76f51',
      height:60
    }
  }});

export default HomeStackAdmin;
