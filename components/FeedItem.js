import React from 'react'
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Dimensions, Text, View } from 'react-native';
import feed from '../feed';
import { Star } from '../assets/icons/Icons';

const Deal = (props) => {
    let img = props.image ? props.image : 'https://www.namepros.com/attachments/empty-png.89209/';
    const title = props.title;
    const feedIt = feed[props.feedId];
    const navigation = useNavigation()
    return (
        <TouchableOpacity
        activeOpacity={.8}
        onPress={()=> 
                navigation.navigate('Cart', {name : 'Cart', productId: props.productId})
        }
        >
            <View style={styles.feedItem}>
                <View style={styles.feedItemImageWrapper}>
                    <Image
                        style={styles.feedItemImage}
                        width= {10}
                        resizeMode='cover'
                        source={{ uri: img }}
                    />
                </View>
                <View style={styles.feedItemTitleWrapper}>
                    <Text style={styles.feedItemTitle}>{title}</Text>
                </View>
                <View style={styles.feedItemBottom}>
                    <Text style={styles.feedItemDuration}>{props.duration}</Text>
                    <Text style={styles.feedItemTitle}><Star />{props.rating}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Deal;

const styles =  StyleSheet.create({

feedItem: {
    paddingVertical: 14,
    paddingHorizontal: 8,
    marginHorizontal: 6,
    marginVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
    minWidth: 140,
    width:  Math.round(Dimensions.get('window').width - 60),
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
feedItemImageWrapper: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    overflow: "hidden"
},
feedItemImage :{
    width: "100%",
    height: 200,
    alignSelf: "center"
},
feedItemTitleWrapper: {
    // alignSelf: 'center',
    padding: 10,
},
feedItemTitle: {
    fontSize: 20,
    fontWeight: '400',
    textTransform: 'capitalize',
    color: '#6D3805'
},
feedItemDuration: {
    fontSize: 20,
    fontWeight: '400',
    textTransform: 'capitalize',
    color: '#FFFFFF',
    backgroundColor: '#6D3805',
    padding: 5
},
feedItemBottom: {
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
}

}) 