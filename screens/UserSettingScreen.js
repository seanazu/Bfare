import { Image, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

// Components 
import BasicInfo from '../components/userData/BasicInfo';
import AccountData from '../components/userData/AccountData';

// Styles
import { defaultColors } from '../assets/styling/defaultColors';

// UI Libraries
import AppText from '../components/AppText';

// Firebase 
import { storageRef } from './firebase-config';
import { ScrollView } from 'native-base';
import PenIcon from '../components/icons/PenIcon';


const UserSettingScreen = () => {

  const[image, setImage] = useState();
  const[uploading, setUploading] = useState(false);

  const imagePicker = async () =>{
    try{
    } 
    catch (error) {
    }
  }

  const handleUpload = async () =>{
    setUploading(true)
  }

  return (
    <ScrollView>
       <SafeAreaView style={styles.container}>
         <View style={styles.logoContainer}>
           <Image
             style={styles.userLogo}
             source={image? {uri:image} : require('../assets/png/userDefault.png')}
           />
           <TouchableOpacity style={styles.addImageButton} activeOpacity={.8} onPress={imagePicker} >
             <PenIcon />
           </TouchableOpacity>
         </View>
   
         <BasicInfo />
   
         <AccountData />
   
         <TouchableOpacity>
           <AppText style={styles.logOutText}>
             Log out
           </AppText>
         </TouchableOpacity>
   
       </SafeAreaView>

    </ScrollView>
  )
}

export default UserSettingScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        marginTop:20,
        position:'relative'
    }, 
    logoContainer:{
      shadowOffset: {width: -1, height: 1},  
      shadowColor: defaultColors.black,  
      shadowOpacity: 0.3,  
      shadowRadius: 3
    },
    userLogo:{
        width:150,
        height:150,
        borderColor:defaultColors.black,
        borderWidth:1,
        borderRadius:75
    },
    addImageButton:{
      position:'absolute',
      bottom:0,
      alignSelf:'flex-end',
      right:8,
      backgroundColor:defaultColors.white,
      height:40,
      width:40,
      borderRadius:20,
      alignItems:'center',
      justifyContent:'center',
    },
    logOutText:{
      color:defaultColors.red,
      textDecorationLine:'underline',
      fontWeight:'700',
      fontSize:20,
      marginTop:20,
      marginBottom:20
    }
    
})