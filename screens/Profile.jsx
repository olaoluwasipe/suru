import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Arrow } from '../assets/icons/Icons'
import { appSettingsOptions, profileOptions } from '../assets/utils/accountOPtions'

const Profile = () => {
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
        <Text style={styles.screenTitle}>Profile</Text>
      </View>
    </View>
    <View>
      {profileOptions.map((option)=>(

        <View style={{
          flexDirection:'row',
          marginBottom: 30,
          alignItems: 'center',
          // justifyContent: 'start',
        }}>
        <View>{option.icon}</View>
        <View style={{
          marginLeft: 17,
        }}><Text style={{
          color: '#000',
          fontSize: 20,
          fontWeight: '600',
          textTransform: 'capitalize',
        }}>{option.name}</Text></View>
        </View>
        ))}
        </View>

        <View style={{
          marginBottom: 20,
        }}>
          <Text style={{
            fontSize:28,
            color: '#FF5E00',
            textTransform: 'capitalize',
            fontWeight: '600',

          }}>App Settings</Text>
        </View>
        <View>
      {appSettingsOptions.map((option)=>(

        <View style={{
          flexDirection:'row',
          marginBottom: 30,
          alignItems: 'center',
          // justifyContent: 'start',
        }}>
        <View>{option.icon}</View>
        <View style={{
          marginLeft: 17,
        }}><Text style={{
          color: '#000',
          fontSize: 20,
          fontWeight: '600',
          textTransform: 'capitalize',
        }}>{option.name}</Text></View>
        </View>
        ))}
        </View>
    </ScrollView>
  )
}

export default Profile;


const styles= StyleSheet.create({
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
})