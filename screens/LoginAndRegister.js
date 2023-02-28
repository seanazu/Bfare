import { ImageBackground, SafeAreaView, StyleSheet, Text, View, Dimensions, Platform, TouchableOpacity, Animated} from 'react-native'
import React, { useEffect, useRef, useState } from 'react';

//  Images
import SignUpImage from '../assets/png/SignUp.png'

// Components 
import { defaultColors } from '../assets/styling/defaultColors';
import AppText from '../components/AppText';
import DefaultButton from '../components/buttons/DefaultButton';

// Styling
import { cardShadow } from '../assets/styling/Shadows';

// Navigation
import { useNavigation } from '@react-navigation/native';
import SignUpForm from '../components/forms/SignUpForm';

const screenHeight = Dimensions.get('screen').height

const LoginAndRegister = ({ text, route }) => {
  const[type, setType] = useState(route.params.type)
  const navigation = useNavigation()
  const popupAnim = useRef(new Animated.Value(-250)).current

  const goToHomeScreen = () =>{
    navigation.navigate("Home")
  }

  useEffect(() => {
    Animated.timing(popupAnim, {
      toValue: -60,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [popupAnim]);

  const showLogin = () =>{
    setType('login')
    popupAnim.setValue(-450)
    Animated.timing(popupAnim, {
      toValue: -60,
      duration: 1500,
      useNativeDriver: false,
    }).start()
  }

  const showSignUp = () =>{
    setType('sign up')
    popupAnim.setValue(-450)
    Animated.timing(popupAnim, {
      toValue: -60,
      duration: 1500,
      useNativeDriver: false,
    }).start()
  }



  return (
    <ImageBackground
      style={styles.imageBackground}
      source={SignUpImage}
    >
        <Animated.View style={{...styles.container, marginBottom:popupAnim}}>
          <View style={[styles.textContainer, cardShadow]}>

            { type === 'login' ? 
            <>
              <AppText style={styles.headerText}>
                Login
              </AppText>

              < SignUpForm type={type} />
              
              <DefaultButton text={'Sign in'} func={goToHomeScreen} />

              <AppText style={styles.loginText}>
                Dont have an account ? 
                <TouchableOpacity style={styles.loginButton} onPress={showSignUp}>
                  <Text style={styles.loginButtonText} >Sign up</Text>
                </TouchableOpacity>
              </AppText>
            </> : 
            <>
              <AppText style={styles.headerText}>
                Sign up
              </AppText>
              < SignUpForm type={type} />
              <DefaultButton text={'Sign up'} func={goToHomeScreen} />
              <AppText style={styles.loginText}>
                Have an account already ? 
                <TouchableOpacity style={styles.loginButton} onPress={showLogin}>
                  <Text style={styles.loginButtonText} >Login</Text>
                </TouchableOpacity>
              </AppText>
            </> 
            }
            
           

          </View>
        </Animated.View>
    </ImageBackground>
  )
}

export default LoginAndRegister

const styles = StyleSheet.create({
    imageBackground:{
        flex:1,
        height:Dimensions.get('window').height,
        zIndex:0
    },
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-end',
    },
    textContainer:{
      width:'100%',
      borderRadius:80,
      alignItems:'center',
      backgroundColor:defaultColors.white,
      paddingBottom:100,
      paddingTop:20

    },
    headerText:{
      fontSize:35,
      fontWeight:'bold',
      color:defaultColors.black,
      marginBottom:10,
      textAlign:'left',
      textShadowColor: 'rgba(244,244,244,0.7)',
      textShadowOffset: {width: -0.5, height: 0.5},
      textShadowRadius: 0.5
    },
    bodyText:{
      color:defaultColors.black,
      fontSize:15,
      width:'70%',
      fontWeight:'500'
    },
    loginText:{
      margin:10,
      fontSize:15
    },
    loginButton:{
      paddingLeft:5,

    },
    loginButtonText:{
      fontSize:17,
      color:defaultColors.lightBlue
    }
   
})