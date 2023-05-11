import React from "react";
import { View, Text, StyleSheet, ScrollView, FlatList, Dimensions } from "react-native";
import restaurants from "../restaurants";
import { useNavigation } from "@react-navigation/native";
import Restaurant from "./Restaurant";

const Restaurants = (props) => {
  let navigation = useNavigation()
  let numberOfItems;
  let windowWidth = Math.floor(Dimensions.get('window').width)
  if(windowWidth > 360){
    numberOfItems = 4;
  }else{
    numberOfItems = 6;
  }
  const slicedArray = restaurants.slice(0, numberOfItems);
  const headerColor = props.headerColor ? props.headerColor : "#000";
  return (
    <View style={{
      marginBottom: 30
    }}>
      <View style={{
        marginTop: 0,
        marginBottom: 10,
        backgroundColor: headerColor
      }}>
        <View style={styles.sectionTitle}>
          <Text style={styles.sectionTitleLeft}>Restaurants</Text>
          <Text onPress={() => navigation.navigate("Restaurants", { name: "Restaurants" })} style={styles.sectionTitleRight}>see all</Text>
        </View>
      </View>
      <View style={styles.categoryWrapper}>
        <View style={{flexDirection: "row", flexWrap: "wrap"}}>
        {slicedArray.map((i, v)=> (
              <Restaurant key={i.id} restaurantId={i.id} title={i.name} image={i.imgUrl} />
            ))}
        </View>
      </View>
    </View>
  );
};

export default Restaurants;

const styles = StyleSheet.create({
  sectionTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  sectionTitleLeft: {
    fontSize: 16,
    color: "#6D3805",
    fontWeight: "400",
    lineHeight: 26.4,
    textTransform: "capitalize",
    color: "#fff"
  },
  sectionTitleRight: {
    fontSize: 16,
    color: "#FF5E00",
    textTransform: "capitalize",
    fontWeight: "400",
    lineHeight: 26.4,
    color: '#fff'
  },
  categoryWrapper: {
    flex: 3,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
});
