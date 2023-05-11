import React from 'react'
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Dimensions, Text, View } from 'react-native'

const Deal = (props) => {
    let img = props.image ? props.image : 'https://www.namepros.com/attachments/empty-png.89209/';
    const title = props.title;
    const navigation = useNavigation()
    return (
        <TouchableOpacity
        activeOpacity={.8}
        onPress={()=> 
                navigation.navigate('Cart', {name : 'Cart', productId: props.productId, type: "product"})
        }
        >
            <View style={styles.foodItem}>
                <View style={styles.foodItemImageWrapper}>
                    <Image
                        style={styles.foodItemImage}
                        width= {10}
                        resizeMode='contain'
                        source={{ uri: img }}
                    />
                </View>
                <View style={styles.foodItemTitleWrapper}>
                    <Text style={styles.foodItemTitle}>{title}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Deal;

const styles =  StyleSheet.create({

foodItem: {
    paddingVertical: 14,
    paddingHorizontal: 8,
    marginHorizontal: 6,
    marginVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
    width:  Math.round(Dimensions.get('window').width / 2.4),
    backgroundColor: 'white',
    shadowColor: "black",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 1.22,
    shadowRadius: 35.22,
    elevation: 50,
},
foodItemImageWrapper: {

},
foodItemImage :{
    width: 120,
    height: 200,
    alignSelf: "center"
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