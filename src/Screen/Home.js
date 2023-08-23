import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, FlatList, TextInput } from 'react-native'
import React, { useState } from 'react'
import Header from './Common/Header';
import { ScrollView } from 'react-native-gesture-handler';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';


//for dropdown
const data = [{ label: 'Book', value: '1' },
{ label: 'Author', value: '2' },] //

const Home = ({ navigation }) => {

  //for dropdown
  // const [clicked, setClicked] = useState(false);
  // const [data, setData] = useState(books);
  // const [Selectedbooks, setSelectedbooks] = useState('BOOK');

  const [value, setValue] = useState(null);
   const [isFocus, setIsFocus] = useState(false);

  //git dropdown
  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'blue' }]}>
          Select your Choice
        </Text>
      );
    }
    return null;
  };//


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
        {/* for search n dropdown */}

        <View style={styles.mainDropNSearch}>
          {/* for dropdown */}

          {/* <View style={styles.dropdown}>
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

          // for search
          <View
            style={styles.searchView}>
            <TextInput placeholder='Search' style={styles.searchInput}></TextInput>
            //for search list
            <FlatList
              data={data}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity style={styles.bookitem}>

                  </TouchableOpacity>
                );
              }}

            />
          </View> */}


          {/* git code dropdown n search */}
           {renderLabel()} 
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Select item' : '...'}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
            }}
            renderLeftIcon={() => (
              <AntDesign
                style={styles.icon}
                color={isFocus ? 'blue' : 'black'}
                name="Safety"
                size={20}
              />
            )}
          />

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
    paddingLeft: 5,
    paddingRight: 10,
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
    // flex: 1,
    // flexDirection: 'row',
    // width: '100%',
    //height: Dimensions.get('window'),
    //alignItems: 'flex-start',
    //justifyContent: 'flex-start',
   // backgroundColor: '#fff',
   // marginTop: 5,
    padding:16,
  },

  // dropdownSelector: {
  //   width: '65%',
  //   height: 35,
  //   borderRadius: 10,
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  //   paddingLeft: 15,
  //   paddingRight: 25,
  //   backgroundColor: '#fff',

  // },
  // icon: {
  //   marginLeft: 8,
  //   width: 15,
  //   height: 15,
  // },
  // dropdown: {
  //   flex: 1,
  //   flexDirection: 'column',
  //   alignItems: 'flex-start'

  // },
  // viewflatlist: {
  //   elevation: 5,
  //   marginTop: 5,
  //   height: 85,
  //   width: '65%',
  //   backgroundColor: '#fff',
  //   borderRadius: 10,
  //   marginLeft: 5,
  //   padding: 5
  // },
  // dropflatlist: {
  //   width: '100%',
  //   alignSelf: 'center',
  //   height: 40,
  //   justifyContent: 'center',

  // },
  // searchView: {
  //   flex: 1.5,
  //   backgroundColor: '#fff',
  //   justifyContent: 'flex-end',
  //   width: '150%',
  //   alignItems: 'flex-start'

  // },
  // searchInput: {
  //   width: '100%',
  //   height: 35,
  //   borderRadius: 10,
  //   borderWidth: 0.7,
  //   margin: 5,
  //   paddingLeft: 10,
  //   paddingRight: 10,
  //   left: 0,
  //   top: 0,
  //   right: 0,
  //   position: 'absolute'
  // },
  // bookitem: {
  //   width: '100%',
  //   height: 50,
  //   borderBottomWidth: 0.2,
  //   borderBottomColor: '#8e8e8e',
  //   // alignSelf: 'center',
  //   position: 'absolute'
  // },

  //git code
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor:'#fff'
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    //color:'#000'
    backgroundColor: "#fff3cd",
   
    
  },
  placeholderStyle: {
    fontSize: 16,
    
  },
  selectedTextStyle: {
    fontSize: 16,
    color:'#000'
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color:'#000'
  },


});