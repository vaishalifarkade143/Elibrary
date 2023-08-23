import { View, Text,Button, StyleSheet } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import Books from './Books';
import Contact from './Contact';
import About from './About';
import Login from './Login';
import CustomDrawer from './CustomDrawer';
const drawer = createDrawerNavigator();
const Main = () => {
  return (
    
    <drawer.Navigator 
      initialRouteName='Home'
      drawerContent={props => <CustomDrawer {...props}/>} 
      screenOptions={{headerShown:false,
        drawerActiveBackgroundColor: '#c07b7f',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
         
          fontFamily: 'Poppin',
          fontSize: 15,
          fontWeight:'800'
        },
      }}>
      <drawer.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }} />
      <drawer.Screen
        name="Books"
        component={Books}
        options={{ headerShown: false }} />
      <drawer.Screen
        name="Contact"
        component={Contact}
        options={{ headerShown: false }} />
      <drawer.Screen
        name="About"
        component={About}
        options={{ headerShown: false }} />
      <drawer.Screen
       name='Login'
       component={Login}
       options={{ headerShown: false }}
       />
    </drawer.Navigator>
  );
};

// const customDrawer = (props) =>{
//  return (

// )};

export default Main;

const styles = StyleSheet.create({
    
});