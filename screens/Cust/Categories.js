import React,{useState} from 'react';
import {View, Text, FlatList,TouchableOpacity,StyleSheet,ImageBackground} from 'react-native';
import images from "../../components/imageArray";
import Colors from '../../components/colors';

const Categories = props => {

  const [FoodCategories,setFoodCategories] = useState([
  {category: 'Fast Food',key:'1'},
  {category: 'Desi Food',key:'2'},
  {category: 'Snacks',key:'3'},
  {category: 'Beverages',key:'4'}
]);


const {navigation} = props;


  const navigateToCanteens = () =>
  {
    navigation.pop();
  };

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
      <TouchableOpacity onPress={navigateToCanteens}>
                    <View style={styles.backButton}>
                        <Text style={styles.insideButtonTitle}>
                            Choose a different canteen
                        </Text>
                    </View>
                </TouchableOpacity>
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
  },
  backButton:
    {
        backgroundColor:Colors.primary,
        marginVertical:10
    },
    insideButtonTitle:
    {
        color:'white',
        fontSize:14,
        fontWeight:'bold'
    }
});

export default Categories;
