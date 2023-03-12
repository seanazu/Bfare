import { StyleSheet, View } from 'react-native';
import React from 'react';

// Components
import AppText from '../components/AppText';


const AddPost = () => {
  return (
    <View style={styles.container}>
      <AppText>AddPost</AppText>
    </View>
  )
}

export default AddPost

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})