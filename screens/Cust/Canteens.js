import React,{useState} from 'react';
import {View, Text, FlatList,TouchableOpacity,StyleSheet} from 'react-native';

const Canteens = props => {

  const [Canteens,setCanteens] = useState([
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
      data={Canteens}
      key={Canteens.key}
      renderItem={({item})=>{
        return (
          <TouchableOpacity activeOpacity={0.8} onPress={(detailScreenHandler.bind(this,item))}>
          <View style={styles.container}>
          <View style={styles.container2}>
          <Text style={styles.titleText}>{item.canteen}</Text>
          </View>
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
    justifyContent: 'space-between',
    flex: 1,
    paddingTop:20
  },
  titleText:
  {
    fontSize: 18,
    fontWeight:'bold',
    color:'#fff'
  },
  list:
  {
    color:'#f00',
    marginTop:10
  },
  container:
  {
    flex:1,
    width:360,
    height: 150,
    alignContent:'center',
    elevation:10,
    justifyContent:'space-between'
  },
  container2:
  {
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'#e76f51',
    justifyContent:'space-around',
    alignItems:'center',
    width:360,
    height:'30%'
  },
  image:
  {
    flex:1,
    width:360,
    height:'100%',
    resizeMode:'contain',
    marginVertical:10
  }
});

export default Canteens;
