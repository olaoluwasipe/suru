import React, {useState} from 'react';
import { View,Text, StyleSheet, ScrollView } from 'react-native';
import Category from './Category';
import FeedItem from './FeedItem';
import feed from '../feed';


const Feeding = props => {
  let search = props.search.toLowerCase();
  let productsC = feed.filter(product => product.category_id === props.category);
  let productsSearch = feed.filter(product => product.category_id === props.category && product.title.toLowerCase().includes(search));
  return (
    <View>

<ScrollView
 overScrollMode='never'
 showsVerticalScrollIndicator={false}
>

    <View style={styles.categoryWrapper}>
      {feed.map((i, v)=> (
          search == '' || i.title.toLowerCase().includes(search)  ? (
          <FeedItem key={i.id} feedId={i.id} rating={i.rating} duration={i.duration} title={i.title} image={i.imgUrl} /> ) : ''
        )
      )}
      {productsC.length < 1 ? ( <Text>There are no posts in this category</Text>) : (
        productsSearch.length < 1 ? ( <Text>There are no posts here associated with your search</Text>) : '' )
      }
      
    </View>
</ScrollView>
    </View>
  )
}

export default Feeding;

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