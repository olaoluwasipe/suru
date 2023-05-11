import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Arrow } from "../assets/icons/Icons";
import { contactOptions } from "../assets/utils/accountOPtions";

const Contact = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#Fff",
        flex: 1,
        paddingTop: 40,
        paddingBottom: 50,
        // marginBottom: 300,
        paddingHorizontal: 26,
      }}
    >
      <View style={styles.topScreen}>
        <View style={styles.arrowBackWrapper}>
          <Arrow />
        </View>
        <View style={styles.screenTitleWrapper}>
          <Text style={styles.screenTitle}>contact us</Text>
        </View>
      </View>
      <View>
        {contactOptions.map((option) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate(`${option.component}`, {
                name: `${option.name}`,
              })
            }
            style={{
              flexDirection: "row",
              marginBottom: 30,
              alignItems: "center",
              borderBottomColor: "#00000038",
              borderBottomWidth: 1,
              paddingBottom: 10,
              // justifyContent: 'start',
            }}
          >
            <View>{option.icon}</View>
            <View
              style={{
                marginLeft: 17,
              }}
            >
              <Text
                style={{
                  color: "#000",
                  fontSize: 20,
                  fontWeight: "600",
                  textTransform: "capitalize",
                }}
              >
                {option.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};
export default Contact;


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
