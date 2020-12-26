import {createStackNavigator} from 'react-navigation-stack';
import CustHome from '../../screens/Cust/CustHome';
import Header from '../../constants/header';
import React from 'react';
import FoodItems from '../../screens/Cust/FoodItems';
import ShoppingCart from '../../screens/Cust/ShoppingCart';

const screens = {
  Home: {
    screen: CustHome,
    navigationOptions: ({navigation}) => {
      return{
        headerTitle: () => <Header title="Home" navigation={navigation} navFrom="Cust" />
      }
    }
  },
  Items: {
    screen: FoodItems,
    navigationOptions: ({navigation}) => {
      return{
        headerTitle: () => <Header title="Items" navigation={navigation} navFrom="Cust" />
      }
    }
  },
  ShoppingCart:
  {
    screen: ShoppingCart,
    navigationOptions: ({navigation}) => {
      return{
        headerTitle: () => <Header title="Cart" navigation={navigation} navFrom="" />
      }
    }
  }
};

const HomeStackCust = createStackNavigator(screens,{
  defaultNavigationOptions:{
    headerLeft:()=>null,
    headerTintColor:'#fff',
    headerStyle:
    {
      backgroundColor:'#e76f51',
      height:60
    }
  }});

export default HomeStackCust;
