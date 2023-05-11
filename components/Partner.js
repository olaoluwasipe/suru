import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
// import { Image } from 'react-native-svg';

const Partner = () => {
  return (
    <View>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>
          Partner with suru
        </Text>
      </View>

      <View style={styles.PartnerItemList}>

        <View style={styles.PartnerItem}>
          <View style={styles.PartnerItemImageWrapper}>
            <Image
              source={require('../assets/images/content-creator.png')}
              width='100'
              height='10000'
              resizeMode='contain'
              style={styles.PartnerItemImage} />
          </View>
          <View style={styles.PartnerItemTitleWrapper}>
            <Text style={styles.PartnerItemTitle}>content creator</Text>
          </View>
        </View>
        <View style={styles.PartnerItem}>
          <View style={styles.PartnerItemImageWrapper}>
            <Image
              source={require('../assets/images/content-creator.png')}
                           resizeMode='contain'
              style={styles.PartnerItemImage} />
          </View>
          <View style={styles.PartnerItemTitleWrapper}>
            <Text style={styles.PartnerItemTitle}>content creator</Text>
          </View>
        </View>
        <View style={styles.PartnerItem}>
          <View style={styles.PartnerItemImageWrapper}>
            <Image
              source={require('../assets/images/content-creator.png')}
              width='100'
              height='10000'
              resizeMode='contain'
              style={styles.PartnerItemImage} />
          </View>
          <View style={styles.PartnerItemTitleWrapper}>
            <Text style={styles.PartnerItemTitle}>content creator</Text>
          </View>
        </View>
        <View style={styles.PartnerItem}>
          <View style={styles.PartnerItemImageWrapper}>
            <Image
              source={require('../assets/images/content-creator.png')}
              width='100'
              height='10000'
              resizeMode='contain'
              style={styles.PartnerItemImage} />
          </View>
          <View style={styles.PartnerItemTitleWrapper}>
            <Text style={styles.PartnerItemTitle}>content creator</Text>
          </View>
        </View>
        <View style={styles.PartnerItem}>
          <View style={styles.PartnerItemImageWrapper}>
            <Image
              source={require('../assets/images/content-creator.png')}
              width='100'
              height='10000'
              resizeMode='contain'
              style={styles.PartnerItemImage} />
          </View>
          <View style={styles.PartnerItemTitleWrapper}>
            <Text style={styles.PartnerItemTitle}>content creator</Text>
          </View>
        </View>
       
      </View>

    </View>
  )
}

export default Partner;


const styles = StyleSheet.create({
  titleWrapper: {
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    color: '#000000',
    textTransform: 'capitalize',
    fontWeight: '700',
  },
  PartnerItem: {
    flexDirection: 'column',
    maxWidth: 50,
       // alignItems:  'flex-start',
    // justifyContent : 'flex-start' 
  },
  PartnerItemImageWrapper: {
    padding: 10,
    marginVertical: 4,
    borderRadius: 50,
    alignSelf: 'center',
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1.22,
    shadowRadius: 5.22,
    elevation: 5,
  },
  PartnerItemTitleWrapper: {
    alignSelf: 'center',

  },
  PartnerItemTitle: {
    textAlign: 'center',
    textTransform: 'capitalize'
  },PartnerItemList: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  }

})