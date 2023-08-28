


import { View, Text, StyleSheet, Image, TouchableOpacity ,Keyboard} from 'react-native'
import React, { useState,useEffect } from 'react'
import Home from '../tabs/Home';
import Search from '../tabs/Search';
import User from '../tabs/User';
import Books from '../tabs/Books';
import About from '../Screen/About';




const BottomTabs = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [isKeyboardVisible,setIsKeyboardVisible]=useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setIsKeyboardVisible(true);
            },
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setIsKeyboardVisible(false);
            },
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);
    return (
        <View style={styles.container}>
          {
                selectedTab == 0 ?
                    (<Home />)
                    :
                    selectedTab == 1 ?
                        (<Search />)
                        :
                        selectedTab == 2 ?
                            (<Books />)
                            :
                            selectedTab == 3 ?
                                (<About />)
                                :
                                (<User />)
            }


            {!isKeyboardVisible && (
                  <View style={styles.bottomView}>
                  <TouchableOpacity
                      onPress={() => {
                          setSelectedTab(0)
                      }}
                  >
                      <Image
                          source={selectedTab==0?require('../images/home_fill.png'):require('../images/home.png')}
                          style={styles.bottomTabIcon}
                      />
                  </TouchableOpacity>
                  <TouchableOpacity
                      onPress={() => {
                          setSelectedTab(1)
                      }}
                  >
                      <Image
                          source={require('../images/search.png')}
                          style={styles.bottomTabIcon}
                      />
                  </TouchableOpacity>
                  <TouchableOpacity
                      onPress={() => {
                          setSelectedTab(2)
                      }}
                  >
                      <Image
                          source={selectedTab==2?require('../images/bookfill.png'):require('../images/book.png')}
                          style={styles.bottomTabIcon}
                      />
                  </TouchableOpacity>
                  <TouchableOpacity
                      onPress={() => {
                          setSelectedTab(3)
                      }}
                  >
                      <Image
                          source={selectedTab==3?require('../images/bookfill.png'):require('../images/book.png')}
                          style={styles.bottomTabIcon}
                      />
                  </TouchableOpacity>
                  <TouchableOpacity
                      onPress={() => {
                          setSelectedTab(4)
                      }}
                  >
                      <Image
                          source={selectedTab==4?require('../images/user_fill.png'):require('../images/user.png')}
                          style={styles.bottomTabIcon}
                      />
                  </TouchableOpacity>
  
              </View>
            )}
            

        </View>
    );
};

export default BottomTabs;
const styles = StyleSheet.create({
    container:
    {
        flex: 1,
    },
    bottomView: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    bottomTab: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomTabIcon: {
        width: 25,
        height: 25,

    }
});