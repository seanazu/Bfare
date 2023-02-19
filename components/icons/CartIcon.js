import { View } from 'react-native';
import React from 'react';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import { defaultColors } from '../../assets/styling/defaultColors';

const CartIcon = () => {
  return (
    <View>
      <IoniconsIcon name='cart-outline' size={30} color={defaultColors.lightBlue} />
    </View>
  )
}

export default CartIcon

