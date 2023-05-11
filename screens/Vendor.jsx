import React from 'react'
import { StyleSheet } from 'react-native';
import ExploreCategory from "../components/ExploreCategory";


const Vendor = () => {
  return (
    <ScrollView
    style={{
      backgroundColor: "#Fff",
      flex: 1,
      paddingTop: 40,
      paddingBottom: 50,
      paddingHorizontal: 16,
    }}
  >
    <View style={styles.topScreen}>
      <View style={styles.topScreenLeft}>
        <View style={styles.arrowBackWrapper}>
          <Arrow />
        </View>
        <View style={styles.screenTitleWrapper}>
          <Text style={styles.screenTitle}>Post New Product</Text>
        </View>
      </View>

      <View style={styles.topScreenRight}>
        <Text style={styles.clearForm}>clear</Text>
      </View>
      </View>
      <View style={styles.categoryWrapper}>
        <ExploreCategory />
        <ExploreCategory />
        <ExploreCategory />
        <ExploreCategory />
        <ExploreCategory />
        <ExploreCategory />
        <ExploreCategory />
        <ExploreCategory />
        <ExploreCategory />
        <ExploreCategory />
        <ExploreCategory />
        <ExploreCategory />
         <ExploreCategory /> 
         <ExploreCategory /> 
        <ExploreCategory />
        <ExploreCategory />
        <ExploreCategory />
      </View>

    </ScrollView>
  )
}

export default Vendor


const styles= StyleSheet.create({
    categoryWrapper: {
        // alignSelf: 'center',
        marginBottom: 10,
        flexDirection: "row",
        // paddingHorizontal: 20,
        width: '100%',
        flexWrap: "wrap",
        justifyContent: "space-between",
        //  overflow: 'scroll',
      },
})