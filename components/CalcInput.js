import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";

const CalcInput = ({initial, changeAmount}) => {
  let initia = initial ? initial : 0
  const [calc, setCalc] = useState(initia)

  const addCalc = () => {
    let newNum = calc+1;
    setCalc(newNum)
    changeAmount(newNum)
  }

  const minusCalc = () => {
    if(calc > 0){
      let newNum = calc-1;
      setCalc(newNum)
      changeAmount(newNum)
    }
  }
  return (
        <View style={styles.CalcInputEdit}>
          <TouchableOpacity onPress={minusCalc} style={styles.CalcInputMinusWrapper}>
            <Text style={styles.CalcInputMinus}>-</Text>
          </TouchableOpacity>
          <View style={styles.CalcInputNumberWrapper}>
            <Text style={styles.CalcInputNumber}>{calc}</Text>
          </View>
          <TouchableOpacity onPress={addCalc} style={styles.CalcInputPlusWrapper}>
            <Text style={styles.CalcInputPlus}>+</Text>
          </TouchableOpacity>
        </View>
  );
};

export default CalcInput;

const styles = StyleSheet.create({
  CalcInput: {
    marginTop: 15,
    paddingHorizontal: 16,
    flexDirection: "row",
    paddingBottom: 12,
    justifyContent: "space-between",
    alignItems: "flex-end",
    borderBottomWidth: 2,
    borderBottomColor: "#6D380517",
  },
  CalcInputTitleWrapper: {
    marginBottom: 15,
  },
  CalcInputTitle: {
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 24,
    color: "#000",
  },
  CalcInputRight: {
    width: "50%",
  },
  cartItemImageWrapper: {
    width: "20%",
  },
  CalcInputPriceWrapper: {
    width: "20%",
  },
  CalcInputPrice: {
    textAlign: "right",
    fontSize: 20,
    fontWeight: "600",
    // alignSelf: 'baseline'
  },
  CalcInputEdit: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f4f4f4",
    borderRadius: 30,
    padding: 3,
    elevation: 4,
  },
  CalcInputMinusWrapper: {},
  CalcInputMinus: {
    borderRadius: 90,
    backgroundColor: "#fff",
    paddingHorizontal: 14,
    paddingVertical: 3,
    fontSize: 24,
    color: "#6D3805",
    fontWeight: "400",
    // lineHeight: 22,
  },
  CalcInputPlus: {
    borderRadius: 90,
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 3,
    fontSize: 24,
    color: "#6D3805",
    fontWeight: "400",
    // lineHeight: 22,
  },
  CalcInputNumber: {
    fontSize: 20,
    fontWeight: "500",
    color: "#6D3805",
  },
});
