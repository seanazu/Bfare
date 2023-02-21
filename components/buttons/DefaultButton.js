import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { defaultColors } from '../../assets/styling/defaultColors'
import AppText from '../AppText'

const DefaultButton = ({ func, text }) => {

  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={func}>
      <AppText style={styles.buttonText}>
        {text}
      </AppText>
    </TouchableOpacity>
  )
}

export default DefaultButton

const styles = StyleSheet.create({
    buttonContainer:{
        alignItems:'center',
        justifyContent:'center',
        width:200,
        height:40,
        borderRadius:20,
        backgroundColor:defaultColors.lightBlue,
        marginTop:10
    },
    buttonText:{
        fontSize:17,
        fontWeight:'800',
        color:defaultColors.white
    }
})