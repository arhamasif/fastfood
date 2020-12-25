import React from 'react';
import {View, Text, StyleSheet,Button} from 'react-native';

const Details = (props) => {
  const {navigation} = props;
  const buttonHandler = () =>
  {
    navigation.navigate('Home');
  }

  return (
  <View style={styles.screen}>
    <Text>{navigation.getParam('title')}</Text>
    <Text>{navigation.getParam('rating')}</Text>
    <Text>{navigation.getParam('body')}</Text>
    <Button title="Go back" onPress={buttonHandler}/>
  </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default Details;
