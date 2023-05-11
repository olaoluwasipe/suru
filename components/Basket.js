import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet, Image } from "react-native";
import rice from "../assets/images/rice.png"
import { useNavigation } from "@react-navigation/native";

const Basket = (props) => {
  let typs ;
  let navigation = useNavigation();
  const hh = () => {
    props.type == "products" ? typs = "product" : typs = "basket";
    navigation.navigate('Cart', {name : 'Cart', productId: props.productId, type: typs})
  }
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={hh}
      style={styles.foodItem}
    >
      {/* <View style={styles.foodItem}> */}
        <View style={styles.foodItemImageWrapper}>
          <Image
            style={styles.foodItemImage}
            resizeMode="contain"
            source={{ uri: props.image }}
          />
        </View>
        <View style={styles.foodItemTitleWrapper}>
          <Text style={styles.foodItemTitle}>{props.title}</Text>
        </View>
      {/* </View> */}
    </TouchableOpacity>
  );
};

export default Basket;

const styles = StyleSheet.create({
  foodItem: {
    flexDirection: "column",
    // width: "31%",
    marginRight: 10
  },
  foodItemImage: {
    width: 100,
    height: 100
  },
  foodItemImageWrapper: {
    paddingVertical: 3,
    marginVertical: 4,
    borderRadius: 4,
    width: 100,
    height: 100,
    alignSelf: "center",
    backgroundColor: "#EDD0FF",
    overflow: "hidden"
  },
  foodItemTitleWrapper: {
    alignSelf: "center",
  },
  foodItemTitle: {
    fontSize: 15,
    color: "#000",
  },
});
