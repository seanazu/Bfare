import { ImageBackground, SafeAreaView, StyleSheet, View, Dimensions, Animated} from 'react-native'
import React, { useEffect, useRef } from 'react';

//  Images
import BackgroundImage from '../assets/png/Welcome2.png'

// Components 
import { defaultColors } from '../assets/styling/defaultColors';
import AppText from '../components/AppText';
import DefaultButton from '../components/buttons/DefaultButton';

// Styling
import { cardShadow } from '../assets/styling/Shadows';

// Navigation
import { useNavigation } from '@react-navigation/native';
import LinkButton from '../components/buttons/LinkButton';


const OnBoarding = () => {
  const navigation = useNavigation()
  const popupAnim = useRef(new Animated.Value(-250)).current

  useEffect(() => {
    Animated.timing(popupAnim, {
      toValue: -70,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [popupAnim]);


  const goToLogin = () =>{
    navigation.navigate("Login")
  }

  const goToRegister = () =>{
    navigation.navigate("Register")
  }


  return (
    <ImageBackground
      style={styles.imageBackground}
      source={BackgroundImage}
    >
        <Animated.View style={{...styles.container, marginBottom:popupAnim}}>
          <View style={[styles.textContainer, cardShadow]}>
            <AppText style={styles.headerText}>
              New ticket 
            </AppText>
            <AppText style={styles.bodyText}>
              When you buy a plane ticket or hotel booking in Bfare, we make sure you get a new ticket or reservation number.
            </AppText>
            <AppText style={[styles.bodyText,{marginTop:0}]}>
             It is safe as buying the tickets directly from the original reservation app.
            </AppText>
            <AppText style={[styles.bodyText,{marginTop:10}]}>
              Simply create an account and enjoy Bfare.
            </AppText>
            <View style={styles.buttonsContainer}>
               <DefaultButton text={'Sign up'} func={goToRegister} />
               <LinkButton text={'login'} func={goToLogin} />
            </View>
          </View>
        </Animated.View>
    </ImageBackground>
  )
}

export default OnBoarding

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
    buttonsContainer:{
        flexDirection:'row'
    }
   
})