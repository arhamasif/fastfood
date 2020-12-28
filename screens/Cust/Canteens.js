import React,{useState} from 'react';
import {View, Text, FlatList,TouchableOpacity,StyleSheet} from 'react-native';

const Canteens = props => {

  const [CanteensList,setCanteensList] = useState([
  {canteen: 'Trends Food',key:'1'},
  {canteen: 'Fast Dhaba',key:'2'},
  {canteen: 'Pizza Fast',key:'3'},
  {canteen: 'Shawarma Fast',key:'4'}
]);


const {navigation} = props;



  const detailScreenHandler = () =>
  {
      navigation.navigate('Categories');
  };

  return (
  <View style={styles.screen}>
      <FlatList 
      style={styles.list}
      data={CanteensList}
      key={CanteensList.key}
      renderItem={({item})=>{
        return (
          <TouchableOpacity activeOpacity={0.8} onPress={(detailScreenHandler.bind(this,item))}>
          <View style={styles.container2}>
          <Text style={styles.titleText}>{item.canteen}</Text>
          </View>
        </TouchableOpacity>
        );
      }}
      />
  </View>
  )
};

const styles = StyleSheet.create({
  screen:
  {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingTop:20
  },
  titleText:
  {
    fontSize: 16,
    fontWeight:'bold',
    color:'#fff'
  },
  list:
  {
      flex:1
  },
  container2:
  {
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'#e76f51',
    alignItems:'center',
    width:'100%',
    height:'80%',
    marginTop:20
  }
});

export default Canteens;
