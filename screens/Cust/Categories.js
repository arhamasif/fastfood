import React,{useState} from 'react';
import {View, Text, FlatList,TouchableOpacity,StyleSheet,ImageBackground} from 'react-native';
import images from "../../components/imageArray";

const Categories = props => {

  const [FoodCategories,setFoodCategories] = useState([
  {category: 'Fast Food',key:'1'},
  {category: 'Desi Food',key:'2'},
  {category: 'Snacks',key:'3'},
  {category: 'Beverages',key:'4'}
]);


const {navigation} = props;



  const detailScreenHandler = (object) =>
  {
      navigation.navigate('Items',object);
  };

  return (
  <View style={styles.screen}>
      <FlatList 
      data={FoodCategories}
      key={FoodCategories.key}
      renderItem={({item})=>{
        return (
          <TouchableOpacity activeOpacity={0.8} onPress={(detailScreenHandler.bind(this,item))}>
          <ImageBackground style={styles.image} source={images[parseInt(item.key)-1]}>
          <View style={styles.container}>
          <View style={styles.container2}>
          <Text style={styles.titleText}>{item.category}</Text>
          </View>
        </View>
          </ImageBackground>
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

export default Categories;
