import { View } from 'react-native';
import React from 'react';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { defaultColors } from '../../assets/styling/defaultColors';

const CarIcon = () => {
  return (
    <View>
      <FontAwesome5Icon name='car' size={30} color={defaultColors.lightBlue} />
    </View>
  )
}

export default CarIcon

