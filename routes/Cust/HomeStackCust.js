import {createStackNavigator} from 'react-navigation-stack';
import CustHome from '../../screens/Cust/CustHome';
import Header from '../../constants/header';
import React from 'react';
import FoodItems from '../../screens/Cust/FoodItems';


const screens = {
  Home: {
    screen: CustHome,
    navigationOptions: ({navigation}) => {
      return{
        headerTitle: () => <Header title="Home" navigation={navigation} />
      }
    }
  },
  Items: {
    screen: FoodItems
  }
};

const HomeStack = createStackNavigator(screens,{
  defaultNavigationOptions:{
    headerLeft:null,
    headerShown:false,
    /*headerTintColor:'#fff',
    headerStyle:
    {
      backgroundColor:'#e76f51',
      height:60
    }*/
  }});

export default HomeStack;
