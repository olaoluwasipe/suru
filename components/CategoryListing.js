import React, {useState} from 'react';
import { View,Text, StyleSheet, ScrollView } from 'react-native';
import Category from './Category';
import Deal from './FoodCategory';
import products from '../products';


const Categories = props => {
  let search = props.search.toLowerCase();
  let productsC = products.filter(product => product.category_id === props.category);
  let productsSearch = products.filter(product => product.category_id === props.category && product.title.toLowerCase().includes(search));
  return (
    <View>

<ScrollView
 overScrollMode='never'
 showsVerticalScrollIndicator={false}
>

    <View style={styles.categoryWrapper}>
      {products.map((i, v)=> (
        i.category_id == props.category || !props.category ? (
          search == '' || i.title.toLowerCase().includes(search)  ? (
          <Deal key={i.id} productId={i.id} title={i.title} image={i.imgUrl} /> ) : ''
        ) : "" )
      )}
      {productsC.length < 1 ? ( <Text>There are no products in this category</Text>) : (
        productsSearch.length < 1 ? ( <Text>There are no products here associated with your search</Text>) : '' )
      }
      
    </View>
</ScrollView>
    </View>
  )
}

export default Categories;

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