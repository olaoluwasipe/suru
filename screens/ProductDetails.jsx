import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Arrow } from "../assets/icons/Icons";

const ProductDetails = ({navigation}) => {
  return (
    <ScrollView
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
        <View style={styles.topScreenLeft}>
          <View style={styles.arrowBackWrapper}>
            <Arrow />
          </View>
          <View style={styles.screenTitleWrapper}>
            <Text style={styles.screenTitle}>Post New Product</Text>
          </View>
        </View>

        <View style={styles.topScreenRight}>
          <Text style={styles.clearForm}>clear</Text>
        </View>
      </View>
      <View>
        <TextInput
          style={{
            // minWidth: 320,
            width: "100%",
            // backgroundColor: "#F3F3F3",
            borderWidth: 1,
            borderColor: "rgba(0, 0, 0, 0.47)",
            borderStyle: "solid",
            // borderRadius: 5,
            paddingHorizontal: 20,
            marginBottom: 15,

            paddingVertical: 14,
            fontSize: 16,
          }}
          placeholder="Vegetables"
        />
      </View>
      <View>
        <View>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "600",
              textTransform: "capitalize",
            }}
          >
            Add Photo
          </Text>
        </View>
        <View
          style={{
            // backgroundColor: "green",
            // paddingVertical: 2,
            // paddingHorizontal: 3,
            // width: 10,
            // borderRadius: 50,
            marginVertical: 12,
          }}
        >
          <Text
            style={{
              borderRadius: 90,
              backgroundColor: "green",
              paddingHorizontal: 10,width: '16%',
              paddingVertical: 5,
              fontSize: 34,
              color: "#fff",
              fontWeight: "400",
            }}
          >
            {" "}
            +{" "}
          </Text>
        </View>
        <View 
        style={{
          marginBottom: 15,

        }}>
          <Text 
             style={{
              fontSize: 12,
              fontWeight:'400',
              lineHeight: 10.8,
              marginBottom: 10,
              padding: 1,
              
            }}>Supported Format are <Text
            style={{
              fontSize: 12,
              fontWeight:'600',
              padding: 1,
              lineHeight: 10.8,
              
            }}
            >jpg and png</Text>  </Text>
          <Text    style={{
            padding: 1,
            fontSize: 12,
            fontWeight:'400',
            lineHeight: 10.8,
            
          }}>Picture must not exceed <Text    style={{
            fontSize: 12,
            padding: 1,
            fontWeight:'600',
            lineHeight: 10.8,
            
          }}>2mb</Text></Text>
        </View>
      </View>

      <View style={styles.form}>
        <TextInput
          style={{
            // minWidth: 320,
            width: "100%",
            // backgroundColor: "#F3F3F3",
            borderWidth: 1,
            borderColor: "rgba(0, 0, 0, 0.47)",
            borderStyle: "solid",
            // borderRadius: 5,
            paddingHorizontal: 20,
            marginBottom: 15,
            color: '#000',
            paddingVertical: 14,
            fontSize: 16,
          }}
          placeholder="Awesome fresh products"
        />
        <TextInput
          style={{
            // minWidth: 320,
            width: "100%",
            // backgroundColor: "#F3F3F3",
            borderWidth: 1,
            borderColor: "rgba(0, 0, 0, 0.47)",
            borderStyle: "solid",
            // borderRadius: 5,
            paddingHorizontal: 20,
            marginBottom: 15,

            paddingVertical: 14,
            fontSize: 16,
          }}
          placeholder="Get fresh and fantastic farm produce like vegetables 
            to keep you young and healthy"
        />
        <TextInput
          style={{
            // minWidth: 320,
            width: "100%",
            // backgroundColor: "#F3F3F3",
            borderWidth: 1,
            borderColor: "rgba(0, 0, 0, 0.47)",
            borderStyle: "solid",
            // borderRadius: 5,
            paddingHorizontal: 20,
            marginBottom: 15,

            paddingVertical: 14,
            fontSize: 16,
          }}
          placeholder="Lagos"
        />
        <TextInput
          style={{
            // minWidth: 320,
            width: "100%",
            // backgroundColor: "#F3F3F3",
            borderWidth: 1,
            borderColor: "rgba(0, 0, 0, 0.47)",
            borderStyle: "solid",
            // borderRadius: 5,
            paddingHorizontal: 20,
            marginBottom: 15,

            paddingVertical: 14,
            fontSize: 16,
          }}
          placeholder="Clement Merchandise"
        />
        <TextInput
          style={{
            // minWidth: 320,
            width: "100%",
            // backgroundColor: "#F3F3F3",
            borderWidth: 1,
            borderColor: "rgba(0, 0, 0, 0.47)",
            borderStyle: "solid",
            // borderRadius: 5,
            paddingHorizontal: 20,
            marginBottom: 15,

            paddingVertical: 14,
            fontSize: 16,
          }}
          placeholder="08122334455"
        />
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={styles.btnPrimaryWrapper}
          onPress={() => navigation.navigate("ClientPost", { name: "client post" })}
        >
          <Text style={styles.button}>Post</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  topScreen: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 40,
  },
  topScreenLeft: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  screenTitleWrapper: {
    marginLeft: 15,
  },
  screenTitle: {
    fontSize: 15,
    fontWeight: "600",
    textTransform: "capitalize",
  },
  clearForm: {
    fontWeight: "600",
    fontSize: 15,
    textTransform: "capitalize",
  },
  formWrapper: {
    marginHorizontal: 15,
  },
  buttonWrapper: {
    backgroundColor: "green",
    // marginHorizontal: 10,
    // borderRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 12,
    // marginBottom: 100,
    // marginBottom: 10,
    marginTop: 30,
    marginBottom: 60,
  },
  button: {
    // borderRadius: 30,
    alignSelf: "center",
    fontWeight: "600",
    color: "#fff",
    fontSize: 20,
  },
});
