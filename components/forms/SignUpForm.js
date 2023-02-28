import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import TextInputDef from '../inputs/TextInputDef'

const SignUpForm = ({ type }) => {
  
  return (
    <View style={styles.container}>
      <TextInputDef text={'Full name'} iconName={'user'}/>
      <TextInputDef text={'Email'} iconName={'email'} />
      { type === 'sign up' ?
        <TextInputDef text={'Password'} iconName={'password'}/>
        : <></>
      }

    </View>
  )
}

export default SignUpForm

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    justifyContent:'center'
  }
})