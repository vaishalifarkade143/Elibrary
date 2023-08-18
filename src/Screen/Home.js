import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import React from 'react'
import Header from './Common/Header';
import { ScrollView } from 'react-native-gesture-handler';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header
        rightIcon={require('../images/Logoelibrary.png')}
        leftIcon={require('../images/menu.png')}
        onClickLeftIcon={() => {
          navigation.openDrawer();
        }}
      />
      <ScrollView>
        <View style={styles.bannar}>
          <View >
            <Image
              source={require('../images/hero-brownElib.png')}
              style={styles.imagecontainer}
              resizeMode='contain'
            />
          </View>
          <View style={styles.text}>
            <Text style={styles.texth1}>Nagpur Digital Library</Text>
            <Text style={styles.texth2}>Serving You Millions of eResources | 24x7 | Everywhere</Text>
          </View>
          <View>

          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bannar: {
    height: 300,
    backgroundColor: "#fff3cd",
    flexDirection: 'row',
    paddingTop:15,
    padding: 10,
  },
  imagecontainer: {
    width: 140,
    height: '60%'
  },
  text: {
    flex:1,
    alignItems:'center',
    textAlign:'center'
    
    
  },
  texth1: {
    flexBasis:'auto',
    fontSize: 29,
    fontWeight: '800',
    color: '#2f4858',
    textAlign:'center',
    fontFamily:'Philosopher-Bold',

    
  },
  texth2: {
    fontSize: 14,
    fontWeight: '400',
    marginTop: 8,
    color: '#676768',
    textAlign:'center',
    fontFamily:'Poppin-Thin',
  }
});