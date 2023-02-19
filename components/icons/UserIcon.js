import { View } from 'react-native';
import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { defaultColors } from '../../assets/styling/defaultColors';

const EmailIcon = () => {
  return (
    <View>
      <FeatherIcon name='user' size={30} color={defaultColors.lightBlue}  />
    </View>
  )
}

export default EmailIcon

