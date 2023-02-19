import { StyleSheet, View } from 'react-native';
import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { defaultColors } from '../../assets/styling/defaultColors';

const SortIcon = ({ size, color }) => {
  return (
    <View style={styles.icon}>
      <MaterialIcon name="sort" size={size ?? 40} color={color ?? defaultColors.black}  />
    </View>
  )
}
export default SortIcon


const styles = StyleSheet.create({
    icon:{
        alignSelf:'center'
    }
})