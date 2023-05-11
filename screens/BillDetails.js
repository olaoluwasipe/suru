import React from "react";
import { ScrollBack, LightMode, Arrow } from "../assets/icons/Icons";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import ExploreCategory from "../components/ExploreCategory";
import CartItem from "../components/CartItem";
import Categories from "../components/CategoryListing";
import { SafeAreaView } from "react-native-safe-area-context";

const BillDetails = ({navigation}) => {
  return (
    <ScrollView
    overScrollMode="never"
    showsVerticalScrollIndicator={false}

    >

    <SafeAreaView
      style={{
        backgroundColor: "#Fff",
        flex: 1,
        paddingTop: 10,
        // paddingBottom: 50,
        // paddingHorizontal: 16,
      }}
      >
      <View
        style={{
          paddingHorizontal: 16,
        }}
        >
        <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.arrowBackWrapper}
            >
              <Arrow onPress={() => navigation.goBack()} />
            </TouchableOpacity>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Cart</Text>
        </View>
      </View>
      <View>
        <CartItem />
        <CartItem />
        <CartItem />
      </View>
      <View
        style={{
          paddingHorizontal: 16,
          marginTop: 15,
        }}
      >
      <View style={styles.billDetailsWrapper}>
        <View style={styles.billDetailsTitleWrapper}>
          <Text style={styles.billDetailsTitle}>Bill Details</Text>
        </View>
        <View style={styles.itemTotalDetails}>
          <View style={styles.itemTotalTextWrapper}>
            <Text style={styles.itemTotalText}>item total</Text>
          </View>
          <View style={styles.itemTotalWrapper}>
            <Text style={styles.itemTotal}>N1700</Text>
          </View>
        </View>
      
        <View style={styles.taxDetails}>
          <View style={styles.taxDetailsTextWrapper}>
            <Text style={styles.taxDetailsText}>tax and charges</Text>
          </View>
          <View style={styles.taxDetailsWrapper}>
            <Text style={styles.tax}>N50</Text>
          </View>
        </View>
        <View style={styles.orderTotalDetails}>
          <View style={styles.orderTotalTextWrapper}>
            <Text style={styles.orderTotalText} >order total</Text>
          </View>
          <View style={styles.orderTotalWrapper}>
            <Text style={styles.orderTotal}>N1750</Text>
          </View>
        </View>
        </View>
        <View style={styles.buttonWrapper}>
    <TouchableOpacity style={styles.btnPrimaryWrapper} onPress={() =>
                    navigation.navigate('SignPass', { name: 'signpass' })
                }>
        <Text style={styles.button}>checkout</Text>
        </TouchableOpacity>
    </View>
      </View>
    </SafeAreaView>
</ScrollView>
  );
};

export default BillDetails;

const styles = StyleSheet.create({
  header: {
    paddingTop: 10,
    paddingBottom: 15,
    alignSelf: "center",
  },
  headerTitle: {
    fontSize: 24,
    color: "#2A4905",
    fontWeight: "700",
    lineHeight: 28.8,
  },billDetailsWrapper:{
    backgroundColor: '#FF7300',
    padding: 13,
    borderRadius: 20,
  },
  billDetailsTitleWrapper:{
    marginBottom: 10
  },
  billDetailsTitle: {
    fontSize: 22,
    textTransform: 'capitalize',
    fontWeight: '700',
    color: '#fff',
    lineHeight: 26.4,
  },
  itemTotalDetails:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 7,
  },
  taxDetails:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 7,
    borderBottomWidth: 2,
    borderBottomColor: '#fff',
    paddingBottom: 8,

  },
  orderTotalDetails:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 7,
  },
  itemTotalText:{
    color: '#fff',
    fontSize: 18,
    fontWeight: '400',
    textTransform: 'capitalize',

  },
  taxDetailsText:{
    color: '#fff',
    fontSize: 18,
    fontWeight: '400',
    textTransform: 'capitalize',

  },
  itemTotal:{
    color: '#fff',
    fontSize: 18,
    fontWeight: '400',
    textTransform: 'capitalize',
  },
  tax:{
    color: '#fff',
    fontSize: 18,
    fontWeight: '400',
    textTransform: 'capitalize',
  },
  orderTotalText:{
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    textTransform: 'capitalize',

  },
  orderTotal:{
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    textTransform: 'capitalize',
  },
   buttonWrapper: {
    backgroundColor: '#2A4905',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 12,
    // marginBottom: 60,
    marginTop: 30,
},
button: {
    borderRadius: 30,
    alignSelf: 'center',
    color: '#fff',
    textTransform: 'capitalize',
    fontSize: 24,
},


});
