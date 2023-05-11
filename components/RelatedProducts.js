import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Category from "./Category";
import RelatedProduct from "./RelatedProduct";
import products from "../products";

const RelatedProducts = (props) => {
  let productsC = products.filter(product => product.category_id === props.product.category_id && product.id !== props.product.id);
  return (
    <>
      <View style={styles.sectionTitleWrapper}>
        <View style={styles.sectionTitle}>
          <Text style={styles.sectionTitleLeft}>Related Products</Text>
        </View>
      </View>
      <View style={styles.listWrapper}>
        <ScrollView
          horizontal={true}
          overScrollMode="never"
          showsHorizontalScrollIndicator={false}
        >
        {productsC.map((i, v) => (
          <RelatedProduct backTo={props.backTo} key={i.id} product={i} />
        ))}
        </ScrollView>
      </View>
    </>
  );
};

export default RelatedProducts;

const styles = StyleSheet.create({
  sectionTitleLeft: {
    fontSize: 20,
    fontWeight: "700",
    textTransform: "capitalize",
  },
  listWrapper: {
    marginBottom: 30,
    flexDirection: "row",
    // paddingHorizontal: 20,
    // flexWrap: 'wrap',
    alignItems: "center",
    justifyContent: "space-between",
    //  overflow: 'scroll',
  },
});
