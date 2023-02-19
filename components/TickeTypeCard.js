import { Image, Platform, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import AppText from './AppText';

// Navigation
import { useNavigation } from '@react-navigation/native';
import { defaultColors } from '../assets/styling/defaultColors';

const TickeTypeCard = ({ imgUrl, title, screen }) => {
    const navigation = useNavigation()


    const goToScreen = () =>{
        navigation.navigate(screen,{
            imgUrl:imgUrl
        })
    } 

    return (
      <TouchableOpacity style={styles.container} activeOpacity={.4} onPress={goToScreen} > 
  
          <Image
            style={styles.image}
            source={{
              uri:imgUrl
            }}
          />
          <AppText style={styles.imageTitle}>
              {title} 
          </AppText>
  
      </TouchableOpacity>
    )
}

export default TickeTypeCard

const styles = StyleSheet.create({
    image:{
        width:110,
        height:80,
        borderRadius:8,
        margin:5,
        backgroundColor:defaultColors.greyText,
    },
    container:{
        position:'relative', 
        maxHeight:82,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 1, height: 1 },
                shadowOpacity: 0.6,
                shadowRadius: 2,    
            },
            android: {
                elevation: 4,
            },
        })

    },
    imageTitle:{
        position:'absolute',
        alignSelf:'center',
        color:'white',
        fontSize:14,
        bottom:10, 
        fontWeight:'bold',
        textShadowColor: 'black',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 3
    }
})