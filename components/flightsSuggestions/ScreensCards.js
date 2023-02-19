import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'native-base'
import ScreenCard from './ScreenCard';

const ScreensCards = () => {

    const suggestionsData = [
        {
          screen: "PackagesScreen",
        },
        {
          screen: "HotelsScreen",
        },
        {
          screen: "DiscoverScreen",
        },
        {
          screen: "CarRentalScreen",
        }
    ];

    const renderItem = ({ item }) => (
      <ScreenCard key={item.screen} screen={item.screen} />
    );

    return (
      <View>
        <FlatList 
          style={styles.container}
          data={suggestionsData}
          renderItem={renderItem}
          horizontal
          keyExtractor={item => item.header}  
          showsHorizontalScrollIndicator={false}
        />
      </View>
    ) 
}

export default ScreensCards

const styles = StyleSheet.create({
  container:{
    height:115,
    marginTop:10
  }
})