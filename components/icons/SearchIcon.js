import { StyleSheet, View } from 'react-native';
import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { defaultColors } from '../../assets/styling/defaultColors';

const SearchIcon = ({ size, color }) => {
  return (
    <View style={styles.icon}>
      <FeatherIcon name="search" size={size ?? 25} color={color ?? defaultColors.black}  />
    </View>
  )
}
export default SearchIcon


const styles = StyleSheet.create({
    icon:{
        alignSelf:'center'
    }
})