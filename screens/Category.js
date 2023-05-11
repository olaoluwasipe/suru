import React, {useState} from "react";
import Deals from "../components/CategoryListing";

import { ScrollView, TouchableOpacity, StyleSheet, Text, TextInput, View } from "react-native";
import { Arrow } from "../assets/icons/Icons";
import { SafeAreaView } from "react-native-safe-area-context";
import categories from '../category';

const Category = ({ navigation, route }) => {
  let cat_id = route.params.itemId
  const [category, setCategory] = useState(cat_id ? cat_id : 1);
  const [search, setSearch] = useState('')


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
          <Text style={styles.headerTitle}>{categories[category-1].name}</Text>
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
        overScrollMode="never"
        horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.subNav}>
          {categories.map((i, v)=> (
            i.id == category ? ( 
                <Text key={i.id} style={styles.subNavItem1} >{i.name}</Text>
              ) : 
              <Text key={i.id} onPress={e => setCategory(i.id)} style={styles.subNavItem} >{i.name}</Text>
            )
            )}
          </View>
        </ScrollView>
        </View>
        <View>
          <Deals category={category} search={search} />
        </View>
      {/* // </ScrollView> */}
    </SafeAreaView>
  );
};

export default Category;

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
  subNavItem: {
    marginRight: 15,
    textTransform: "capitalize",
    padding: 7,
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "500",
    color: "#804F1E",
  },
  subNavItem1: {
    marginRight: 15,
    textTransform: "capitalize",
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "500",
    padding: 8,
    borderBottomWidth: 2,
    borderBottomColor: "#FF5E00",
    borderTopLeftRadius: 93,
    borderBottomStartRadius: 3306,
    borderTopightRadius: 29,
  },
});
