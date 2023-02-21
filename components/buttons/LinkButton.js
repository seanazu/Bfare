import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { defaultColors } from '../../assets/styling/defaultColors'
import AppText from '../AppText'

const LinkButton = ({ func, text }) => {

    
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={func}>
      <AppText style={styles.buttonText}>{text}</AppText>
    </TouchableOpacity>
  )
}

export default LinkButton

const styles = StyleSheet.create({
    buttonContainer:{
        alignItems:'center',
        justifyContent:'center',
        width:60,
        borderRadius:20,
        marginTop:10,
        marginLeft:10
    },
    buttonText:{
        fontSize:17,
        fontWeight:'800',
        color:defaultColors.lightBlue,
        textDecorationLine:'underline',
        textDecorationColor:defaultColors.lightBlue
    }
})