import { View, Text } from 'react-native'
import React from 'react'

import MainDrawer from '../Common/MainDrawer';
import BottomTabs from '../Common/BottomTabs';

const Parent = () => {
  return (
    <View style={{flex:1}}>
        {/* drawer call */}
    <MainDrawer/>
    {/* <BottomTabs/> */}
    </View>
  )
}

export default Parent;