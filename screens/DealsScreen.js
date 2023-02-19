import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AppText from '../components/AppText';

const DealsScreen = () => {
  return (
    <View style={styles.container}>
      <AppText>Deals Screen</AppText>
    </View>
  )
}

export default DealsScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
})