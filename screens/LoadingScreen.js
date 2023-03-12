import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';

// Components
import RocketAnimation from '../assets/animations/Rocket';
import AppText from '../components/AppText';

// Navigation
import { useNavigation } from '@react-navigation/native';

const LoadingScreen = () => {

  const navigation = useNavigation()
  
  useEffect(() =>{
      setTimeout(()=>{
          navigation.navigate("Home")
      },4000) 
  },[])

  return (
    <View style={styles.container}>
      <RocketAnimation />
      <AppText>
        
      </AppText>
    </View>
  )
}

export default LoadingScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})