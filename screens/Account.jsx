import React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Arrow, Profile } from "../assets/icons/Icons";
import { accountOptions } from "../assets/utils/accountOPtions";

const Account = ({navigation}) => {
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
          <Text style={styles.screenTitle}>Account</Text>
        </View>
      </View>
      <View>
      {accountOptions.map((option)=>(

        <TouchableOpacity onPress={() => navigation.navigate(`${option.component}`, {name: `${option.name}`})} style={{
          flexDirection:'row',
          marginBottom: 30,
          alignItems: 'center',
          // justifyContent: 'start',
        }}>
        <View>{option.icon}</View>
        <View style={{
          marginLeft: 17,
        }}><Text style={{
          color: '#000',
          fontSize: 20,
          fontWeight: '600',
          textTransform: 'capitalize',
        }}>{option.name}</Text></View>
        </TouchableOpacity>
        ))}
        </View>
        
    </SafeAreaView>
  );
};

export default Account;


const styles = StyleSheet.create({

  screenTitleWrapper:{
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 60,
  },
  screenTitle:{
    fontSize: 24,
    fontWeight: '700',
    color: '#2A4905',

  }
})