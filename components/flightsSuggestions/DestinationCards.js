import { FlatList, StyleSheet, View } from 'react-native';
import React, { useLayoutEffect } from 'react';

// Components
import DestinationCard from './DestinationCard';

// Navigation 
import { useNavigation } from '@react-navigation/native';

// Styling 
import { defaultColors } from '../../assets/styling/defaultColors';

const DestinationCards = () => {
    const navigation = useNavigation()
    
    useLayoutEffect(() =>{
      navigation.setOptions({
        headerShown:false
      })
    })
    
    navigateToSearchScreen = () =>{
        navigation.navigate("Searching")
    }
    
    const suggestionsData = [
      {
        imageUrl: "https://www.londonworld.com/jpim-static/image/2022/02/21/12/AdobeStock_97690567.jpeg?width=1200&enable=upscale",
        header: "Flights to London",
        subHeader: "The holiday season is coming soon"
      },
      {
        imageUrl: "https://vickyflipfloptravels.com/wp-content/uploads/2020/02/UP-the-mountain-in-Bansko.jpg.webp",
        header: "Bansko ski resorts",
        subHeader: "Affordable ski resorts in eastern europe gem"
      },
      {
        imageUrl: "https://static.dezeen.com/uploads/2019/09/qatar-2022-world-cup-emblem_dezeen_2364_col_6.jpg",
        header: "FIFA World cup",
        subHeader: "get the chance to see the best football teams"
      }
    ];
    
    const renderItem = ({ item }) => (
      <DestinationCard key={item.header} imgUrl={item.imageUrl}  header={item.header} subHeader={item.subHeader} />
    );

    return (
      <View style={styles.container}>
        <FlatList
          data={suggestionsData}
          renderItem={renderItem}
          keyExtractor={item => item.header}  
          showsHorizontalScrollIndicator={false}
        />
      </View>
    )
}

export default DestinationCards

const styles = StyleSheet.create({
    container:{
      flex:1
    }
})