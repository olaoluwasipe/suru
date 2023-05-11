import React from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import Category from "./Category";
import categories from "../category";
import { useNavigation } from "@react-navigation/native";

const Categories = (props) => {
  let navigation = useNavigation()
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
          <Text style={styles.sectionTitleLeft}>Categories</Text>
          <Text onPress={() => navigation.navigate("Category", { name: "Category" })} style={styles.sectionTitleRight}>see all</Text>
        </View>
      </View>
      <ScrollView horizontal>
        <View style={styles.categoryWrapper}>
        {categories.map((i, v)=> (
              <Category key={i.id} itemId={i.id} title={i.name} image={i.img} />
            ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Categories;

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
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
});
