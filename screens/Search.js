import React, {useState} from "react";

import { ScrollView, TouchableOpacity, StyleSheet, Text, TextInput, View } from "react-native";
import { Arrow } from "../assets/icons/Icons";
import { SafeAreaView } from "react-native-safe-area-context";
import categories from '../category';
import products from "../products";
import restaurants from "../restaurants";
import feed from "../feed";
import baskets from "../baskets";

const Search = ({ navigation, route }) => {
  let [search, setSearch] = useState('')
  return (
    <SafeAreaView
    style={{
      backgroundColor: "#Fff",
      // flex: 1,
      paddingTop: 40,
      paddingBottom: 50,
      paddingHorizontal: 16,
    }}  
     
    >
    {/* //   <ScrollView  */}

    {/* //   showsVerticalScrollIndicator={false} stickyHeaderIndices={[0]}> */}
        <View>
        <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.arrowBackWrapper}
            >
              <Arrow onPress={() => navigation.goBack()} />
            </TouchableOpacity>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Search</Text>
        </View>
        <View style={styles.formWrapper}>
          <TextInput
            style={{
              minWidth: "100%",
              backgroundColor: "#F3F3F3",
              borderRadius: 5,
              paddingHorizontal: 20,
              paddingVertical: 14,
              fontSize: 16,
            }}
            value={search}
            onChangeText={(search) => { setSearch( search ) }}
            placeholder="Search"
            />
            </View>
        <ScrollView
          style={{
            height: "100%"
          }}
          overScrollMode="never">
          {products.map((i, v)=> (
            search !== '' && i.title.toLowerCase().includes(search.toLowerCase()) ? (
            <TouchableOpacity onPress={()=> 
                navigation.navigate('Cart', {name : 'Cart', productId: i.id, type: "product"})
               }      style={styles.subNavItem1} key={i.id}>
              <Text style={{fontSize: 20, lineHeight: 24,}} >{i.title}</Text>
              <Text >- Product</Text>
            </TouchableOpacity>
            ) : ''
            ))}
            {categories.map((i, v)=> (
            search !== '' && i.name.toLowerCase().includes(search.toLowerCase()) ? (
            <TouchableOpacity 
              onPress={() => navigation.navigate("Category", { name: "Category", itemId: i.id })} style={styles.subNavItem1} key={i.id}>
              <Text style={{fontSize: 20, lineHeight: 24,}} >{i.name}</Text>
              <Text >- Category</Text>
            </TouchableOpacity>
            ) : ''
            ))}
            {baskets.map((i, v)=> (
            search !== '' && i.name.toLowerCase().includes(search.toLowerCase()) ? (
            <TouchableOpacity
              onPress={() => navigation.navigate('Cart', {name : 'Cart', productId: i.id, type: "basket"})} style={styles.subNavItem1} key={i.id}>
              <Text style={{fontSize: 20, lineHeight: 24,}} >{i.name}</Text>
              <Text >- Basket</Text>
            </TouchableOpacity>
            ) : ''
            ))}
            {feed.map((i, v)=> (
            search !== '' && i.title.toLowerCase().includes(search.toLowerCase()) ? (
            <TouchableOpacity style={styles.subNavItem1} key={i.id}>
              <Text style={{fontSize: 20, lineHeight: 24,}} >{i.title}</Text>
              <Text >- Post</Text>
            </TouchableOpacity>
            ) : ''
            ))}
        </ScrollView>
        </View>
        <View>
            
        </View>
      {/* // </ScrollView> */}
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  header: {
    paddingTop: 10,
    paddingBottom: 15,
    alignSelf: "center",
    textTransform: "capitalize",
  },
  headerTitle: {
    fontSize: 24,
    color: "#2A4905",
    fontWeight: "700",
    lineHeight: 28.8,
  },
  formWrapper: {
    marginBottom: 10,
  },
  categoryWrapper: {
    // alignSelf: 'center',
    marginBottom: 10,
    flexDirection: "row",
    // paddingHorizontal: 20,
    width: "100%",
    flexWrap: "wrap",
    justifyContent: "space-between",
    //  overflow: 'scroll',
  },
  subNav: {
    flexDirection: "row",
    marginVertical: 10,
  },
  subNavItem1: {
    flexDirection: "row",
    marginRight: 15,
    textTransform: "capitalize",
    alignItems: "center",
    padding: 8,
    borderBottomWidth: 2,
    borderBottomColor: "#FF5E00",
  },
});
