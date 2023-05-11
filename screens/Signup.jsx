import React, { useEffect, useState } from "react";
import { ScrollBack, LightMode, Arrow } from "../assets/icons/Icons";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import CustomStatusBar from "../components/CustomStatusBar";
import PhoneInput from "react-native-phone-number-input";
import { images } from "../constants";
import axios from "axios";
const url = "http://192.168.43.240:1025/api/user/signup";

console.log("hjjjkk;k;jh");
console.log("hjjjkk;k;jh");
console.log("hjjjkk;k;jh");
const Signup = ({ navigation }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  console.log(name);
  const handleSubmit = async () => {
    // e.preventDefault();
    try {
      const res = await axios.post(url, { data: {name : name} });
      console.log(res);
      console.log("hyhred");
    } catch (error) {
      console.log(error);
    }
  };

  const [disabled, setDisabled] = useState(true);

  const handleNameInput = (value) => {
    setName(value);
  };

  const handlePhoneNumberInput = (value) => {
    setPhoneNumber(value);
  };

  useEffect(() => {
    if (name.trim() && phoneNumber.trim()) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
    // alert(`${disbled}`)
  }, [name, phoneNumber]);

  // const handleSubmit = () => {
  //   if (!name || !phoneNumber) {
  //     return;
  //   }
  // };
  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{
          flex: 1,
          backgroundColor: "#fff",
        }}
      >
        <SafeAreaView style={styles.screenContainer}>
          <CustomStatusBar />
          {/* <ScrollView
      showsVerticalScrollIndicator={false}
      > */}
          <View
            style={{
              // flex:1,
              justifyContent: "flex-end",
              backgroundColor: "#fff",
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.arrowBackWrapper}
            >
              <Arrow onPress={() => navigation.goBack()} />
            </TouchableOpacity>
            <View style={styles.screenTitleWrapper}>
              <Text style={styles.screenTitle}>Sign Up</Text>
            </View>
            <View style={styles.SignupImageWrapper}>
              <Image
                style={styles.SignupImage}
                resizeMode="contain"
                source={images.signup_1}
              />
            </View>
            <View style={styles.formWrapper}>
              <TextInput
                cursorColor={"#000"}
                required={true}
                value={name}
                onChangeText={handleNameInput}
                style={{
                  minWidth: "100%",
                  backgroundColor: "#F3F3F3",
                  borderRadius: 5,
                  paddingHorizontal: 20,
                  paddingVertical: 14,
                  fontSize: 16,
                }}
                placeholder="Name Surname"
              /> 
              <PhoneInput
                defaultCode="NG"
                layout="first"
                onChangeText={handlePhoneNumberInput}
                containerStyle={{
                  // minWidth: 300,
                  width: '100%',
                  marginTop: 20,
                  backgroundColor: "#F3F3F3",
                  borderRadius: 5,
                  fontSize: 16,
                }}
                placeholder="Phone Number"
                withDarkTheme
                withShadow
                autoFocus
              />
            </View>
            <View style={styles.termsWrapper}>
              <Text style={styles.terms}>
                {" "}
                We need to verify you. We will send you a one time verification
                code.{" "}
              </Text>
            </View>
            <View
              style={[styles.buttonWrapper, disabled && styles.disabledButton]}
            >
              <TouchableOpacity
                style={styles.btnPrimaryWrapper}
                disabled={disabled}
                onPress={
                  () =>navigation.navigate("SignCode", { 
                    // screen: "signcode",
                     name,
                    phone: phoneNumber,
                
                })
                }
            
              >
                <Text style={styles.button}>Next</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.loginWrapper}>
              <Text style={styles.login}>Already have an account?</Text>
              <Pressable
                onPress={() => navigation.navigate("Login", { name: "log in" })}
              >
                <Text style={styles.loginLink}> Login</Text>
              </Pressable>
            </View>
          </View>
          {/* </ScrollView> */}
        </SafeAreaView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Signup;

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: "#Fff",
    flex: 1,
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 16,
  },
  arrowBackWrapper: {
    // marginBottom: 10,
  },
  screenTitleWrapper: {
    marginTop: 15,
    alignSelf: "center",
  },
  screenTitle: {
    fontSize: 28,
    fontWeight: "600",
    color: "#2A4905",
  },
  SignupImageWrapper: {
    alignSelf: "center",
  },
  SignupImage: {
    // width: '100%',
    maxWidth: 300,
  },
  formWrapper: {
    alignSelf: "center",
    marginTop: 10,
  },
  termsWrapper: {},
  terms: {
    color: "#7F4E1D",
    // maxWidth:270,
    fontSize: 16,
    marginTop: 20
  },
  buttonWrapper: {
    backgroundColor: "#2A4905",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 12,
    // marginBottom: 10,
    marginTop: 40,
  },
  button: {
    borderRadius: 30,
    alignSelf: "center",
    color: "#fff",
    fontSize: 24,
  },
  loginWrapper: {
    marginTop: 5,
    flexDirection: "row",
    alignSelf: "center",
  },
  login: {
    fontSize: 16,
    color: "#7F4E1D",
  },
  disabledButton: {
    backgroundColor: "#2A490580",
  },
  loginLink: {
    fontSize: 16,
    color: "#FF5E00",
  },
});
