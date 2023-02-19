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

const SubjectBox = ({ theme }) => {
  
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
  if(theme === "wallet"){
    icon = <WalletIcon />
  }
  if(theme === "chat"){
    icon = <ChatIcon />
  }
  

  return (
    <TouchableOpacity activeOpacity={.5} style={[styles.container, cardShadow]}>
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