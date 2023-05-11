import React, {useEffect, useState} from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/Ionicons';
import { Arrow, Car, Line, Star } from "../assets/icons/Icons";
import RelatedProducts from "../components/RelatedProducts";
import products from "../products";
import Item from "../components/Item";
import CalcInput from "../components/CalcInput";

const Basket = ({ navigation, route }) => {
  const [addToBasket, setAddToBasket] = useState(false)
  const [addToC, setAddToC] = useState(false)
  const [amount, setAmount] = useState(1)

  const changeAmount = (amt) => {
    setAmount(amt)
  }

  const adder = ()=>{
    setAddToC(true)
    setAddToBasket(true)
  }

  const backTo = (re, num) => {
    setAddToBasket(re);
    setAddToC(re);
    setAmount(num)
  }
  const product = products[route.params.productId - 1];
  return (
    <ScrollView 
    overScrollMode="never"
    showsVerticalScrollIndicator={false}>
    <View
      style={{
        backgroundColor: "#Fff",
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 20,
      }}
    >
        <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.arrowBackWrapper}
            >
              <Arrow onPress={() => navigation.goBack()} />
            </TouchableOpacity>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            resizeMode="contain"
            // source={require("../assets/images/yam.png")}
            source={{uri: product.imgUrl}}
          />
        </View>
        <View style={styles.itemNameWrapper}>
          <Text style={styles.itemName}>{product.title}</Text>
        </View>
        <View style={styles.itemPriceWrapper}>
          <Text style={styles.itemPrice}>N{product.price * amount}</Text>
        </View>
        <View style={styles.itemRatingsWrapper}>
          <View style={styles.itemRatings}>
            <View style={styles.itemRatingsLeft}>
              <View style={styles.starIcon}>
                <Star />
              </View>
              <View style={styles.itemRatingsRatioWrapper}>
                <Text style={styles.itemRatingsRatio}>4.5</Text>
              </View>
              <View style={styles.itemRatingsTotalWrapper}>
                <Text style={styles.itemRatingsTotal}>70 ratings</Text>
              </View>
            </View>
            <View style={styles.itemRatingsMiddle}>
              <View style={styles.dividerIcon}>
                <Line />
              </View>
            </View>
            <View style={styles.itemRatingsRight}>
              <View style={styles.carIcon}>
                <Car />
              </View>
              <View style={styles.itemDeliveryWrapper}>
                <Text style={styles.itemDelivery}>Free delivery</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.itemDetailWrapper}>
          <Text style={styles.itemDetail}>
            {product.description}
          </Text>
        </View>
        {!addToC ? (
          <View style={styles.buttonWrapper}>
          <TouchableOpacity 
          activeOpacity={.8}
            style={styles.btnPrimaryWrapper}
            // onPress={() =>
            //   navigation.navigate("BillDetails", { name: "Bill Details" })
            // }
            onPress={adder}
          >
            <Text style={styles.button}>Add to Basket</Text>
          </TouchableOpacity>
        </View>
        ) : (
          <CalcInput item={product.id} changeAmount={changeAmount} initial={1} />
        )}
        <View>
          <RelatedProducts backTo={backTo} product={product} />
        </View>
    </View>
    {addToBasket? (
      <View style={{
      height: "100%",
      
      position: "absolute",
      width: "100%",
    }}>
    <TouchableOpacity onPress={() => setAddToBasket(false)} style={{
      backgroundColor: "#000",
      opacity: 0.4,
      height: "100%",
      width: "100%"
    }}>

    </TouchableOpacity>
      <View style={{
        width: "100%",
        backgroundColor: "#ffffff",
        height: "50%",
        position: "absolute",
        bottom: 0,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        padding: 20,
      }}>
        <View style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <Text style={{fontSize: 20}}>Select Options</Text>
          <Icon name="close-outline" onPress={() => setAddToBasket(false)} size={30} />
        </View>
        
        <Item item={product.id} />

        <TouchableOpacity style={{
          width: "100%",
          backgroundColor: "#FF7300",
          padding: 20,
          marginTop: 10,
          borderRadius: 14
        }} onPress={() => navigation.navigate('BillDetails', {name: "BillDetails"})}>
          <Text style={{textAlign: "center", textTransform: "uppercase", color: "#ffffff", fontSize: 18}}>Proceed With Order</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
          width: "100%",
          borderColor: "#FF7300",
          borderWidth: 3,
          padding: 20,
          marginTop: 10,
          borderRadius: 14
        }} onPress={() => setAddToBasket(false)}>
          <Text style={{textAlign: "center", textTransform: "uppercase", color: "#FF7300", fontSize: 18}}>Continue Shopping</Text>
        </TouchableOpacity>
      </View>
    </View>
    ) : ''}
    
      </ScrollView>
  );
};

export default Basket;

const styles = StyleSheet.create({
  imageWrapper: {
    backgroundColor: "#FFD600",
    paddingHorizontal: 26,
    paddingVertical: 8,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 20,
  },
  image: {
    alignSelf: "center",
    height: 300,
    width: "100%"
  },
  itemNameWrapper: {},
  itemName: {
    fontSize: 30,
    fontWeight: "600",
    color: "#000000",
    textTransform: "capitalize",
  },
  itemNameWrapper: {},
  itemName: {
    fontSize: 30,
    fontWeight: "600",
    color: "#000000",
    textTransform: "capitalize",
  },
  itemPriceWrapper: {},
  itemPrice: {
    fontSize: 30,
    fontWeight: "600",
    color: "#F47A0A",
    textTransform: "capitalize",
  },
  itemRatingsWrapper: {
    // maxWidth: 300,
    width: "100%",
    alignSelf: "center",
    // marginHorizontal: 'auto',
    marginVertical: 18,
  },
  dividerIcon: {
    marginHorizontal: 20,
  },
  starIcon: {
    marginRight: 5,
    verticalAlign: "",
  },
  carIcon: {
    marginRight: 5,
  },
  itemRatings: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderColor: "rgba(0, 0, 0, 0.17)",
    borderRadius: 10,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  itemRatingsLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemRatingsRight: {
    flexDirection: "row",
  },
  itemRatingsRatio: {
    fontSize: 18,
    marginRight: 10,
    fontWeight: "500",
  },
  itemRatingsTotal: {
    color: "#00000099",
  },
  itemDetailWrapper: {
    marginBottom: 18,
  },
  itemDetail: {
    lineHeight: 19,
    fontSize: 16,
    fontWeight: "400",
  },
  buttonWrapper: {
    marginBottom: 20,
    justifyContent: "center",
  },
  btnPrimaryWrapper: {
    width: "100%",
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: "#2A4905",
    paddingVertical: 10,
    alignSelf: "center",
    maxWidth: 200,
  },
  button: {
    alignSelf: "center",
    // borderRadius: 30,
    alignSelf: "center",
    color: "#fff",
    fontWeight: "700",
    fontSize: 20,
  },
});
