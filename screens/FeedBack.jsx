import React from "react";
import { StyleSheet, Text } from "react-native";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Arrow } from "../assets/icons/Icons";

const FeedBack = ({navigation}) => {
  return (
    <SafeAreaView
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
        <View style={styles.arrowBackWrapper}>
          <Arrow />
        </View>
        <View style={styles.screenTitleWrapper}>
          <Text style={styles.screenTitle}>feedback</Text>
        </View>
      </View>

      <View
        style={{
          marginBottom: 10,
        }}
      >  
        <Text
          style={{
            fontSize: 25,
            fontWeight: "700",
          }}
        >
          Send us some Feedback
        </Text>
      </View>
      <View style={{
        padding: 10,
        borderColor: '#00000038',
        borderWidth: 1,
        height:200,
      }}>
        <Text style={{
          fontSize: 18,
          fontWeight: '400',
        }}>
          Please feel free to send us your comment, contributions and
          suggestions.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default FeedBack;

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
});
