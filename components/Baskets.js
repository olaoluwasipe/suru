import React from "react";
import { View, Text, StyleSheet, ScrollView, FlatList, Dimensions } from "react-native";
import baskets from "../baskets";
import products from "../products";
import { useNavigation } from "@react-navigation/native";
import Basket from "./Basket";

const Baskets = (props) => {
  let navigation = useNavigation();
  let numberOfItems;
  let array = props.type == "baskets" ? baskets : products
  let windowWidth = Math.floor(Dimensions.get('window').width)
  if(windowWidth > 360){
    numberOfItems = 4;
  }else{
    numberOfItems = 6;
  }
  const pageTitle = props.type == "baskets" ? "Baskets" : "Products"
  const slicedArray = array.slice(0, numberOfItems);
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
          <Text style={styles.sectionTitleLeft}>{pageTitle}</Text>
          <Text onPress={() => navigation.navigate( props.type == "baskets" ? pageTitle : "Category", { name: props.type == "baskets" ? pageTitle : "Category" })} style={styles.sectionTitleRight}>see all</Text>
        </View>
      </View>
      <View style={styles.categoryWrapper}>
        <View style={{flexDirection: "row", flexWrap: "wrap"}}>
          {slicedArray.map((i, v)=> (
              <Basket key={i.id} productId={i.id} title={props.type == "baskets" ? i.name : i.title} image={props.type == "baskets" ? i.image : i.imgUrl} type={props.type} />
          ))}
        </View>
      </View>
    </View>
  );
};

export default Baskets;

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
