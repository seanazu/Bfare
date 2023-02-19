import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

// Components
import AppText from '../AppText';
import HotelIcon from '../icons/HotelIcon';
import CarIcon from '../icons/CarIcon';
import DiscoverIcon from '../icons/DiscoverIcon';
import DealsIcon from '../icons/DealsIcon';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Styling
import { defaultColors } from '../../assets/styling/defaultColors';
import { cardShadow } from '../../assets/styling/Shadows';

const ScreenCard = ({ screen }) => {
    const navigation = useNavigation()
    let icon ;
    let text = ''
    if(screen === "HotelsScreen"){
      icon = <HotelIcon />
      text = "hotels"
    }
    if(screen === "DiscoverScreen"){
      icon = <DiscoverIcon />
      text = "discover"
    }
    if(screen === "PackagesScreen"){
      icon = <DealsIcon />
      text = "packages"
    }
    if(screen === "CarRentalScreen"){
      icon = <CarIcon />
      text = "car rental"
    }

    const goToScreen = () =>{
        navigation.navigate(screen)
    }

    return (
      <TouchableOpacity activeOpacity={.7} style={[styles.container,styles.shadowProp]}>
        {icon}
        <AppText style={styles.cardText}>{text}</AppText>
      </TouchableOpacity>
    )
}

export default ScreenCard

const styles = StyleSheet.create({
    container:{
      height:110,
      width:110,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:defaultColors.greyWhite,
      marginHorizontal:8,
      borderRadius:15
    },
    shadowProp:cardShadow,
    cardText:{
        marginTop:10,
        fontSize:15,
        fontWeight:'500'
    }
})