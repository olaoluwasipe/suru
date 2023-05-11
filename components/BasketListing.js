import React, {useState} from 'react';
import { View,Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import Category from './Category';
import Deal from './FoodCategory';
import baskets from '../baskets';


const Baskets = props => {
  let search = props.search.toLowerCase();
  let productsSearch = baskets.filter(basket => basket.name.toLowerCase().includes(search));
  return (
    <View>

<ScrollView
 overScrollMode='never'
 showsVerticalScrollIndicator={false}
>

    <View style={styles.categoryWrapper}>
      {baskets.map((i, v)=> (
          search == '' || i.name.toLowerCase().includes(search)  ? (
          <Deal key={i.id} productId={i.id} title={i.name} image={i.image} /> ) : ''
        )
      )}
      {
        productsSearch.length < 1 ? ( <Text>There are no baskets here associated with your search</Text>) : '' 
      }
      
    </View>
</ScrollView>
    </View>
  )
}

export default Baskets;

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
    flex: 2,
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