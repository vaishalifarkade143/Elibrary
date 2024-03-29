import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'
const { height, width } = Dimensions.get('window');

const Header = ({ leftIcon, rightIcon, onClickLeftIcon }) => {
    return (
        <View style={styles.header}>
            
            <TouchableOpacity style={styles.btn}
                onPress={() => {
                    onClickLeftIcon();
                }}>
                <Image source={leftIcon} style={styles.icon} />
            </TouchableOpacity>
            <Image source={rightIcon} style={styles.logoicon} />
        </View>
    )
}

export default Header;
const styles = StyleSheet.create({
    header: {
        width: width,
        height: 70,
        backgroundColor: '#fff3cd',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
    },
    btn: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoicon: {
        width: 170,
        height: 55,

    },
    icon: {
        width: 40,
        height: 40,

    },

});
