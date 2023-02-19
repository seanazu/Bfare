import { View } from 'react-native';
import React from 'react';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { defaultColors } from '../../assets/styling/defaultColors';

const PenIcon = () => {
  return (
    <View>
      <FontAwesome5Icon name="pen" size={20} color={defaultColors.lightBlue} />
    </View>
  )
}

export default PenIcon
