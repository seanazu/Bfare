import { View } from 'react-native';
import React from 'react';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { defaultColors } from '../../assets/styling/defaultColors';

const LockIcon = () => {
  return (
    <View>
      <AntDesignIcon name='lock' size={30} color={defaultColors.lightBlue} />
    </View>
  )
}

export default LockIcon

