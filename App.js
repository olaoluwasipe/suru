import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AsyncStorage } from '@react-native-async-storage/async-storage';
// import Ionicon from 'react-native-vector-icons/Ionicons';  



// CONTROLS THE NAVIGATION FOR THE SIGNIN SIGNUP FLOW F 


// SCREENS IMPORT
import Welcome from './screens/Welcome';
import WelcomeVendor from './screens/WelcomeVendor';
import SignUp from './screens/Signup';
import Baskets from './screens/Baskets';
import Category from './screens/Category';
import Cart from './screens/Cart';
import CheckOut from './screens/CheckOut';
import Account from './screens/FeedBack';
// import ClientPost from './screens/Form';
import BillDetails from './screens/BillDetails';
import Restaurants from './screens/Restaurants';
import SellCategory from "./screens/SellCategory";
import ProductDetails from "./screens/ProductDetails";
import ClientPost from "./screens/ClientPost";
import VendorPage from './screens/sell';
import Sell from './screens/ProductDetails';
import Success from './screens/Success';
import Home from './screens/Home';
import SignPass from './screens/SignPass';
import { StyleSheet, Text, View, Image } from 'react-native';
import SignCode from './screens/SignCode';
import Login from './screens/Login';
import Profile from './screens/Profile';
import Orders from './screens/Orders';
import Search from './screens/Search';
import Form from './screens/Form';
import BasketView from './screens/BasketView';
// import Fruit from './screens/Fruit';
// import Orders from './screens/Contact';
import Address from './screens/MyAddress';
import Navigator from './Navigator';
import MyAddress from './screens/MyAddress';
import Contact from './screens/Contact';
import FeedBack from './screens/FeedBack';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#F5F5F5',
  }
}

// SCREEN NAMES
const HOME = 'home'
// const HOME  = 'home'
const EXPLORE = 'explore'
const SELL = 'sell'
const CART = 'cart'
const ACCOUNT = 'account';

const App = () => {
  return (
    <NavigationContainer theme={theme} >
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={"Welcome"}>
        <Stack.Screen name="Welcome" component={Welcome} options={{ title: 'welcome' }} />
        <Stack.Screen name="WelcomeVendor" component={WelcomeVendor} options={{ title: 'welcomeVendor' }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ title: 'signup' }} />
        <Stack.Screen name="Category" component={Category} options={{ title: 'category' }} />
        <Stack.Screen name="Baskets" component={Baskets} options={{ title: 'Baskets' }} />
        <Stack.Screen name="Restaurants" component={Restaurants} options={{ title: 'Restaurants' }} />
        <Stack.Screen name="BasketView" component={BasketView} options={{ title: 'BasketView' }} />
        <Stack.Screen name="Navigator" component={Navigator} options={{ title: 'navigator' }} />
        <Stack.Screen name="Profile" component={Profile} options={{ title: 'profile' }} />
        <Stack.Screen name="Orders" component={Orders} options={{ title: 'orders' }} />
        <Stack.Screen name="MyAddress" component={MyAddress} options={{ title: 'address' }} />
        <Stack.Screen name="Sell" component={Sell} options={{ title: 'sell' }} />
        <Stack.Screen name="VendorPage" component={VendorPage} options={{ title: 'VendorPage' }} />
        <Stack.Screen name="Success" component={Success} options={{ title: 'Success' }} />
        <Stack.Screen name="SellCategory" component={SellCategory} options={{ title: 'sell category' }} />
        <Stack.Screen name="FeedBack" component={FeedBack} options={{ title: 'feedback' }} />
        <Stack.Screen name="Cart" component={Cart} options={{ title: 'cart' }} />
        <Stack.Screen name="Search" component={Search} options={{ title: 'Search' }} />
        <Stack.Screen name="Form" component={Form} options={{ title: 'Form' }} />
        <Stack.Screen name="ClientPost" component={ClientPost} options={{ title: 'client post' }} />
        <Stack.Screen name="BillDetails" component={BillDetails} options={{ title: 'bill details' }} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} options={{ title: 'product details' }} />
        <Stack.Screen name="Contact" component={Contact} options={{ title: 'contact' }} />
        <Stack.Screen name="SignCode" component={SignCode} options={{ title: 'signcode' }}  />
        <Stack.Screen name='SignPass' component={SignPass} options={{ title: 'signpass' }} />
        <Stack.Screen name='Login' component={Login} options={{ title: 'login' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




export default App;
