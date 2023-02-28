import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';

// Style
import { defaultColors } from '../../assets/styling/defaultColors';

// Components
import EmailIcon from '../icons/EmailIcon';
import LockIcon from '../icons/LockIcon';
import UserIcon from '../icons/UserIcon';

// Redux 
import { useDispatch } from 'react-redux';
import { addEmail, addFullName, addPassword } from '../../redux/features/userSlice';


const TextInputDef = ({ text, func, iconName }) => {

  const dispatch = useDispatch();

  let icon; 
  if (iconName === 'user'){
    icon = <UserIcon />
  } else if (iconName === 'password'){
    icon = <LockIcon />
  }else if ( iconName === 'email'){
    icon = <EmailIcon />
  }

  const addInputData = (text) =>{

    if (iconName === 'user'){
      dispatch(addFullName(text))
    } else if (iconName === 'password'){
      dispatch(addPassword(text))
    }else if ( iconName === 'email'){
      dispatch(addEmail(text))
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
          keyboardType='default' 
          style={styles.textInput}
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