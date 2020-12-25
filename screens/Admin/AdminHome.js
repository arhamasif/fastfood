import React,{useState} from 'react';
import {View, Text, FlatList,TouchableOpacity,StyleSheet,ImageBackground} from 'react-native';
import images from "../../components/imageArray";

const Home = props => {

  const [reviews,setReviews] = useState([
  {title: 'Fast Food',rating: 5,body:'lorem ipsum',key:'1'},
  {title: 'BBQ',rating: 4,body:'lorem ipsum',key:'2'},
  {title: 'Snacks',rating: 2,body:'lorem ipsum',key:'3'},
  {title: 'Beverages',rating: 2,body:'lorem ipsum',key:'4'}
]);


const {navigation} = props;



  const detailScreenHandler = (object) =>
  {
    navigation.navigate('Details',object);
  };

  return (
  <View style={styles.screen}>
      <FlatList 
      data={reviews}
      key={reviews.key}
      renderItem={({item})=>{
        return (
          <TouchableOpacity activeOpacity={0.95} onPress={(detailScreenHandler.bind(this,item))}>
          <ImageBackground style={styles.image} source={images[parseInt(item.key)-1]}>
          <View style={styles.container}>
          <View style={styles.container2}>
          <Text style={styles.titleText}>{item.title}</Text>
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

export default Home;
