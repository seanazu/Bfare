import { ImageBackground, StyleSheet, StatusBar, View, Switch, SafeAreaView } from 'react-native'
import React, { useState } from 'react';

// Components 
import FlightsForm from '../components/forms/FlightsForm';
import ScreensCards from '../components/flightsSuggestions/ScreensCards';
import DestinationCards from '../components/flightsSuggestions/DestinationCards';
import AppText from '../components/AppText';

// UI Libraries
import LinearGradient from 'react-native-linear-gradient'

// Styles
import { defaultColors } from '../assets/styling/defaultColors';
import { cardShadow } from '../assets/styling/Shadows';


const FlightsScreen = ({ route }) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const { imgUrl } = route.params; 

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState)
  };

  return (
    <View style={{flex:1}}>
      <View style={styles.container}>
        {/* Header */}
        <StatusBar backgroundColor={defaultColors.black} barStyle="light-content" />
        <ImageBackground
          source={{uri : imgUrl}}
        >
          <LinearGradient
            colors={[ defaultColors.linearGradientGrey , defaultColors.black]} 
            style={styles.linearGradient} 
          >
          <SafeAreaView ></SafeAreaView>
          <View style={[styles.switchContainer, styles.shadowProp]}>
  
            <View style={styles.searchOptionContainer}>
              <AppText style={styles.searchOptionText}>
                by date
              </AppText>
            </View>
            
            
            <Switch
             style={styles.shadowProp}
             trackColor={{ false: defaultColors.white, true: defaultColors.white }}
             thumbColor={defaultColors.lightBlue}
             ios_backgroundColor={defaultColors.white}
             onValueChange={toggleSwitch}
             value={isEnabled}
            />
            
            <View style={styles.searchOptionContainer}>
              <AppText style={styles.searchOptionText}>
                spontaneous
              </AppText>
            </View>
          </View>
          
  
          <FlightsForm beSpontaneuos={isEnabled}/>
  
          </LinearGradient>
        </ImageBackground>
      </View>

      <View  style={styles.bodyContainer}>
        <ScreensCards />
        <DestinationCards />
      </View>
    
    

    </View>
  )
}

export default FlightsScreen

const styles = StyleSheet.create({
  container:{
    width:'100%', 
  },
  shadowProp:cardShadow,
  linearGradient:{
    alignItems:'flex-start', 
    flexDirection:'column', 
    paddingBottom:15
  },
  switchContainer:{
    flexDirection:'row',
    alignSelf:'center',
    zIndex:2,
    backgroundColor: defaultColors.pointSixWhite,
    borderRadius:15
  },
  searchOptionContainer:{
    height:30,
    width:'27%'
  },
  searchOptionText:{
    color:defaultColors.black,
    padding:5,
    paddingHorizontal:10,
    textAlign:'center',
    fontWeight:'500',
    color:defaultColors.pointSixBlack
  },
  bodyContainer:{
    flex:1
  }
})