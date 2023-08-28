
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Registaration from './Authentication/Registaration';
import Login from './Authentication/Login';
import ForgetPassword from './Authentication/ForgetPassword';

import Splash from './normal/Splash';
import Parent from './normal/Parent';

import Home from './tabs/Home';
import MainDrawer from './Common/MainDrawer';
import BottomTabs from './Common/BottomTabs';
import Contact from './Screen/Contact';

const stack = createStackNavigator();
const AppNavigator = () => {
    return (
        <NavigationContainer >
            <stack.Navigator 
          initialRouteName='Contact'
          
           >
                
                <stack.Screen
                    name="Splash"
                    component={Splash}
                    options={{ headerShown: false }}
                />
                <stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />
                <stack.Screen
                    name="Parent"
                    component={Parent}
                    options={{ headerShown: false }}
                />

                <stack.Screen
                    name="Registaration"
                    component={Registaration}
                    options={{ headerShown: false }}
                />
                <stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />
                <stack.Screen
                    name="ForgetPassword"
                    component={ForgetPassword}
                    options={{ headerShown: false }}
                />
               
                 <stack.Screen
                    name="MainDrawer"
                    component={MainDrawer}
                    options={{ headerShown: false }}
                /> 
                 <stack.Screen
                    name="Contact"
                    component={Contact}
                    options={{ headerShown: false }}
                /> 


            </stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;