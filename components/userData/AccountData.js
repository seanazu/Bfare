import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import SubjectBox from './SubjectBox'

const AccountData = () => {

  const boxTheme = ['alerts', 'cart', 'bookings', 'sold', 'wallet', 'chat']

  const renderItem = ({ item }) => (
    <SubjectBox theme={item} />
  );


  return (
    <View style={styles.container}>  
      <FlatList
        data={boxTheme}
        numColumns={3}
        renderItem={renderItem}
        keyExtractor={theme => theme}  
        showsHorizontalScrollIndicator={false}
        bounces={false}
      />
    </View>
  )
}

export default AccountData

const styles = StyleSheet.create({
    container:{
        marginTop:20,
        width:'90%', 
        alignItems:'center',
        marginLeft:5
    },
    
})