import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import Contact from '../Screen/Contact';
import About from '../Screen/About';
import Login from '../Authentication/Login';
import CustomDrawer from '../CustomComponent/CustomDrawer';

import BottomTabs from './BottomTabs';
import Terms from '../Screen/Terms';
import PrivacyPolicy from '../Screen/PrivacyPolicy';
import Disclaimer from '../Screen/Disclaimer';
import Parent from '../normal/Parent';

const drawer = createDrawerNavigator();
const MainDrawer = () => {
  return (
    

    <drawer.Navigator 
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#c07b7f',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {

          fontFamily: 'Poppin',
          fontSize: 15,
          fontWeight: '800',
        },
      }}>
     
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
      {/* <drawer.Screen
        name="Home"
        component={BottomTabs}
        options={{ headerShown: false }}
      /> */}
      <drawer.Screen
        name="Terms"
        component={Terms}
        options={{ headerShown: false }}
      />
      <drawer.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicy}
        options={{ headerShown: false }}
      />
      <drawer.Screen
        name="Disclaimer"
        component={Disclaimer}
        options={{ headerShown: false }}
      />
<View style={{justifyContent:'center'}}>Drawer</View>
    </drawer.Navigator>
  );
};

export default MainDrawer;

