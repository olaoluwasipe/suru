import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";
import { useNavigation, useNavigationContainerRef } from "@react-navigation/native";

const RelatedProduct = (props) => {
    let productItem = props.product
    const navigation = useNavigation()
    const actBtn = () => {
        props.backTo(false, 1);
        navigation.navigate('Cart', {name : 'Cart', productId: productItem.id, type: "product"})
    }   
  return (
  <TouchableOpacity 
  onPress={actBtn}
  >
      <View style={styles.foodItem}>
                <View style={styles.foodItemImageWrapper}>
                    <Image
                        style={styles.foodItemImage}
                        width= {10}
                        resizeMode='contain'
                        source={{uri: productItem.imgUrl}}
                    />
                </View>
                <View style={styles.foodItemTitleWrapper}>
                    <Text style={styles.foodItemTitle}>{productItem.title}</Text>
                </View>
            </View>
  </TouchableOpacity>
  )
}

export default RelatedProduct;



const styles = StyleSheet.create({
    foodItem: {
        paddingVertical: 14,
        paddingHorizontal: 8,
        marginHorizontal: 6,
        marginVertical: 6,
        borderRadius: 20,
        alignSelf: 'flex-start',
        minWidth: 140,
        width:'50%',
                backgroundColor: '#FBDADC',
        // shadowColor: "black",
        // shadowOffset: {
        //   width: 0,
        //   height: 2,
        // },
        // shadowOpacity: 1.22,
        // shadowRadius: 35.22,
        // elevation: 50,
    },
    foodItemImageWrapper: {

    },
    foodItemImage :{
        width: 120,
        height: 100
    },
    foodItemTitleWrapper: {
    alignSelf: 'center',
        
    },
    foodItemTitle: {
        fontSize: 20,
        fontWeight: '400',
        textTransform: 'capitalize',
        color: '#6D3805'
    }
})