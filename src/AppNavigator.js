import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Main from './Screen/Main';
import Registaration from './Screen/Registaration';

const stack  = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
        <stack.Navigator>
            <stack.Screen
                name="Main"
                component={Main}
                options={{headerShown:false}}
            />
            <stack.Screen
                name="Registaration"
                component={Registaration}
                options={{headerShown:false}}
            />

            
        </stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;