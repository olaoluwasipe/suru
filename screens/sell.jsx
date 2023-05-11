import React from "react";
import { Button, ScrollView, StyleSheet, TextInput, TouchableOpacity, Dimensions, Image } from "react-native";
import { View, Text } from "react-native";
import { Arrow } from "../assets/icons/Icons";
import users from "../user";
import { vendorOptions } from "../assets/utils/accountOPtions";

const VendorPage = ({navigation}) => {
  console.log(vendorOptions)
  if(users[0].vendor === 0){
    navigation.navigate("WelcomeVendor", {name: "WelcomeVendor"})
  }
  return (
    <ScrollView
      style={{
        backgroundColor: "#Fff",
        flex: 1,
        paddingTop: 40,
        paddingBottom: 50,
        paddingHorizontal: 16,
      }}
    >
      <View style={styles.topScreen}>
        <View style={styles.topScreenLeft}>
          <View style={styles.arrowBackWrapper}>
            <Arrow />
          </View>
          <View style={styles.screenTitleWrapper}>
            <Text style={styles.screenTitle}>Vendor Page</Text>
          </View>
        </View>
      </View>

      <View style={styles.categoryWrapper}>
          {vendorOptions.map((option, i) => (
            
            <TouchableOpacity
            activeOpacity={.8}
            key={i}
            onPress={()=> 
                    navigation.navigate('Cart', {name : 'Cart', productId: props.productId, type: "product"})
            }
            >
                <View style={styles.foodItem}>
                    <View style={styles.foodItemImageWrapper}>
                        {option.icon}
                    </View>
                    <View style={styles.foodItemTitleWrapper}>
                        <Text style={styles.foodItemTitle}>{option.name}</Text>
                    </View>
                </View>
            </TouchableOpacity>))}
      </View>

      
    </ScrollView>
  );
};

export default VendorPage;

const styles = StyleSheet.create({
  topScreen: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },
  topScreenLeft: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  screenTitleWrapper: {
    marginLeft: 15,
  },
  screenTitle:{
    fontSize: 15,
    fontWeight: '600',
    textTransform: 'capitalize'
  },
  categoryWrapper: {
    flex: 2,
    flexDirection: 'row',
    marginBottom: 400,
    width: "100%",
    marginTop: 30,
    // paddingHorizontal: 20,
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
   //  overflow: 'scroll', 
   },
  foodItem: {
    paddingVertical: 14,
    paddingHorizontal: 8,
    marginHorizontal: 6,
    marginVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
    width:  Math.round(Dimensions.get('window').width / 2.4),
    backgroundColor: 'white',
    shadowColor: "black",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 1.22,
    shadowRadius: 35.22,
    elevation: 50,
},
foodItemImageWrapper: {
  alignItems: "center"
},
foodItemImage :{
    width: 120,
    height: 200,
    alignSelf: "center"
},
foodItemTitleWrapper: {
alignSelf: 'center',
    
},
foodItemTitle: {
    fontSize: 20,
    fontWeight: '400',
    textTransform: 'capitalize',
    color: '#6D3805'
}
});
