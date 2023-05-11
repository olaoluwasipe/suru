import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Arrow } from '../assets/icons/Icons';
import { images } from '../constants';

const Orders = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: "#Fff",
        flex: 1,
        paddingTop: 40,
        paddingBottom: 50,
        // marginBottom: 300,
        paddingHorizontal: 16,
      }}
    >
      <View style={styles.topScreen}>
        <View style={styles.arrowBackWrapper}>
          <Arrow />
        </View>
        <View style={styles.screenTitleWrapper}>
          <Text style={styles.screenTitle}>Orders</Text>
        </View>
      </View>
      <View style={{
        marginBottom: 10,
      }}>
      <Image
            style={styles.logo}
            resizeMode="contain"
            source={images.order}
          />
      </View>
      <View>
        <Text style={{
          alignSelf: 'center',
          fontSize: 18,
          fontWeight: '500',
        }}>There is no ongoing order right now.</Text>
      </View>
        </ScrollView>
  )
}

export default Orders;



const styles = StyleSheet.create({

  screenTitleWrapper:{
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 60,
  },
  screenTitle:{
    fontSize: 24,
    fontWeight: '700',
    color: '#2A4905',

  },
  logo:{
    alignSelf: 'center',
  }
})