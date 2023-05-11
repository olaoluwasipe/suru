import React from 'react';
import { View,Text, StyleSheet, Image,TouchableOpacity } from 'react-native';

const exploreCategory = ({ navigation }) => {
  return (
    <TouchableOpacity
    activeOpacity={0.8}
    onPress={() => navigation.navigate("Category", { name: "Category" })}
    style={styles.foodItem}
  >
      <View style={styles.foodItemImageWrapper}>
      <Image 
      style={styles.foodItemImage}
      resizeMode='contain'
      source={require('../assets/images/rice.png')}
      />
      </View>
      <View style={styles.foodItemTitleWrapper}>
      <Text style={styles.foodItemTitle}>Food</Text>
      </View>
</TouchableOpacity>
  )
}

export default exploreCategory;



const styles = StyleSheet.create({
  foodItem: {
    flexDirection: 'column',
    // maxWidth: 150,
    marginVertical: 10,
    width: '50%',

  },
  foodItemImageWrapper: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    marginVertical: 6,
    borderRadius: 50,
    alignSelf: 'center',
    backgroundColor: '#EDD0FF',
   
  },
  foodItemTitleWrapper: {
    alignSelf: 'center',

  },
  foodItemTitle: {
    fontSize: 20,
    fontWeight: '400',
    color: '#000',

  }
})