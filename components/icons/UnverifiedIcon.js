import { View } from 'react-native';
import React from 'react';
import OcticonsIcon from 'react-native-vector-icons/Octicons';
import { defaultColors } from '../../assets/styling/defaultColors';

const UnverifiedIcon = () => {
  return (
    <View>
      <OcticonsIcon name='shield-x' size={30} color={defaultColors.lightBlue}  />
    </View>
  )
}

export default UnverifiedIcon

