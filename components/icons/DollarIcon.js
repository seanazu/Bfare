import { View } from 'react-native';
import React from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { defaultColors } from '../../assets/styling/defaultColors';

const DollarIcon = () => {
  return (
    <View>
      <Fontisto name="dollar" size={30} color={defaultColors.lightBlue} />
    </View>
  )
}

export default DollarIcon

