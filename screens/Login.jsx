import React, { useEffect, useState } from "react";
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
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../components/inputWithIcon.js/Input";
import CustomStatusBar from "../components/CustomStatusBar";
import ReactNativePhoneInput from "react-native-phone-input";
import PhoneInput from "react-native-phone-number-input";
import { images } from "../constants";
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { handleSigIn, handleSiginIn } from "../assets/utils/auth";
import users from "../user";

const url = "http://192.168.43.240:1025/api/user/login";

const Login = ({ navigation }) => {
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [disbled, setDisbled] = useState(true);

  const handleNumberInput = (value) => {
    setNumber(value);
    console.log(`${number}`);
  };

  const handlePasswordInput = (value) => {
    setPassword(value);
    console.log(`${password}`);
  };

  useEffect(() => {
    if (number.trim() && password.trim()) {
      setDisbled(false);
    } else {
      setDisbled(true);
    }
  }, [number, password]);

  const loginData = {
    phone: number,
    password,
  };

  const handleSubmit = async () => {
    try {
      const res = await handleSigIn(loginData);
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const saveData = () => {  
    let user =  users.filter(user => user.phone_number === number);
    AsyncStorage.setItem('user', JSON.stringify(user[0]));  
    navigation.navigate("Navigator", { name: "home" })
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
        <View
          style={{
            // flex:1,
            // justifyContent: 'flex-end',
            backgroundColor: "#fff",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.arrowBackWrapper}
          >
            <Arrow />
          </TouchableOpacity>
          {/* </ScrollView> */}
          <View style={styles.screenTitleWrapper}>
            <Text style={styles.screenTitle}>Sign In</Text>
          </View>
          <View style={styles.SignupImageWrapper}>
            <Image
              style={styles.SignupImage}
              resizeMode="contain"
              source={images.signin}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "400",
                color: "#000",
                marginTop: 0,
                lineHeight: 26,
              }}
            >
              Enter your phone number and password to access your account
            </Text>
          </View>
          <View style={styles.formWrapper}>    
            <PhoneInput
              defaultCode="NG"
              layout="first"
              // onChangeText={handleNumberInput}
              onChangeFormattedText={handleNumberInput}
              containerStyle={{
                minWidth: 300,
                width: '100%',
                backgroundColor: "#F3F3F3",
                borderRadius: 5,
                fontSize: 16,
              }}
              placeholder="Phone Number"
              withDarkTheme
              withShadow
              autoFocus
            />
            <Input
              placeholder={"Password"}
              value={password}
              onChangeText={handlePasswordInput}
            />
          </View>
          <View style={styles.resetWrapper}>
            <Text style={styles.reset}>Forget Password</Text>
          </View>
          <View
            style={[styles.buttonWrapper, disbled && styles.disabledButton]}
          >
            <TouchableOpacity
              title
              disabled={disbled}
              onPress={saveData}
            >
              <Text style={styles.button}>Sign In</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.loginWrapper}>
            <Text style={styles.login}>Don’t have an account?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("SignUp", { name: "signup" })}
            >
              <Text style={styles.loginLink}> Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: "#Fff",
    flex: 1,
    paddingTop: 15,
    paddingBottom: 15,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  arrowBackWrapper: {
    // marginBottom: 10,
    padding: 5,
  },
  screenTitleWrapper: {
    marginVertical: 16,
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
    // alignSelf: 'center',
    marginTop: 10,
  },
  termsWrapper: {},
  buttonWrapper: {
    backgroundColor: "#2A4905",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 12,
    // marginBottom: 100,
    marginBottom: 10,
    marginTop: 30,
  },
  button: {
    borderRadius: 30,
    alignSelf: "center",
    color: "#fff",
    // backgroundColor:'red',
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
  loginLink: {
    fontSize: 16,
    color: "#FF5E00",
  },
  resetWrapper: {
    marginTop: 5,
    marginRight: 20,
  },
  reset: {
    fontSize: 14,
    fontWeight: "400",
    color: "#FF5E00",
    textTransform: "capitalize",
    textAlign: "right",
  },
  disabledButton: {
    backgroundColor: "#2A490580",
  },
});
