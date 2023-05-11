import React, {useState} from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import CalcInput from "./CalcInput";
import products from "../products";

const CartItem = (props) => {
  const [amount, setAmount] = useState(1)
  const product = products[props.item ? props.item -1 : 0];

  const changeAmount = (amt) => {
    setAmount(amt)
  }
  return (
    <View style={styles.CartItem}>
      <View style={styles.cartItemImageWrapper}>
        <Image
          style={styles.cartItemImage}
          width={10}
          resizeMode="contain"
          source={{uri: product.imgUrl}}
        />
      </View>
      <View style={styles.CartItemRight}>
        <View style={styles.CartItemTitleWrapper}>
          <Text style={styles.CartItemTitle}>{product.title}</Text>
        </View>
        <CalcInput changeAmount={changeAmount} initial={amount} />
      </View>
      <View style={styles.CartItemPriceWrapper}>
        <Text style={styles.CartItemPrice}>N{product.price * amount}</Text>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  CartItem: {
    marginTop: 15,
    paddingHorizontal: 16,
    flexDirection: "row",
    paddingBottom: 12,
    justifyContent: "space-between",
    alignItems: "flex-end",
    borderBottomWidth: 2,
    borderBottomColor: "#6D380517",
  },
  CartItemTitleWrapper: {
    marginBottom: 15,
  },
  CartItemTitle: {
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 24,
    color: "#000",
  },
  CartItemRight: {
    width: "50%",
  },
  cartItemImage: {
    width: 100,
    height: 100,
  },
  cartItemImageWrapper: {
    width: "20%",
  },
  CartItemPriceWrapper: {
    width: "20%",
  },
  CartItemPrice: {
    textAlign: "right",
    fontSize: 20,
    fontWeight: "600",
    // alignSelf: 'baseline'
  },
  CartItemEdit: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f4f4f4",
    borderRadius: 30,
    padding: 3,
    elevation: 4,
  },
  CartItemMinusWrapper: {},
  CartItemMinus: {
    borderRadius: 90,
    backgroundColor: "#fff",
    paddingHorizontal: 14,
    paddingVertical: 3,
    fontSize: 24,
    color: "#6D3805",
    fontWeight: "400",
    // lineHeight: 22,
  },
  CartItemPlus: {
    borderRadius: 90,
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 3,
    fontSize: 24,
    color: "#6D3805",
    fontWeight: "400",
    // lineHeight: 22,
  },
  CartItemNumber: {
    fontSize: 20,
    fontWeight: "500",
    color: "#6D3805",
  },
});
