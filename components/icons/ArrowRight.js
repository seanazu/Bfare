import { View } from 'react-native';
import React from 'react';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { defaultColors } from '../../assets/styling/defaultColors';

const ArrowRight = () => {
  return (
    <View>
      <EntypoIcon name="chevron-right" size={25} color={defaultColors.pointSixBlack} />
    </View>
  )
}

export default ArrowRight

