import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import Books from './Books';
const drawer = createDrawerNavigator();
const Main = () => {
  return (
    <drawer.Navigator initialRouteName='Home'>
      <drawer.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }} />
      <drawer.Screen
        name="Books"
        component={Books}
        options={{ headerShown: false}} />
    </drawer.Navigator>
  );
};

export default Main;