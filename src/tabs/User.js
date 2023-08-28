import { View, Text } from 'react-native'
import React from 'react'
import BottomTabs from '../Common/BottomTabs';
import Header from '../Common/Header';

const User = ({navigation}) => {
  return (
    <View>
      <Header
        rightIcon={require('../images/Logoelibrary.png')}
        leftIcon={require('../images/menu.png')}
        onClickLeftIcon={() => {
          navigation.openDrawer();
        }}
      />
      <Text style={{alignItems:'center',justifyContent:'center'}}>User</Text>
    </View>
  );
};

export default User;