import { View } from 'react-native';
import React from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { defaultColors } from '../../assets/styling/defaultColors';

const EmailIcon = () => {
  return (
    <View>
      <FontAwesomeIcon name='envelope-o' size={30} color={defaultColors.lightBlue} />
    </View>
  )
}

export default EmailIcon

