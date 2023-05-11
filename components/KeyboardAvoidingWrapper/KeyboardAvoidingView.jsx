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

const KeyboardAvoidingWrapper = ({ children }) => {
  return (
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
          {children}
        </View>
        {/* </ScrollView> */}
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidingWrapper;
