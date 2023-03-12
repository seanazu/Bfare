import React, { useEffect, useRef } from 'react'; 
import { Animated, Easing, StyleSheet, View } from 'react-native';

// UI Libraries
import Lottie from 'lottie-react-native';

// Styling
import { defaultColors } from '../styling/defaultColors';

const RocketAnimation = () => {
    const animationProgress = useRef(new Animated.Value(0))

    useEffect(() => {
      Animated.timing(animationProgress.current, {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear,
        useNativeDriver: false
      }).start();
  
  
    }, [])


  return (
    <View style={styles.animationContainer}>
      <Lottie 
          style={styles.animation}
          source={require('../lottie/RocketAnimation.json')} 
          progress={animationProgress.current}
          colorFilters={[
            {
              keypath: 'button',
              color: defaultColors.black,
            },
            {
              keypath: 'Sending Loader',
              color: defaultColors.black,
            },
          ]}
          loop
           />
    </View>
  )
}

export default RocketAnimation

const styles = StyleSheet.create({
  animationContainer:{
    alignSelf:'center', 
    height:300,
    width:300
  },
  animation:{
    flex:1
  }
})