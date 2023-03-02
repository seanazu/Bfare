import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';

// Style
import { defaultColors } from '../../assets/styling/defaultColors';

// Components
import EmailIcon from '../icons/EmailIcon';
import LockIcon from '../icons/LockIcon';
import UserIcon from '../icons/UserIcon';
import PhoneIcon from '../icons/PhoneIcon';

// Redux 
import { useDispatch } from 'react-redux';
import { addEmail, addFullName, addPassword, addPhoneNumber } from '../../redux/features/userSlice';


const TextInputDef = ({ text, iconName }) => {

  const dispatch = useDispatch();

  let icon; 
  if (iconName === 'user'){
    icon = <UserIcon />
  } else if (iconName === 'password'){
    icon = <LockIcon />
  } else if ( iconName === 'email'){
    icon = <EmailIcon />
  } else if ( iconName === 'phone'){
    icon = <PhoneIcon />
  }

  const addInputData = (text) =>{
    if (iconName === 'user'){
      dispatch(addFullName(text))
    } else if (iconName === 'password'){
      dispatch(addPassword(text))
    } else if ( iconName === 'email'){
      dispatch(addEmail(text))
    } else if ( iconName === 'phone'){
      dispatch(addPhoneNumber(text))
    }
  }


  return (
    <View>
      <View style={styles.searchInput}>

        <View style={styles.icon}>
          {icon}
        </View>
      
        <TextInput
          placeholder={text}
          keyboardType={iconName === 'phone' ? 'phone-pad' : 'default'}
          style={styles.textInput}
          secureTextEntry={ iconName === 'password' ? true : false}
          onChangeText={text => addInputData(text)}

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