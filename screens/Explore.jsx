import React from "react";
import { ScrollBack, LightMode, Arrow } from "../assets/icons/Icons";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";
import Deals from "../components/CategoryListing";
import { SafeAreaView } from "react-native-safe-area-context";

const Explore = () => {
  return (
    // <ScrollView>

    <SafeAreaView
      style={{
        backgroundColor: "#Fff",
        flex: 1,
        paddingTop: 40,
        paddingBottom: 50,
        paddingHorizontal: 16,
      }}
    >
      <View style={styles.arrowBackWrapper}>
        <Arrow />
      </View>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Categories</Text>
      </View>
      <View style={styles.formWrapper}>
        <TextInput
          style={{
            minWidth: "100%",
            backgroundColor: "#F3F3F3",
            borderRadius: 5,
            paddingHorizontal: 20,
            paddingVertical: 14,
            fontSize: 16,
          }}
          placeholder="Search"
        />
      </View>
      <ScrollView>

      <View style={styles.categoryWrapper}>
      <Deals/>
      </View>
</ScrollView>
    </SafeAreaView>
            // {/* </ScrollView> */}
  );
};

export default Explore;

const styles = StyleSheet.create({
  header: {
    paddingTop: 10,
    paddingBottom: 15,
    alignSelf: "center",
  },
  headerTitle: {
    fontSize: 24,
    color: "#2A4905",
    fontWeight: "700",
    lineHeight: 28.8,
  },
  formWrapper: {
    marginBottom: 10,
  },
  categoryWrapper: {
    // alignSelf: 'center',
    marginBottom: 10,
    flexDirection: "row",
    // paddingHorizontal: 20,
    width: "100%",
    flexWrap: "wrap",
    justifyContent: "space-between",
    //  overflow: 'scroll',
  },
});
