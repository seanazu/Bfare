import { View } from 'react-native';
import React from 'react';
import OcticonsIcon from 'react-native-vector-icons/Octicons';
import { defaultColors } from '../../assets/styling/defaultColors';

const VerifiedIcon = () => {
  return (
    <View>
      <OcticonsIcon name='shield-check' size={30} color={defaultColors.lightBlue}  />
    </View>
  )
}

export default VerifiedIcon

