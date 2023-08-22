import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, FlatList, TextInput } from 'react-native'
import React, { useState } from 'react'
import Header from './Common/Header';
import { ScrollView } from 'react-native-gesture-handler';
// import React, {useRef, useState} from 'react'


const books = [{ id: 1, name: "BOOK" }, { id: 2, name: "AUTHOR" }]
const Home = ({ navigation }) => {
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState(books);
  const [Selectedbooks, setSelectedbooks] = useState('BOOK');
  return (
    <View style={styles.container}>
      <Header
        rightIcon={require('../images/Logoelibrary.png')}
        leftIcon={require('../images/menu.png')}
        onClickLeftIcon={() => {
          navigation.openDrawer();
        }}
      />

      <View style={styles.bannar}>
        <View style={styles.mainImgNText}>
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
          </View >
        </View>
        {/* <TouchableOpacity style={styles.dropdownSelector}

            onPress={() => {
              setClicked(!clicked);
            }}>
            <Text style={{ fontWeight: '600', color: '#000' }}>
              {Selectedbooks == '' ? 'BOOK' : Selectedbooks}
            </Text>
            <Image
              source={require('../images/upload.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
          {clicked ? (
            <View
              style={styles.viewflatlist}>
              <TextInput placeholder='Search' style={styles.searchInput}></TextInput>
               <FlatList
                data={data}
                renderItem={({ item, index }) => {
                  return (
                    <TouchableOpacity style={styles.bookitem}>

                    </TouchableOpacity>
                  );
                }}

              /> 
              <FlatList
                data={data}
                renderItem={({ item }) => {
                  return (
                    <TouchableOpacity
                      style={styles.dropflatlist}
                      onPress={() => {
                        setSelectedbooks(item.name);
                        setClicked(!clicked);

                      }}>
                      <Text style={{ fontWeight: '600', color: '#000' }}>{item.name}</Text>
                    </TouchableOpacity>
                  );
                }}
              />

            </View>
          ) : null} */}


        <View style={styles.mainDropNSearch}>
          <View style={styles.dropdown}>
            <TouchableOpacity style={styles.dropdownSelector}

              onPress={() => {
                setClicked(!clicked);
              }}>
              <Text style={{ fontWeight: '600', color: '#000' }}>
                {Selectedbooks == '' ? 'BOOK' : Selectedbooks}
              </Text>
              <Image
                source={require('../images/upload.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
            
            {clicked ? (
              <View
                style={styles.viewflatlist}>

                <FlatList
                  data={data}
                  renderItem={({ item }) => {
                    return (
                      <TouchableOpacity
                        style={styles.dropflatlist}
                        onPress={() => {
                          setSelectedbooks(item.name);
                          setClicked(!clicked);

                        }}>
                        <Text style={{ fontWeight: '600', color: '#000' }}>{item.name}</Text>
                      </TouchableOpacity>
                    );
                  }}
                />

              </View>
            ) : null}
          </View>
        </View>
      </View>
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
    flexDirection: 'column',
    // paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 10,
    //padding: 10,
    justifyContent: 'center'
  },
  mainImgNText: {
    flexDirection: 'row',
    marginTop: 20,
    position: 'fixed'
  },
  imagecontainer: {
    width: 140,
    height: '60%'
  },
  text: {
    flex: 1,
    alignItems: 'center',
    textAlign: 'center',

  },
  texth1: {
    // marginTop: 5,
    flexBasis: 'auto',
    fontSize: 29,
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Philosopher-Bold',
  },
  texth2: {
    fontSize: 14,
    marginTop: 8,
    color: '#676768',
    textAlign: 'center',
    fontFamily: 'Poppin-Thin',
  },
  mainDropNSearch: {
    flex:1,
    flexDirection: 'row',
   // position: 'relative',
    alignItems:'flex-start',
    justifyContent:'flex-start'
    
  },
  dropdownSelector: {
    width: '30%',
    height: 35,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#fff',

  },
  icon: {
    marginLeft: 8,
    width: 15,
    height: 15,
  },
  dropdown: {
    flex: 1,
    flexDirection:'column',
    alignItems:'flex-start'

  },
  viewflatlist: {
    elevation: 5,
    marginTop: 5,
    height: 85,
    width: '30%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginLeft:5,
    padding:5
  },
  dropflatlist: {
    width: '100%',
    alignSelf: 'center',
    height: 40,
    justifyContent: 'center',

  },
  // searchInput: {
  //   width: '90%',
  //   height: 35,
  //   borderRadius: 10,
  //   borderWidth: 0.7,
  //   margin: 5,
  //   paddingLeft: 15,
  // },
  // bookitem: {
  //   width: '85%',
  //   height: 50,
  //   borderBottomWidth: 0.2,
  //   borderBottomColor: '#8e8e8e',
  //   alignSelf: 'center',

  // },
  

});