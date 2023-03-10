import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

// Styling
import { cardShadow } from '../../assets/styling/Shadows'; 
import AppText from '../AppText';

import AlertIcon  from '../icons/AlertIcon';
import CartIcon from '../icons/CartIcon';
import BookingIcon from '../icons/BookingIcon';
import SoldIcon from '../icons/SoldIcon';
import WalletIcon from '../icons/WalletIcon';
import ChatIcon from '../icons/ChatIcon';
import DollarIcon from '../icons/DollarIcon';
import { useNavigation } from '@react-navigation/native';

const SubjectBox = ({ theme, screenName }) => {
  const navigation = useNavigation()


  const navigateTo = () =>{
    if(screenName){
      navigation.navigate(screenName)
    }
  }
  
  let icon  ; 
  if(theme === "alerts"){
    icon = <AlertIcon />
  }
  if(theme === "cart"){
    icon = <CartIcon />
  }
  if(theme === "bookings"){
    icon = <BookingIcon />
  }
  if(theme === "sold" ){
    icon = <SoldIcon />
  }
  if(theme === "sell"){
    icon = <DollarIcon />
  }
  if(theme === "chat"){
    icon = <ChatIcon />
  }
  

  return (
    <TouchableOpacity activeOpacity={.5} style={[styles.container, cardShadow]} onPress={navigateTo} >
      {icon}
      <AppText style={styles.subjectBoxText}> 
        {theme}
      </AppText>
    </TouchableOpacity>
  )
}

export default SubjectBox

const styles = StyleSheet.create({
    container:{
        height:100,
        width:'30%',
        margin:5,
        backgroundColor:'#fcfcfc',
        borderRadius:16,
        alignItems:'center',
        justifyContent:'center',
        padding:10
    },
    subjectBoxText:{
      textAlign:'center',
      marginTop:5,
      fontSize:15
    }
})