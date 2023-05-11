import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { View } from "react-native";
import { Arrow } from "../assets/icons/Icons";
import { SafeAreaView } from "react-native-safe-area-context";

const Form = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#Fff",
        flex: 1,
        paddingTop: 40,
        paddingBottom: 50,
        // marginBottom: 300,
        // paddingHorizontal: 16,
      }}
    >
      <View style={styles.topScreen}>
        <View style={styles.topScreenLeft}>
          <View style={styles.arrowBackWrapper}>
            <Arrow />
          </View>
          <View style={styles.screenTitleWrapper}>
            <Text style={styles.screenTitle}>Fill this form to register</Text>
          </View>
        </View>
      </View>

      <View style={styles.formWrapper}>
        <View style={styles.inputWrapper}>
          <View style={styles.labelWrapper}>
            <Text style={styles.label}>Restaurant Name</Text>
          </View>
          <TextInput
            style={{
              // minWidth: 320,
              width: "100%",
              // backgroundColor: "#F3F3F3",
              borderWidth: 1.3,
              borderColor: "#000",
              borderStyle: "solid",
              borderRadius: 1,
              paddingHorizontal: 15,
              marginBottom: 5,
              paddingVertical: 12,
              fontSize: 16,
            }}
            placeholder="Restaurant Name"
          />
        </View>
        <View style={styles.inputWrapper}>
          <View style={styles.labelWrapper}>
            <Text style={styles.label}>Account Manager Name</Text>
          </View>
          <TextInput
            style={{
              // minWidth: 320,
              width: "100%",
              // backgroundColor: "#F3F3F3",
              borderWidth: 1.3,
              borderColor: "#000",
              borderStyle: "solid",
              borderRadius: 1,
              paddingHorizontal: 15,
              marginBottom: 5,
              paddingVertical: 12,
              fontSize: 16,
            }}
            placeholder="Firstname Lastname"
          />
        </View>
        <View style={styles.inputWrapper}>
          <View style={styles.labelWrapper}>
            <Text style={styles.label}>Email</Text>
          </View>
          <TextInput
            style={{
              // minWidth: 320,
              width: "100%",
              // backgroundColor: "#F3F3F3",
              borderWidth: 1.3,
              borderColor: "#000",
              borderStyle: "solid",
              // borderRadius: 5,
              paddingHorizontal: 15,
              marginBottom: 1,
              paddingVertical: 12,
              fontSize: 16,
            }}
            placeholder="Vegetables"
          />
        </View>
        <View style={styles.inputWrapper}>
          <View style={styles.labelWrapper}>
            <Text style={styles.label}>Address</Text>
          </View>
          <TextInput
            style={{
              // minWidth: 320,
              width: "100%",
              // backgroundColor: "#F3F3F3",
              borderWidth: 1.3,
              borderColor: "#000",
              borderStyle: "solid",
              borderRadius: 1,
              paddingHorizontal: 15,
              marginBottom: 5,
              paddingVertical: 12,
              fontSize: 16,
            }}
            placeholder="Vegetables"
          />
        </View>
        <View style={styles.inputWrapper}>
          <View style={styles.labelWrapper}>
            <Text style={styles.label}>Phone number</Text>
          </View>
          <TextInput
            style={{
              // minWidth: 320,
              width: "100%",
              // backgroundColor: "#F3F3F3",
              borderWidth: 1.3,
              borderColor: "#000",
              borderStyle: "solid",
              borderRadius: 1,
              paddingHorizontal: 15,
              marginBottom: 5,
              paddingVertical: 12,
              fontSize: 16,
            }}
            placeholder="Vegetables"
          />
        </View>
      </View>

      <View
        style={{
          marginVertical: 10,

          paddingHorizontal: 16,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "500",
          }}
        >
          Verify you are not a robot:{" "}
        </Text>
        <View
          style={{
            marginVertical: 10,
          }}
        >
          <Image
            style={styles.logo}
            resizeMode="contain"
            source={require("../assets/images/suru-logo.png")}
          />
        </View>
      </View>

      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={styles.btnPrimaryWrapper}
          onPress={() => navigation.navigate("Success", { name: "Success" })}
        >
          <Text style={styles.button}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Form;

const styles = StyleSheet.create({
  topScreen: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  topScreenLeft: {
    flexDirection: "row",
    width: "70%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  screenTitleWrapper: {
    marginLeft: 15,
    alignSelf: "center",
  },
  screenTitle: {
    fontSize: 20,
    fontWeight: "600",
    textTransform: "capitalize",
  },
  formWrapper: {
    paddingHorizontal: 16,
    borderBottomColor: "gray",
    borderBottomWidth: 2,
  },
  labelWrapper: {
    marginBottom: 5,
  },
  label: {
    fontSize: 18,
    fontWeight: "600",
  },
  inputWrapper: {
    marginBottom: 15,
  },
  buttonWrapper: {
    backgroundColor: "#EB1D1D",
    marginHorizontal: 16,
    borderRadius: 5,
    paddingVertical: 20,
    paddingHorizontal: 12,
    // marginBottom: 100,
    // marginBottom: 10,
    marginTop: 30,
    // maxWidth: 100,
    marginBottom: 60,
    paddingHorizontal: 16,
  },
  button: {
    // borderRadius: 30,
    alignSelf: "center",
    fontWeight: "600",
    color: "#fff",
    fontSize: 20,
  },
});
