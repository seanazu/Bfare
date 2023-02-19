import { View } from 'react-native';
import React from 'react';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { defaultColors } from '../../assets/styling/defaultColors';

const AlertIcon = () => {
  return (
    <View>
      <EntypoIcon name="bell" size={30} color={defaultColors.alertYellow} />
    </View>
  )
}

export default AlertIcon
