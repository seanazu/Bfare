import React, { useEffect, useRef } from 'react'; 
import { Animated, Easing, StyleSheet, View } from 'react-native';

// UI Libraries
import Lottie from 'lottie-react-native';

// Styling
import { defaultColors } from '../styling/defaultColors';

const ArrowRight = () => {
    const animationProgress = useRef(new Animated.Value(0))

    useEffect(() => {
      Animated.timing(animationProgress.current, {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: false
      }).start();
  
      setTimeout(()=>{
        Animated.timing(animationProgress.current).stop();
      },2000)
  
    }, [])


  return (
    <View style={styles.animationContainer}>
      <Lottie 
          style={styles.animation}
          source={require('../lottie/arrowRightLottie.json')} 
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

export default ArrowRight

const styles = StyleSheet.create({
  animationContainer:{
    alignSelf:'center', 
    height:40,
    width:40
  },
  animation:{
    flex:1
  }
})