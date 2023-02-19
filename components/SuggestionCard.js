import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

// Components
import AppText from './AppText';

// UI Libraries
import LinearGradient from 'react-native-linear-gradient';
import { Divider } from 'native-base';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Styling
import { defaultColors } from '../assets/styling/defaultColors';

const SuggestionCard = ({ header, subHeader, imgUrl }) => {
  const navigation = useNavigation() 

  const goToEventScreen = () => {  
    navigation.navigate("EventScreen",{
      header: header,
      subHeader: subHeader,
      imgUrl: imgUrl
    })
  }


  return (
    <TouchableOpacity style={styles.container} activeOpacity={.8} onPress={goToEventScreen}>

        <ImageBackground
          imageStyle={styles.imageBackground}
          source={{uri : imgUrl}}
        >
            <LinearGradient 
              colors={[defaultColors.linearGradientGrey, defaultColors.black]} 
              style={styles.linearGradient}>
                <View>
                    <AppText style={styles.headerText}>
                      {header}
                    </AppText>
                </View>
                <View>
                    <AppText style={styles.subHeaderText}>
                      {subHeader}
                    </AppText>
                </View>
            </LinearGradient>
            

        </ImageBackground>
        <Divider my={2} />
    </TouchableOpacity>
  )
}

export default SuggestionCard

const styles = StyleSheet.create({
    container:{
        width:220, 
        height:200, 
        marginHorizontal:10,
        alignSelf:'center', 
        borderRadius:60
    },
    imageBackground:{
      borderRadius: 20
    },
    linearGradient:{
        height : '100%', 
        width : '100%',  
        borderRadius:20, 
        alignItems:'flex-start', 
        flexDirection:'column'
    },
    headerText:{
        width:200,
        paddingTop:100,
        paddingLeft:30,
        marginTop:3,
        fontSize:18, 
        color:'white',
        fontWeight:'600'
    },
    subHeaderText:{
        paddingLeft:30,
        marginTop:3,
        fontSize:14, 
        color:defaultColors.greyText,
        fontWeight:'400', 
        width:200
    },
})