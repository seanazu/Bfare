import { StyleSheet, View } from 'react-native';
import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { defaultColors } from '../../assets/styling/defaultColors';

const FilterIcon = ({ size, color }) => {
  return (
    <View style={styles.icon}>
      <FeatherIcon name="filter" size={size ?? 40} color={color ?? defaultColors.black}  />
    </View>
  )
}
export default FilterIcon


const styles = StyleSheet.create({
    icon:{
        alignSelf:'center'
    }
})