import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet, Image } from "react-native";
import rice from "../assets/images/rice.png"
import { useNavigation } from "@react-navigation/native";

const Category = (props) => {
  let navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate("Category", { name: "Category", itemId: props.itemId })}
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

export default Category;

const styles = StyleSheet.create({
  foodItem: {
    flexDirection: "column",
    maxWidth: 100,
    marginRight: 10
  },
  foodItemImage: {
    width: 100,
    height: 100
  },
  foodItemImageWrapper: {
    paddingVertical: 3,
    marginVertical: 4,
    borderRadius: 50,
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
