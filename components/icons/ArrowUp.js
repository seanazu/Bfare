import { StyleSheet, View } from 'react-native';
import React from 'react';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { defaultColors } from '../../assets/styling/defaultColors';

const ArrowUp = ({ size, color }) => {
  return (
    <View style={styles.icon}>
      <EntypoIcon name="chevron-up" size={size ?? 25} color={color ?? defaultColors.pointSixBlack} />
    </View>
  )
}
export default ArrowUp


const styles = StyleSheet.create({
    icon:{
        alignSelf:'center'
    }
})