import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

// Components
import AppText from '../components/AppText';
import ArrowDown from '../components/icons/ArrowDown';
import SortIcon from '../components/icons/SortIcon';
import FilterIcon from '../components/icons/FIlterIcon';

// UI Library 
import LinearGradient from 'react-native-linear-gradient';
import { StatusBar } from 'native-base';

// Styles 
import { defaultColors } from '../assets/styling/defaultColors';


const AccommodationScreen = ({ route }) => {
  const { imgUrl } = route.params


  return (
    <View style={{flex:1}}>
    <View style={styles.container}>
      {/* Header */}
      <StatusBar backgroundColor={defaultColors.black} barStyle="light-content" />
      <ImageBackground
        source={{uri : imgUrl}}
      >
        <LinearGradient
            colors={[defaultColors.linearGradientGrey, defaultColors.black]} 
            style={styles.linearGradient}>

            <View>
                <AppText>
                </AppText>
                <AppText style={styles.headerText}>
                  {'Flights'}
                </AppText>
            </View>

            <View>
                <AppText style={styles.subHeaderText}>
                  {"All aboard"}
                </AppText>
            </View>

            <View style={styles.fromContainer}>
              <AppText style={styles.fromText}>
                From :
              </AppText>
              <TouchableOpacity style={{flexDirection:'row'}}>
                <AppText style={[styles.fromText]}>
                  Tel Aviv 
                </AppText> 
                <ArrowDown size={20} color={defaultColors.greyText} />
              </TouchableOpacity>
            </View>

        </LinearGradient>
      </ImageBackground>
    </View>

    <View style={styles.sortAndFilterContainer}>
      <TouchableOpacity style={styles.sortButton} >
        <SortIcon size={40} />
      </TouchableOpacity>
      <View style={styles.divider}>
      </View>
      <TouchableOpacity >
        <FilterIcon />
      </TouchableOpacity>
    </View>

</View>
  )
}

export default AccommodationScreen

const styles = StyleSheet.create({
  container:{
    width:'100%', 
  },
  linearGradient:{
      alignItems:'flex-start', 
      flexDirection:'column', 
      height:240
  },
  headerText:{
      paddingTop:100,
      paddingLeft:30,
      marginTop:3,
      fontSize:20, 
      color:defaultColors.white,
      fontWeight:'600'
  },
  subHeaderText:{
      paddingLeft:30,
      paddingBottom:20,
      marginTop:3,
      fontSize:16, 
      color:defaultColors.greyText,
      fontWeight:'400',
  },
  fromContainer:{
    alignSelf:'center',  
    backgroundColor:'rgba(244,244,244,0.3)', 
    borderRadius:10, 
    flexDirection:'row', 
    paddingHorizontal:10
  },
  fromText:{
      marginTop:3,
      marginBottom:3,
      borderRadius:5,
      fontSize:16, 
      color:defaultColors.greyText,
      fontWeight:'400'
  },
  sortAndFilterContainer:{
    flexDirection:"row", 
    justifyContent:'space-evenly', 
    paddingTop:10, 
    backgroundColor:defaultColors.greyWhite
  },
  sortButton:{
    flexDirection:'row', 
    alignItems:'center'
  },
  divider:{
    borderLeftWidth:1, 
    borderColor:defaultColors.pointSixBlack, 
    height:16, 
    alignSelf:'center'
  }


})