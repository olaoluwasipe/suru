import React, {useEffect, useState} from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/Ionicons';
import { Arrow, Car, Line, Star } from "../assets/icons/Icons";
import RelatedProducts from "../components/RelatedProducts";
import Categories from "../components/CategoryListing";

import restaurants from "../restaurants";

const Restaurant = ({ navigation, route }) => {

  let product;


  product = restaurants[route.params.productId - 1]; 
  console.log(product)
    
  
  return (
    <ScrollView 
    overScrollMode="never"
    showsVerticalScrollIndicator={false}>
    <View
      style={{
        backgroundColor: "#Fff",
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 20,
      }}
    >
        <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.arrowBackWrapper}
            >
              <Arrow onPress={() => navigation.goBack()} />
            </TouchableOpacity>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            resizeMode="contain"
            // source={require("../assets/images/yam.png")}
            source={{uri: product.imgUrl}}
          />
        </View>
        <View style={styles.itemNameWrapper}>
          <Text style={styles.itemName}>{product.name}</Text>
        </View>
        <View style={styles.itemRatingsWrapper}>
          <View style={styles.itemRatings}>
            <View style={styles.itemRatingsLeft}>
              <View style={styles.starIcon}>
                <Star />
              </View>
              <View style={styles.itemRatingsRatioWrapper}>
                <Text style={styles.itemRatingsRatio}>{product.rating}</Text>
              </View>
              <View style={styles.itemRatingsTotalWrapper}>
                <Text style={styles.itemRatingsTotal}>70 ratings</Text>
              </View>
            </View>
            <View style={styles.itemRatingsMiddle}>
              <View style={styles.dividerIcon}>
                <Line />
              </View>
            </View>
            <View style={styles.itemRatingsRight}>
              <View style={styles.carIcon}>
                <Car />
              </View>
              <View style={styles.itemDeliveryWrapper}>
                <Text style={styles.itemDelivery}>Free delivery</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.itemDetailWrapper}>
          <Text style={styles.itemDetail}>
            {product.description}
          </Text>
        </View>
        <View>
          <Text style={{
            fontSize: 20,
          }}>{product.name} Products</Text>
          <Categories search="" />
        </View>
    </View>
    
    
      </ScrollView>
  );
};

export default Restaurant;

const styles = StyleSheet.create({
  imageWrapper: {
    backgroundColor: "#FFD600",
    paddingHorizontal: 26,
    paddingVertical: 8,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 20,
  },
  image: {
    alignSelf: "center",
    height: 300,
    width: "100%"
  },
  itemNameWrapper: {},
  itemName: {
    fontSize: 30,
    fontWeight: "600",
    color: "#000000",
    textTransform: "capitalize",
  },
  itemNameWrapper: {},
  itemName: {
    fontSize: 30,
    fontWeight: "600",
    color: "#000000",
    textTransform: "capitalize",
  },
  itemPriceWrapper: {},
  itemPrice: {
    fontSize: 30,
    fontWeight: "600",
    color: "#F47A0A",
    textTransform: "capitalize",
  },
  itemRatingsWrapper: {
    // maxWidth: 300,
    width: "100%",
    alignSelf: "center",
    // marginHorizontal: 'auto',
    marginVertical: 18,
  },
  dividerIcon: {
    marginHorizontal: 20,
  },
  starIcon: {
    marginRight: 5,
    verticalAlign: "",
  },
  carIcon: {
    marginRight: 5,
  },
  itemRatings: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderColor: "rgba(0, 0, 0, 0.17)",
    borderRadius: 10,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  itemRatingsLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemRatingsRight: {
    flexDirection: "row",
  },
  itemRatingsRatio: {
    fontSize: 18,
    marginRight: 10,
    fontWeight: "500",
  },
  itemRatingsTotal: {
    color: "#00000099",
  },
  itemDetailWrapper: {
    marginBottom: 18,
  },
  itemDetail: {
    lineHeight: 19,
    fontSize: 16,
    fontWeight: "400",
  },
  buttonWrapper: {
    marginBottom: 20,
    justifyContent: "center",
  },
  btnPrimaryWrapper: {
    width: "100%",
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: "#2A4905",
    paddingVertical: 10,
    alignSelf: "center",
    maxWidth: 200,
  },
  button: {
    alignSelf: "center",
    // borderRadius: 30,
    alignSelf: "center",
    color: "#fff",
    fontWeight: "700",
    fontSize: 20,
  },
});
