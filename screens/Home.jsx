import React from "react";
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Categories from "../components/Categories";
import Deals from "../components/CategoryListing";
import Navigator from "../components/Navigator";
import Partner from "../components/Partner";
import Wrapper from "../components/Wrapper";
import { StatusBar } from "expo-status-bar";
import Icon from 'react-native-vector-icons/Ionicons';
import data from "../data";
import Carousel from "../components/Carousel";
import { SearchIcon } from "../assets/icons/Icons";
import Baskets from "../components/Baskets";
import Restaurants from "../components/Restaurants";
import AsyncStorage from "@react-native-async-storage/async-storage";


const Home = ({ navigation }) => {
  const displayData = async ()=>{  
    try{  
      let user = await AsyncStorage.getItem('user');  
      console.log(user);  
    }  
    catch(error){  
      console.log(error)  
    }  
  } 
  const isCarousel = React.useRef(null)
  return (
    <ScrollView
      style={{
        backgroundColor: "#Fff",
        flex: 1,        
        paddingTop: 20,
        paddingBottom: 50,
      }}>
      
      <View style={styles.headerWrapper}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerLeftLocation}>ikeja</Text>
        </View>
        <View style={styles.headerRight}>
          <Image
            style={styles.logo}
            resizeMode="contain"
            source={require("../assets/images/suru-logo.png")}
          />
        </View>
      </View>

      <View
        style={{
          paddingHorizontal:20,
          paddingVertical: 10,
          backgroundColor: "#689b2d",
          flexDirection: "row",
          justifyContent: "space-between"
      }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Search", { name: "Search" })}   
          style={{
            flexDirection:"row",
            width: "80%",
            alignItems: "center"
        }}>
          <Icon name="search-outline" color="#fff" size={30} />
          <Text style={{
            color: "#fff",
            fontSize: 18,
            marginLeft: 30
          }}>Search Here</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("BillDetails", { name: "BillDetails" })}
          // onPress={saveData}
          style={{
            backgroundColor:"#3b5998",
            width: 45,
            height: 40,
            borderRadius: 3,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Icon name="cart-outline" color="#fff" style={{marginRight: 2}} size={25} />
        </TouchableOpacity>
      </View>

      <Carousel />

      
      <View style={styles.mainWrapper}>
        {/* <Partner /> */}
        <Categories headerColor="#FF1E4F" />
        <Baskets type="baskets" headerColor="#F44620" />
        <Restaurants headerColor="#FF0000" />
        <Baskets type="products" headerColor="#5BB60A" />
        {/* <Deals /> */}
      </View>
      {/* <Navigator /> */}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginVertical: 5,
  },
  headerLeftLocation: {
    fontSize: 18,
    fontWeight: "400",
    lineHeight: 21.6,
    color: "#3AA14C",
    textTransform: "capitalize",
  },
  mainWrapper: {
    marginTop: 0
  },
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
