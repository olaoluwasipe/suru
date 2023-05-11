import React from "react";
import { ScrollBack, LightMode, Arrow } from "../assets/icons/Icons";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";
import ExploreCategory from "../components/ExploreCategory";
import Deals from "../components/CategoryListing";
import { SafeAreaView } from "react-native-safe-area-context";



const ClientPost  = () =>{
    return (
        <SafeAreaView
        showsVerticalScrollIndicator={false}
        bounces={false}
        style={{
          backgroundColor: "#Fff",
          flex: 1,
          paddingTop: 40,
          paddingBottom: 50,
          // marginBottom: 300,
          paddingHorizontal: 16,
        }}
      >
        <View style={styles.topScreen}>
          <View style={styles.topScreenLeft}>
            <View style={styles.arrowBackWrapper}>
              <Arrow />
            </View>
                      </View>
  
          <View style={styles.topScreenMiddle}>
            <Text style={styles.clientName}>Clement Merchandise</Text>
          </View>
          <View style={styles.topScreenRight}>
          <Image
            style={styles.logo}
            resizeMode="contain"
            source={require("../assets/images/dp.png")}
          />
          </View>
        </View>
        <Deals/>
       
        </SafeAreaView >
    )
}



export default ClientPost;



const styles =   StyleSheet.create({
    topScreen: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 50,
      },
      topScreenLeft: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
      screenTitleWrapper: {
        marginLeft: 15,
      },
      screenTitle: {
        fontSize: 15,
        fontWeight: "600",
        textTransform: "capitalize",
      },
      clearForm: {
        fontWeight: "600",
        fontSize: 15,
        textTransform: "capitalize",
      },
      categoryWrapper: {
        // alignSelf: 'center',
        marginBottom: 10,
        flexDirection: "row",
        // paddingHorizontal: 20,
        width: "100%",
        flexWrap: "wrap",
        justifyContent: "space-between",
        //  overflow: 'scroll',
      },
      clientName:{
        fontSize: 15,
        fontWeight: '600',
        
      }
})