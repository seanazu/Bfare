import { SafeAreaView, StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react';

// UI Libraries 
import * as Animatable from'react-native-animatable';
import * as Progress from 'react-native-progress';

// Navigation
import { useNavigation } from '@react-navigation/native';


const SearchingScreen = ({ route }) => {
    const navigation = useNavigation();
    const { screen, imgUrl } = route.params

    useEffect(()=>{
      setTimeout(()=>{
        if(screen){
          navigation.navigate(screen,{
            imgUrl:imgUrl
          })
        } else {
          navigation.goBack()
        }
      },3000)
    },[])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.animationContainer}>
        <Animatable.Image 
          source={require('../assets/gif/searching.gif')}
          animation='slideInUp'
          iterationCount={1}
          style={styles.animation}
          />
  
        <Animatable.Text
          animation='slideInUp'
          iterationCount={1}
          style={styles.text}
          >
          Searching
        </Animatable.Text>
        <Animatable.Text
          animation='slideInUp'
          iterationCount={1}
          style={styles.progressCircle}
        >
            <Progress.Circle size={60} indeterminate={true} color='black' />
        </Animatable.Text>
      </View>

      
    </SafeAreaView>
  )
}

export default SearchingScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    animationContainer:{
      marginBottom:40
    },
    animation:{
        height:250,
        width:250
    }, 
    text:{
        fontSize:25, 
        marginVertical:10,
        color:'black',
        fontWeight:'bold',
        textAlign:'center',
        flexDirection:'column'
    }, 
    progressCircle:{
        alignSelf:'center',
        marginTop:40
    }
})