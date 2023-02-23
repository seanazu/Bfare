import { ImageBackground, SafeAreaView, StyleSheet, Text, View, Dimensions, Platform, TouchableOpacity, Animated} from 'react-native'
import React, { useEffect, useRef } from 'react';

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

const screenHeight = Dimensions.get('screen').height

const LoginAndRegister = ({ text }) => {
  const navigation = useNavigation()
  const popupAnim = useRef(new Animated.Value(-240)).current


  const goToHomeScreen = () =>{
    navigation.navigate("Home")
  }

  useEffect(() => {
    Animated.timing(popupAnim, {
      toValue: -60,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  }, [popupAnim]);



  return (
    <ImageBackground
      style={styles.imageBackground}
      source={SignUpImage}
    >
        <Animated.View style={{...styles.container, marginBottom:popupAnim}}>
          <View style={[styles.textContainer, cardShadow]}>
            <AppText style={styles.headerText}>
              Sign In / Up
            </AppText>
            <AppText style={styles.bodyText}>
              Bfare is a market place for you to buy and sell tickets directly from other buyers.  
            </AppText>
            <AppText style={[styles.bodyText,{marginTop:10}]}>
              lets say you got stuck with tickets and don't know where to sell them - we are the solution !
            </AppText>
            <DefaultButton text={'Home'} func={goToHomeScreen} />
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
      height:screenHeight * 0.65,
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
   
})