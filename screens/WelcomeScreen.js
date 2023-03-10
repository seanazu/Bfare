import { ImageBackground, SafeAreaView, StyleSheet, Text, View, Dimensions, Platform, TouchableOpacity, Animated} from 'react-native'
import React, { useEffect, useRef } from 'react';

//  Images
import WelcomeScreen1 from '../assets/png/Welcome1.png'

// Components 
import { defaultColors } from '../assets/styling/defaultColors';
import AppText from '../components/AppText';
import DefaultButton from '../components/buttons/DefaultButton';

// Styling
import { cardShadow } from '../assets/styling/Shadows';

// Navigation
import { useNavigation } from '@react-navigation/native';


const WelcomeScreen = () => {
  const navigation = useNavigation()
  const popupAnim = useRef(new Animated.Value(-250)).current


  const goToOnBoarding = () =>{
    navigation.navigate("OnBoarding")
  }

  useEffect(() => {
    Animated.timing(popupAnim, {
      toValue: -70,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [popupAnim]);



  return (
    <ImageBackground
      style={styles.imageBackground}
      source={WelcomeScreen1}
    >
        <Animated.View style={{...styles.container, marginBottom:popupAnim}}>
          <View style={[styles.textContainer, cardShadow]}>
            <AppText style={styles.headerText}>
              Welcome 
            </AppText>
            <AppText style={styles.bodyText}>
              Bfare is a market place for you to buy and sell tickets directly from other buyers.  
            </AppText>
            <AppText style={[styles.bodyText,{marginTop:10}]}>
              lets say you got stuck with tickets and don't know where to sell them - we are the solution !
            </AppText>
            <DefaultButton text={'continue'} func={goToOnBoarding} />
          </View>
        </Animated.View>
    </ImageBackground>
  )
}

export default WelcomeScreen

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
      justifyContent:'center',
      backgroundColor:defaultColors.white,
      paddingBottom:100

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