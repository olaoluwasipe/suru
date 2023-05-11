import React from "react";
import { ScrollView, Text } from "react-native";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Arrow } from "../assets/icons/Icons";

const MyAddress = () => {
  return (
    <View
      style={{
        backgroundColor: "#Fff",
        position: "relative",
        flex: 1,
        paddingTop: 40,
        paddingBottom: 50,
        // marginBottom: 300,
        paddingHorizontal: 16,
      }}
    >
      <View style={styles.topScreen}>
        <View style={styles.arrowBackWrapper}>
          <Arrow />
        </View>
        <View style={styles.screenTitleWrapper}>
          <Text style={styles.screenTitle}>my Address</Text>
        </View>
      </View>

      <View
        style={{
          // height: '/50%',
          // flex: 0,
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            padding: 20,
            borderRadius: 20,
            backgroundColor: "#FE5E0012",
          }}
        >
          <Text
            style={{
              fontSize: 23,
              fontWeight: "400",
              alignSelf: "center",
            }}
          >
            No 30 Adeniyi Jones, Ikeja, Lagos state. Nigeria
          </Text>
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={styles.btnPrimaryWrapper}
          onPress={() => navigation.navigate("SignUp", { name: "signup" })}
        >
          <Text style={styles.button}>add new addres</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyAddress;

const styles = StyleSheet.create({
  screenTitleWrapper: {
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 30,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#2A4905",
    textTransform: "capitalize",
  },
  buttonWrapper: {
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    backgroundColor: "#2A4905",
    borderRadius: 20,
    paddingVertical: 10,
    width: '100%', 
    paddingHorizontal: 12,
    // marginBottom: 100,
    marginBottom: 20,
    // marginTop: 30,/
  },
  button: {
    color: "#fff",
    alignSelf: 'center',
    textTransform: 'capitalize',
    fontSize: 25,
    fontWeight: '700',

  },
});
