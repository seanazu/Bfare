import { View } from 'react-native';
import React from 'react';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import { defaultColors } from '../../assets/styling/defaultColors';

const WalletIcon = () => {
  return (
    <View>
      <IoniconsIcon name='wallet-outline' size={30} color={defaultColors.lightBlue} />
    </View>
  )
}

export default WalletIcon

