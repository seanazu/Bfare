import { View } from 'react-native';
import React from 'react';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { defaultColors } from '../../assets/styling/defaultColors';

const DiscoverIcon = () => {
  return (
    <View>
      <FontAwesome5Icon name='binoculars' size={30} color={defaultColors.lightBlue} />
    </View>
  )
}

export default DiscoverIcon

