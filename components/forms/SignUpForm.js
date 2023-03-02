import { StyleSheet, View } from 'react-native'
import React from 'react'
import TextInputDef from '../inputs/TextInputDef'

const SignUpForm = ({ type }) => {
  
  return (
    <View style={styles.container}>
      { type === 'sign up' ?
        <>
          <TextInputDef text={'Full name'} iconName={'user'}/>
          <TextInputDef text={'Phone number'} iconName={'phone'} />
        </>
        : <></>
      }
      <TextInputDef text={'Email'} iconName={'email'} />
      <TextInputDef text={'Password'} iconName={'password'}/>

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