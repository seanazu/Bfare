import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';
import EmailIcon from '../icons/EmailIcon';
import LockIcon from '../icons/LockIcon';
import UserIcon from '../icons/UserIcon';
import { defaultColors } from '../../assets/styling/defaultColors';

const TextInputDef = ({ text, func, iconName }) => {

  let icon; 
  if (iconName === 'user'){
    icon = <UserIcon />
  } else if (iconName === 'password'){
    icon = <LockIcon />
  }else if ( iconName === 'email'){
    icon = <EmailIcon />
  }


  return (
    <View>
      <View style={styles.searchInput}>

        <View style={styles.icon}>
          {icon}
        </View>
      
        <TextInput
          placeholder={text}
          keyboardType='default' 
          style={styles.textInput}
          onChaneText={func}
        />
      
      </View>
    </View>
  )
}

export default TextInputDef

const styles = StyleSheet.create({
    searchInput:{
        flexDirection:'row', 
        alignItems:'center',
        backgroundColor:defaultColors.xLightBlue,
        padding:3,
        width:'85%',
        borderRadius:10,
        marginBottom:20, 
      }, 
      textInput:{
        width:'80%',
        height:40, 
        paddingLeft:15
      },
      icon:{
        paddingLeft:10
      }
})