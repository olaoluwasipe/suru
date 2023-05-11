import React from "react";
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Arrow } from "../assets/icons/Icons";

const Success = ({navigation}) => {
  return (
    <View
      style={{
        backgroundColor: "#Fff",
        flex: 1,
        paddingTop: 40,
        paddingBottom: 50,
        // marginBottom: 300,
        paddingHorizontal: 36,
      }}
    >
      <View style={styles.successMessgaesWrapper}>
        <Text style={styles.successMessgaes}>
          You have successfully registered as a partner at <Text>Suru</Text>{" "}
        </Text>
      </View>
      <View>
        <Text style={{textAlign: "center", marginTop: 40}}>What to do next</Text>
        <View style={{marginTop: 10}}>
          <TouchableOpacity
            style={styles.buttonWrapper}
            onPress={() => navigation.navigate("Sell", { name: "Sell" })}
          >
            <Text style={styles.button}>Add a Product</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonWrapper}
            onPress={() => navigation.navigate("Sell", { name: "Sell" })}
          >
            <Text style={styles.button}>Make A Post (Get noticed)</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonWrapper}
            onPress={() => navigation.navigate("VendorPage", { name: "VendorPage" })}
          >
            <Text style={styles.button}>Go To Seller Page</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Success;

const styles = StyleSheet.create({
  successMessgaesWrapper: {
    backgroundColor: '#EB1D1D',
    paddingVertical: 60,
    borderRadius: 12,
    paddingHorizontal: 30,
    alignSelf: 'center',
    marginTop:'60%',
    maxWidth: 300,

  },
  successMessgaes: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
  buttonWrapper: {
    backgroundColor: "#EB1D1D",
    marginHorizontal: 16,
    borderRadius: 5,
    paddingVertical: 20,
    paddingHorizontal: 12,
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  button: {
    alignSelf: "center",
    fontWeight: "600",
    color: "#fff",
    fontSize: 20,
  },

});
