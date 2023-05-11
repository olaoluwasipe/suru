import React, { useEffect, useState } from "react";
import { ScrollBack, LightMode, Arrow } from "../assets/icons/Icons";
import { KeyboardAvoidingView, Pressable, StatusBar } from "react-native";
import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomStatusBar from "../components/CustomStatusBar";
import Input from "../components/inputWithIcon.js/Input";
import { images } from "../constants";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Wrapper from "../components/Wrapper";
const url = "http://192.168.43.240:1025/api/user/signup";
import axios from "axios";
import { handleSignUp } from "../assets/utils/auth";

const SignCode = ({ navigation, route }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (
      password.trim() &&
      confirmPassword.trim() &&
      password === confirmPassword
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [confirmPassword, password]);

  const handlePasswordInput = (value) => {
    setPassword(value);
  };

  const handleConfirmPasswordInput = (value) => {
    setConfirmPassword(value);
  };

  const signUpData = {
    ...route.params,
    password,
    confirm_password: confirmPassword,
  };

  const handleSubmit = async () => {
    // e.preventDefault();
   const res = await handleSignUp(signUpData);
   console.log(res);
  };

  console.log(route.params);
  return (
    <Wrapper>
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
          {/* NOT SO SURE MIGHT OVERFLOW ON OTHER SCREEN VERTICALLY */}
          {/* <ScrollView
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
      > */}
          {/* <ScrollView
      stickyHeaderIndices={[0]}
      // showsVerticalScrollIndicator={false}
      > */}
          <View
            style={{
              // flex:1,
              justifyContent: "flex-end",
              backgroundColor: "#fff",
            }}
          >
            <Pressable
              onPress={() => navigation.goBack()}
              style={styles.arrowBackWrapper}
            >
              <Arrow />
            </Pressable>
            <View style={styles.screenTitleWrapper}>
              <Text style={styles.screenTitle}>Sign Up</Text>
            </View>
            <View style={styles.SignupImageWrapper}>
              <Image
                style={styles.SignupImage}
                resizeMode="contain"
                source={images.signcode}
              />
            </View>
            <View style={styles.passwordFlowText}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "700",
                  color: "#000",
                  lineHeight: 24,
                  // paddingHorizontal: 20,
                  // marginVertical: 7,
                }}
              >
                Enter the password
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "400",
                  color: "rgba(0, 0, 0, 0.49)",
                  lineHeight: 16.17,
                  marginVertical: 7,
                }}
              >
                It looks like you already have an account in this number. Please
                enter the password to proceed.
              </Text>
            </View>
            <View style={styles.formWrapper}>
              <Input
                placeholder={"Password"}
                value={password}
                onChangeText={handlePasswordInput}
              />
              <Input
                placeholder={"Confirm Password"}
                value={confirmPassword}
                onChangeText={handleConfirmPasswordInput}
              />
            </View>
            <View
              style={[styles.buttonWrapper, disabled && styles.disabledButton]}
            >
              <TouchableOpacity
                disabled={disabled}
                style={styles.btnPrimaryWrapper}
                onPress={navigation.navigate("SignPass", { name: "signpass" })}
                // onPress={handleSubmit}
              >
                {console.log(signUpData)}
                <Text style={styles.button}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* </ScrollView> */}
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </Wrapper>
  );
};

export default SignCode;

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: "#Fff",
    flex: 1,
    paddingTop: 15,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  arrowBackWrapper: {},
  screenTitleWrapper: {
    alignSelf: "center",
  },
  screenTitle: {
    fontSize: 28,
    fontWeight: "600",
    color: "#2A4905",
  },
  passwordFlowText: {
    marginTop: 30,
    marginBottom: 10,
  },
  SignupImageWrapper: {
    alignSelf: "center",
  },
  SignupImage: {
    maxWidth: 300,
  },
  formWrapper: {},
  termsWrapper: {},
  terms: {
    color: "#7F4E1D",
    fontSize: 16,
  },
  buttonWrapper: {
    backgroundColor: "#2A4905",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 30,
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
  disabledButton: {
    backgroundColor: "#2A490580",
  },
});
