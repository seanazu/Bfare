import { View } from 'react-native';
import React from 'react';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import { defaultColors } from '../../assets/styling/defaultColors';

const SoldIcon = () => {
  return (
    <View>
      <IoniconsIcon name='receipt-outline' size={30} color={defaultColors.lightBlue} />
    </View>
  )
}

export default SoldIcon

