import React,{useState} from 'react';
import {View, Text, FlatList,TouchableOpacity,StyleSheet} from 'react-native';
import Colors from '../../components/colors';

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
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:20
  },
  titleText:
  {
    fontSize: 20,
    fontWeight:'bold',
    color:'#fff'
  },
  container2:
  {
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:Colors.primary,
    alignItems:'center',
    width:280,
    height:100,
    marginVertical:28,
    borderWidth:10,
    borderColor:Colors.secondary,
    borderRadius:20
  }
});

export default Canteens;
