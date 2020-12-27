import {createStackNavigator} from 'react-navigation-stack';
import Header from '../../constants/header';
import React from 'react';
import FoodItems from '../../screens/Cust/FoodItems';
import ShoppingCart from '../../screens/Cust/ShoppingCart';
import Canteens from '../../screens/Cust/Canteens';
import Categories from '../../screens/Cust/Categories';

const screens = {
  Home: {
    screen: Canteens,
    navigationOptions: ({navigation}) => {
      return{
        headerTitle: () => <Header title="Home" navigation={navigation} navFrom="Cust" />
      }
    }
  },
  Categories:
  {
    screen: Categories,
    navigationOptions: ({navigation}) => {
      return{
        headerTitle: () => <Header title="Categories" navigation={navigation} navFrom="Cust" />
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
