import { View, Text,StyleSheet ,Image} from 'react-native'
import React ,{useEffect}from 'react'
import { create } from 'react-test-renderer';

const Splash = ({navigation}) => {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Parent');
        },2000)
    },[]);
  return (
    <View style={styles.container}>
      <Image
          source={require('../images/Logoelibrary.png')}
          style={{height: 55, width: 170}}
        />
    </View>
  );
};

export default Splash;
const styles=StyleSheet.create({
    container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#fff3cd'
    }
});