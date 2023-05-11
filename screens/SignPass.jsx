import React, { useState } from "react";
import { ScrollBack, LightMode, Arrow } from "../assets/icons/Icons";
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
import CustomStatusBar from "../components/CustomStatusBar";
import { images } from "../constants";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
const url = "http://192.168.43.240:1025/api/user/signup";
import axios from 'axios';


const SignPass = ({ navigation }) => {

  const [otpCode, setOtpCode] = useState(676768);
  const handleSubmit = async ()=>{
    try {
      const res = await axios.post(url, {})
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <KeyboardAwareScrollView
    behavior={"padding"}
    enableOnAndroid={true}
    // extraScrollHeight={20}
    resetScrollToCoords={{ x: 0, y: 10000 }}
    // extraHeight={300}
    // enableAutomaticScroll={false}
    style={{
      backgroundColor: "#fff",
    }}
  >
      <SafeAreaView style={styles.screenContainer}>
        <CustomStatusBar />
        {/* <ScrollView
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
      > */}
        <View
          style={{
            justifyContent: "flex-end",
            backgroundColor: "#fff",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.arrowBackWrapper}
          >
            <Arrow />
          </TouchableOpacity>
          <View style={styles.screenTitleWrapper}>
            <Text style={styles.screenTitle}>Sign Up</Text>
          </View>
          <View style={styles.SignupImageWrapper}>
            <Image
              style={styles.SignupImage}
              resizeMode="contain"
              source={images.signpass}
            />
          </View>
          <View style={styles.otpGuide}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "700",
                color: "#000",
                lineHeight: 24,
              }}
            >
              Enter Verification Code
            </Text>
            <View
              style={{
                marginVertical: 14,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "500",
                  color: "#000",
                  lineHeight: 21.6,
                }}
              >
                We have sent SMS to:
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "500",
                  color: "#000",
                  lineHeight: 21.6,
                }}
              >
                {" "}
                081 XXX XXXX XXX
              </Text>
            </View>
          </View>
          <View style={styles.formWrapper}></View>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              style={styles.btnPrimaryWrapper}
              onPress={() => navigation.navigate("Login", { name: "login" })}
            >
              <Text style={styles.button}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* </ScrollView> */}
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default SignPass;

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: "#Fff",
    flex: 1,
    paddingTop: 15,
    // paddingBottom: 50,
    paddingHorizontal: 16,
  },
  arrowBackWrapper: {
    // marginBottom: 10,
  },
  screenTitleWrapper: {
    marginTop: 18,
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
  otpGuide: {
    marginTop: 20,
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
  },
  buttonWrapper: {
    backgroundColor: "#2A4905",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 40,
  },
  button: {
    borderRadius: 30,
    alignSelf: "center",
    color: "#fff",
    fontSize: 24,
  },
  loginWrapper: {
    flexDirection: "row",
    alignSelf: "center",
  },
  login: {
    fontSize: 16,
    color: "#7F4E1D",
  },
  loginLink: {
    fontSize: 16,
    color: "#FF5E00",
  },
});
