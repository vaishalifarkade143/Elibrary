import { View, Text, StyleSheet } from 'react-native'
import React,{useState} from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import Header from '../Common/Header';
import AntDesign from '@expo/vector-icons/AntDesign';

const data = [{ label: 'Book', value: '1' },
{ label: 'Author', value: '2' },] 

const Search = ({navigation}) => {

  const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    
    if (value || isFocus) {
      return (
        <Text style={[styles.label,isFocus && { color: '#c27b7f' }]}>
          Select your Choice
        </Text>
      );
    }
    return null;
  };
  return (
    <View style={{flex:1}}>
       <Header
        rightIcon={require('../images/Logoelibrary.png')}
        leftIcon={require('../images/menu.png')}
        onClickLeftIcon={() => {
          navigation.openDrawer();
        }}
      />
      {/* <Text style={{alignItems:'center',justifyContent:'center'}}>Search</Text> */}
      <View style={styles.mainDropNSearch}>
      {renderLabel()} 
          <Dropdown
            style={[styles.dropdown,isFocus && { borderColor: '#000' }]}
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
                color={isFocus ? '#c27b7f' : 'black'}
                name="Safety"
                size={20}
              />
            )}
          />

        </View>
      </View>
 
  );
};

export default Search;
const styles = StyleSheet.create({
  mainDropNSearch: {
   padding:16,
  },
  dropdown: {
    height: 50,
    borderColor: '#000',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor:'#fff'
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
})