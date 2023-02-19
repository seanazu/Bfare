import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

// Components
import AppText from '../AppText';

// UI Libraries 
import FontAwesome from 'react-native-vector-icons/FontAwesome'

// Navigation
import { useNavigation } from '@react-navigation/native';

// Styles
import { defaultColors } from '../../assets/styling/defaultColors';

const SearchButton = () => {
  const navigation = useNavigation();

  const searchFlights = () =>{
    navigation.navigate('Searching',{
        screen:'', 
        imgUrl:''
    })
  }


  return (
    <TouchableOpacity style={styles.button} onPress={searchFlights}>
      <FontAwesome name='search' size={20} color={defaultColors.black} />
      <AppText style={styles.buttonText}>
        Search
      </AppText>
    </TouchableOpacity>
  )
}

export default SearchButton

const styles = StyleSheet.create({
  button:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:defaultColors.lightBlue,
    width:'60%',
    borderRadius:10,
    height:30, 
    marginBottom:10,
    marginTop:10,
    
  }, 
  buttonText:{
    alignSelf:'center',
    fontSize:20, 
    color:defaultColors.white,
    fontWeight:'bold',
    marginLeft:10
  },
})