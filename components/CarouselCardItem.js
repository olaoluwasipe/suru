import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from "react-native";

const CarouselCardItem = ({ item, index }) => {
  return (
    <TouchableOpacity onPress={() => console.log("clicked")}>
      <Image
        // source={{ uri: item.imgUrl }}
        source={item.imgUrl}
        style={styles.image}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  image: {
    width: Math.round(Dimensions.get('window').width),
    height: 250,
    resizeMode: 'contain',
  }
})

export default CarouselCardItem