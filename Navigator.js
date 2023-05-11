import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Ionicon from 'react-native-vector-icons/Ionicons';

// SCREENS IMPORT
import Welcome from "./screens/Welcome";
import SignUp from "./screens/Signup";
import Explore from "./screens/Explore";
import Feed from "./screens/Feed";
import Category from "./screens/Category";
import Cart from "./screens/Cart";
import CheckOut from "./screens/CheckOut";
import Account from "./screens/Account";
// import ClientPost from "./screens/Form";
import BillDetails from "./screens/BillDetails";

import Sell from './screens/sell';
// import Sell from "./screens/Sell";
import Home from "./screens/Home";
import SignPass from "./screens/SignPass";
import { StyleSheet, Text, View, Image } from "react-native";
import SignCode from "./screens/SignCode";
import Login from "./screens/Login";

import React from 'react'


// CONTROLS THE TAB  FLOW IN THE HOME PAGE

// SCREEN NAMES
const HOME = 'home'
// const HOME  = 'home'
const FEED = 'feed'
const SELL = 'sell'
const CART = 'cart'
const ACCOUNT = 'account'




const Tab = createBottomTabNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#F5F5F5',
  }
}


const Navigator = () => {
  return (
  
        <Tab.Navigator
        // screenOptions={{ headerShown: false }}
        initialRouteName={HOME}
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarHideOnKeyboard:true,
          tabBarStyle: { 
              borderColor: '#E9E9E9',
            // elevation: 0,
            // borderColor: 'none',
            paddingVertical: 10,
            paddingBottom: 20,
            // position: '',
            height: 70,
            // backgroundColor: 'red',
            // marginVertical: 10,
            borderTopRightRadius: 40,
            borderTopLeftRadius: 40,

          },
          // tabBarActiveTintColor: 'white',
          tabBarLabelStyle: {
              color: 'red',
              fontSize : 14,
              textTransform: 'capitalize'
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === HOME) {
              iconName = focused ? <Image
                width={10}
                resizeMode='contain'
                source={require('./assets/images/shop-focused.png')}
              /> : <Image
                width={10}
                resizeMode='contain'
                source={require('./assets/images/shop-outline.png')}
              />
            } else if (rn === FEED) {
              iconName = focused ? <Image
                width={10}
                resizeMode='contain'
                source={require('./assets/images/explore-focused.png')}
              /> : <Image
                width={10}
                resizeMode='contain'
                source={require('./assets/images/explore-outline.png')}
              />

            }
            else if (rn === SELL) {
              iconName = focused ? <Image
                width={10}
                resizeMode='contain'
                source={require('./assets/images/sell-focused.png')}
              /> : <Image
                width={10}
                resizeMode='contain'
                source={require('./assets/images/sell-outline.png')}
              />
            } else if (rn === CART) {
              iconName = focused ? <Image
                width={10}
                resizeMode='contain'
                source={require('./assets/images/cart-focused.png')}
              /> : <Image

                width={10}
                resizeMode='contain'
                source={require('./assets/images/cart-outline.png')}
              />
            }
            else if (rn === ACCOUNT) {
              iconName = focused ? <Image
                width={10}
                resizeMode='contain'
                source={require('./assets/images/user-focused.png')}
              /> : <Image
                width={10}
                resizeMode='contain'
                source={require('./assets/images/user.png')}
              />
            }

            // }
            return iconName;
          }
        })}
      >
        <Tab.Screen name={HOME} component={Home} />
        <Tab.Screen name={FEED} component={Feed} options={{ title: 'feed' }} />
        <Tab.Screen name={SELL} component={Sell} options={{ title: 'sell' }} />
        <Tab.Screen name={CART} component={BillDetails} options={{ title: 'cart' }} />
        <Tab.Screen name={ACCOUNT} component={Account} options={{ title: 'account' }} />

      </Tab.Navigator>
  )
}

export default Navigator
