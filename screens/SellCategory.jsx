import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Arrow } from "../assets/icons/Icons";

const SellCategory = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.screenHeaderWrapper}>
        <View style={styles.ScreenHeader}>
          <View style={styles.arrowBackWrapper}>
            <Arrow />
          </View>
          <View style={styles.screenTitleWrapper}>
            <Text style={styles.screenTitle}>Search Category</Text>
          </View>
        </View>
      </View>
      <View style={styles.categoryList}>
        <TouchableOpacity activeOpacity={.8} onPress={()=>{
          return  navigation.navigate('ProductDetails', { name: 'product details'})
        }} style={styles.listWrapper
        }>
          <Text style={styles.listItem}>Vegetable</Text>
        </TouchableOpacity>
        <View style={styles.listWrapper}>
          <Text style={styles.listItem}>Vegetable</Text>
        </View>
        <View style={styles.listWrapper}>
          <Text style={styles.listItem}>Vegetable</Text>
        </View>
        <View style={styles.listWrapper}>
          <Text style={styles.listItem}>Vegetable</Text>
        </View>
        <View style={styles.listWrapper}>
          <Text style={styles.listItem}>Vegetable</Text>
        </View>
        <View style={styles.listWrapper}>
          <Text style={styles.listItem}>Vegetable</Text>
        </View>
        <View style={styles.listWrapper}>
          <Text style={styles.listItem}>Vegetable</Text>
        </View>
        <View style={styles.listWrapper}>
          <Text style={styles.listItem}>Vegetable</Text>
        </View>
        <View style={styles.listWrapper}>
          <Text style={styles.listItem}>Vegetable</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default SellCategory;

const styles = StyleSheet.create({
  screenHeaderWrapper: {
    backgroundColor: "green",
    flex: 1,
    paddingTop: 50,
    paddingBottom: 25,
    paddingHorizontal: 10,
  },
  ScreenHeader: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 12,
  },
  screenTitleWrapper: {
    marginLeft: 7,
  },
  screenTitle: {
    color: "#00000094",
    fontSize: 10,
    fontWeight: "600",
  },
  listItem: {
    // font-family: Urbanist;
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 24,
    textTransform: 'capitalize',
    letterSpacing: -0.16500000655651093,
    textAlign: 'left',
  },
  listWrapper:{
    paddingVertical: 20,
    paddingLeft: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#00000059',

  }
});
