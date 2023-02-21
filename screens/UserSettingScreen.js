import { View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Alert,
  ScrollView,
  Image } from 'react-native';
import React, { useState } from 'react';
import ImagePicker from 'react-native-image-crop-picker'; 

// Components 
import BasicInfo from '../components/userData/BasicInfo';
import AccountData from '../components/userData/AccountData';

// Styles
import { defaultColors } from '../assets/styling/defaultColors';

// UI Libraries
import AppText from '../components/AppText';
import PenIcon from '../components/icons/PenIcon';

// Firebase
import storage from '@react-native-firebase/storage';


const UserSettingScreen = () => {
  const [image, setImage] = useState("")
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);

  const options = {
    maxWidth: 2000,
    maxHeight: 2000,
    cropping: true,
    storageOptions: {
      skipBackup: true,
      path: 'images',
    }
  };

  const imagePicker = async () =>{
    ImagePicker.openPicker(options).then(response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = Platform.OS === 'android' ? response.path : response.sourceURL
        uploadImage(source)
      }
    }).catch((err)=>{
      console.log(err)
    })
  }

  const uploadImage = async (image) => {
    const uri = image;
    console.log(image)
    const index = uri.lastIndexOf('/') 
    const filename = uri.substring(index + 1);
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
    setUploading(true);
    setTransferred(0);
    const imageRef = storage().ref(filename)
    const task = storage()
      .ref(filename)
      .putFile(uploadUri);
    // set progress state
    task.on('state_changed', snapshot => {
      setTransferred(
        Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000
      );
    });
    try {
      await task;
      setImage(await imageRef.getDownloadURL().catch((error) => { throw error }))
    } catch (e) {
      console.error(e);
    }
    setUploading(false);
    Alert.alert(
      'Photo uploaded!',
      'Your photo has been uploaded to Firebase Cloud Storage!'
    );
  };

  return (
    <ScrollView>
       <SafeAreaView style={styles.container}>
         <View style={styles.logoContainer}>
           <Image
             style={styles.userLogo}
             source={image ? {uri : image} : require('../assets/png/userDefault.png')}
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