import { FlatList, Image, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useLayoutEffect } from 'react';

// Navigation
import { useNavigation } from '@react-navigation/native';

// UI Libararies
import { ScrollView } from 'native-base'; 
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// Components
import TicketTypes from '../components/TicketTypes';
import SuggestionCard from '../components/SuggestionCard';
import AppText from '../components/AppText';
import ArrowDown from '../components/icons/ArrowDown';
import SearchIcon from '../components/icons/SearchIcon';

// Styles
import { defaultColors } from '../assets/styling/defaultColors';

//import DateTimePicker from '@react-native-community/datetimepicker';

const HomeScreen = () => {
  const navigation = useNavigation()


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
    <SuggestionCard imgUrl={item.imageUrl}  header={item.header} subHeader={item.subHeader} />
  );

  const goToUserSettings = () =>{
    navigation.navigate('UserSettingsScreen')
  }

  return (
    <View style={{flex:1}} >
      <ScrollView >
         {/* Header */}
        <SafeAreaView style={styles.headerContainer}>
    
          <View style={styles.headerView}>
  
            <Image
              style={styles.image}
              source={require('../assets/png/logo.png')}
            />
    
            <View style={styles.textContainer}>
  
              <AppText style={[styles.text, styles.textHeader]}>
                Find Tickets around:
              </AppText>
              
              <TouchableOpacity style={styles.dropDownButton}>
                <AppText style={[styles.text, styles.textSubHeader]}>
                  Current Location 
                  <TouchableOpacity style={styles.dropDownButton}>
                    <ArrowDown size={20} color={defaultColors.lightBlue} />
                  </TouchableOpacity>
                </AppText>
              </TouchableOpacity>
  
            </View>
    
            <TouchableOpacity style={styles.userIcon} onPress={goToUserSettings}>
              <FontAwesome 
              name='user-circle-o' 
              size={35} 
              color={defaultColors.lightBlue}
              />
            </TouchableOpacity>
            
          </View>
    
          {/* Search */}
    
          <View style={styles.searchContainer}>
            
            <View style={styles.searchInput}>
  
              <SearchIcon color={defaultColors.lightBlue} />
    
              <TextInput 
                placeholder='Find last minute tickets' 
                keyboardType='default' 
                style={styles.textInput}
              />
  
            </View>
            
          </View>
                
  
        </SafeAreaView>
        {/* Body */}
        <TicketTypes />
        <View style={{flex:1, paddingBottom:20}}>
          <View alwaysBounceVertical={false}>
            <AppText style={styles.categoryHeader}>
              trending
            </AppText>
            <FlatList 
              data={suggestionsData}
              renderItem={renderItem}
              horizontal
              keyExtractor={item => item.header}  
              showsHorizontalScrollIndicator={false}
            />
            <AppText style={styles.categoryHeader}>
              last minute
            </AppText>
            <FlatList 
              data={suggestionsData}
              renderItem={renderItem}
              horizontal
              keyExtractor={item => item.header}  
              showsHorizontalScrollIndicator={false}
            />
            <AppText style={styles.categoryHeader}>
              nearby
            </AppText>
            <FlatList 
              data={suggestionsData}
              renderItem={renderItem}
              horizontal
              keyExtractor={item => item.header}  
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
  
  
      </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  headerContainer:{
    backgroundColor:defaultColors.white,
  },
  headerView:{
    padding:5,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingBottom:4,
    width:'100%'
  },
  textContainer:{
    paddingHorizontal:10,
    alignItems:'center'
  },
  text:{
    margin:3
  },
  textHeader:{
    color:defaultColors.greyText
  },
  textSubHeader:{
    fontWeight:'bold',
    fontSize:18,
  },
  dropDownButton:{
    marginTop:-4
  },
  userIcon:{
    alignSelf:'center',
    marginBottom:10
  },
  image:{
    height:35,
    width:35,
    borderRadius:18,
    alignSelf:'center'
  },
  searchContainer:{
    alignItems:'center',
    paddingHorizontal:10,
    width:'100%'
  },
  searchInput:{
    flexDirection:'row', 
    alignItems:'center',
    backgroundColor:defaultColors.xLightBlue,
    padding:3,
    width:'85%',
    borderRadius:10,
    marginBottom:10, 
  }, 
  textInput:{
    width:'90%'
  },
  categoryHeader:{
    fontSize:18,
    color:defaultColors.pointSixBlack,
    fontWeight:'500',
    marginLeft:20,
    marginVertical:10
  }
})