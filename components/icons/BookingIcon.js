import { View } from 'react-native';
import React from 'react';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { defaultColors } from '../../assets/styling/defaultColors';

const BookingIcon = () => {
  return (
    <View>
      <EntypoIcon name="suitcase" size={30} color={defaultColors.lightBlue} />
    </View>
  )
}

export default BookingIcon

