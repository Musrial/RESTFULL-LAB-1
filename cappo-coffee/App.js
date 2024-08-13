import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import CartScreen from './screens/CartScreen';
import ProfileScreen from './screens/ProfileScreen';
import SignUpScreen from './screens/SignUpScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = ({ addToCart, addToFavorites, favoriteItems, cartItems, increaseItemQuantity, decreaseItemQuantity, removeFromFavorites }) => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Favorite') {
          iconName = focused ? 'heart' : 'heart-outline';
        } else if (route.name === 'Cart') {
          iconName = focused ? 'bag' : 'bag-outline';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'person' : 'person-outline';
        }

        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#D2691E',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: {
        paddingBottom: 5,
        paddingTop: 5,
        height: 60,
        borderTopWidth: 0,
        elevation: 0,
        backgroundColor: '#fff',
      },
      tabBarShowLabel: false,
    })}
  >
    <Tab.Screen name="Home">
      {(props) => <HomeScreen {...props} addToCart={addToCart} addToFavorites={addToFavorites} favoriteItems={favoriteItems} />}
    </Tab.Screen>
    <Tab.Screen name="Favorite">
      {(props) => <FavoriteScreen {...props} favoriteItems={favoriteItems} removeFromFavorites={removeFromFavorites} />}
    </Tab.Screen>
    <Tab.Screen name="Cart">
      {(props) => <CartScreen {...props} cartItems={cartItems} increaseItemQuantity={increaseItemQuantity} decreaseItemQuantity={decreaseItemQuantity} />}
    </Tab.Screen>
    <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
  </Tab.Navigator>
);

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);

  const addToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(cartItems.map(cartItem => 
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      ));
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const addToFavorites = (item) => {
    if (!favoriteItems.find(favoriteItem => favoriteItem.id === item.id)) {
      setFavoriteItems([...favoriteItems, item]);
    }
  };

  const removeFromFavorites = (item) => {
    setFavoriteItems(favoriteItems.filter(favoriteItem => favoriteItem.id !== item.id));
  };

  const increaseItemQuantity = (item) => {
    setCartItems(cartItems.map(cartItem =>
      cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    ));
  };

  const decreaseItemQuantity = (item) => {
    const updatedItems = cartItems.map(cartItem =>
      cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
    ).filter(cartItem => cartItem.quantity > 0);
    setCartItems(updatedItems);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Main" options={{ headerShown: false }}>
          {(props) => <MainTabs {...props} addToCart={addToCart} addToFavorites={addToFavorites} favoriteItems={favoriteItems} cartItems={cartItems} increaseItemQuantity={increaseItemQuantity} decreaseItemQuantity={decreaseItemQuantity} removeFromFavorites={removeFromFavorites} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
