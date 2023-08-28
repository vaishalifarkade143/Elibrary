import { View, Text } from 'react-native'
import React from 'react'
import Header from '../Common/Header';
const Books = ({navigation}) => {
  return (
    <View>
       <View>
       <Header
        rightIcon={require('../images/Logoelibrary.png')}
        leftIcon={require('../images/menu.png')}
          onClickLeftIcon={() => {
          navigation.openDrawer();
        }}
      />
      <Text style={{alignItems:'center',justifyContent:'center'}}>Books</Text>
    </View>
    </View>
  );
};

export default Books;