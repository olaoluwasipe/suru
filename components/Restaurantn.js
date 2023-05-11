import React, {useState} from 'react';
import { View,Text, StyleSheet, ScrollView } from 'react-native';
import Category from './Category';
import RestaurantItem from './RestaurantItem';
import restaurants from '../restaurants';


const Restaurantn = props => {
  let search = props.search.toLowerCase();
  let productsSearch = restaurants.filter(product => product.name.toLowerCase().includes(search));
  return (
    <View>

<ScrollView
 overScrollMode='never'
 showsVerticalScrollIndicator={false}
>

    <View style={styles.categoryWrapper}>
      {restaurants.map((i, v)=> (
          search == '' || i.name.toLowerCase().includes(search)  ? (
          <RestaurantItem key={i.id} feedId={i.id} rating={i.rating} title={i.name} image={i.imgUrl} /> ) : ''
        )
      )}
      {
        productsSearch.length < 1 ? ( <Text>There are no restaurants here associated with your search</Text>) : '' 
      }
      
    </View>
</ScrollView>
    </View>
  )
}

export default Restaurantn;

const styles = StyleSheet.create({
  sectionTitleWrapper: {
    marginVertical: 20,
  },
  sectionTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionTitleLeft : {
    fontSize: 22,
    color: '#6D3805',
    fontWeight: '400',
    lineHeight: 26.4,
    textTransform: 'capitalize',
  },
  sectionTitleRight : {
    fontSize: 22,
    color: '#FF5E00',
    textTransform: 'capitalize',
    fontWeight: '400',
    lineHeight: 26.4
  },
  categoryWrapper: {
    flexDirection: 'row',
    marginBottom: 400,
    width: "100%",
    marginTop: 30,
    // paddingHorizontal: 20,
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
   //  overflow: 'scroll', 
   }

})