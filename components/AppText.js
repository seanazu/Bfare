import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AppText = (props) => {
  return (
    <Text style={[styles.defaultStyle, props.style]}>{props.children} </Text>
  )
}

export default AppText

const styles = StyleSheet.create({
    defaultStyle:{
        fontFamily:'Poppins-Regular',
    }
})