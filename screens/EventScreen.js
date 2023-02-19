import { ImageBackground, StatusBar, ScrollView, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import React from 'react';

//Components
import Post from '../components/Post';
import AppText from '../components/AppText';
import ArrowDown from '../components/icons/ArrowDown';
import SortIcon from '../components/icons/SortIcon';
import FilterIcon from '../components/icons/FIlterIcon';

// UI Library 
import LinearGradient from 'react-native-linear-gradient';
import { defaultColors } from '../assets/styling/defaultColors';

// Redux
import { useSelector } from 'react-redux';
import { selectBasketItems } from '../redux/features/basketSlice';


const EventScreen = ({ route, currentLocation }) => {
  
    const items = useSelector(selectBasketItems);

    const { header, subHeader, imgUrl } = route.params;

    const flights = [
      {
        flightNumber:'12345',
        from:'TLV',
        to:'LTN',
        company:'easyJet',
        outboundDepartureTime:'18:30',
        outBoundLandingTime:'20:30',
        returnDepartureTime:'5:30',
        returnLandingTime:'7:30',
        price:'1,548',
        numberOfTickets:'3',
        imgUrl:'https://play-lh.googleusercontent.com/Thn1XxCmoZ9VdmKBfAP5Hvi8EZ8D6_ffGSDaiJTohJulisRXGsfkO_7OH-_ivbSCbrA'
      },
      {
        flightNumber:'12346',
        from:'TLV',
        to:'LTN',
        company:'easyJet',
        outboundDepartureTime:'18:30',
        outBoundLandingTime:'20:30',
        returnDepartureTime:'5:30',
        returnLandingTime:'7:30',
        price:'1,548',
        numberOfTickets:'3',
        imgUrl:'https://play-lh.googleusercontent.com/Thn1XxCmoZ9VdmKBfAP5Hvi8EZ8D6_ffGSDaiJTohJulisRXGsfkO_7OH-_ivbSCbrA'
      },
      {
        flightNumber:'12347',
        from:'TLV',
        to:'LTN',
        company:'easyJet',
        outboundDepartureTime:'18:30',
        outBoundLandingTime:'20:30',
        returnDepartureTime:'5:30',
        returnLandingTime:'7:30',
        price:'1,548',
        numberOfTickets:'3',
        imgUrl:'https://play-lh.googleusercontent.com/Thn1XxCmoZ9VdmKBfAP5Hvi8EZ8D6_ffGSDaiJTohJulisRXGsfkO_7OH-_ivbSCbrA'
      },

    ]

    const renderItem = ({ item }) => (
      <Post 
        flightNumber={item.flightNumber}
        from={item.from}
        to={item.to}
        outboundDepartureTime={item.outboundDepartureTime}
        outBoundLandingTime={item.outBoundLandingTime}
        returnDepartureTime={item.returnDepartureTime}
        returnLandingTime={item.returnLandingTime}
        price={item.price}
        numberOfTickets={item.numberOfTickets}
        imgUrl={item.imgUrl}
      />    
    
    );

 


    return (
      <View style={styles.container}>

          {/* Header */}
          <View style={styles.headerContainer}>
            <StatusBar backgroundColor={defaultColors.black} barStyle="light-content" />
            <ImageBackground
              source={{uri : imgUrl}}
            >
              <LinearGradient
                  colors={[defaultColors.linearGradientGrey, defaultColors.black]} 
                  style={styles.linearGradient}>

                  <View>
                      <AppText style={styles.headerText}>
                        {header}
                        {items.length}
                      </AppText>
                  </View>

                  <View>
                      <AppText style={styles.subHeaderText}>
                        {subHeader}
                      </AppText>
                  </View>

                  <View style={styles.fromContainer}>
                    <AppText style={styles.fromText}>
                      From :
                    </AppText>
                    <TouchableOpacity style={styles.locationButton}>
                      <AppText style={styles.fromText}>
                        {currentLocation} Tel Aviv 
                      </AppText> 
                      <ArrowDown size={20} color={defaultColors.greyText} />
                    </TouchableOpacity>
                  </View>

              </LinearGradient>
            </ImageBackground>
          </View>

          <View style={styles.filterSortContainer}>
            <TouchableOpacity style={styles.sortButton} >
            <SortIcon size={40} />
            </TouchableOpacity>
            <View style={styles.filterButton}>
            </View>
            <TouchableOpacity >
              <FilterIcon />
            </TouchableOpacity>
          </View>

          {/* Body */}
          <View style={styles.bodyContainer}>
     
              <View >
                <FlatList 
                  data={flights}
                  renderItem={renderItem}
                  keyExtractor={item => item.flightNumber}  
                  showsHorizontalScrollIndicator={false}
                  bounces={false}
                />
              </View>

          </View>
      </View>
    )
}

export default EventScreen

const styles = StyleSheet.create({
    container:{
      flex:1
    },
    headerContainer:{
      width:'100%', 
    },
    bodyContainer:{
      flex:1, 
      paddingBottom:10
    },
    linearGradient:{
      alignItems:'flex-start', 
      flexDirection:'column', 
      height:240
    },
    headerText:{
      paddingTop:110,
      paddingLeft:30,
      marginTop:3,
      fontSize:20, 
      color:defaultColors.white,
      fontWeight:'600'
    },
    subHeaderText:{
      paddingLeft:30,
      paddingBottom:20,
      marginTop:3,
      fontSize:16, 
      color:defaultColors.greyText,
      fontWeight:'400',
    },
    fromContainer:{
      alignSelf:'center',  
      backgroundColor:defaultColors.pointThreeWhite, 
      borderRadius:10, 
      flexDirection:'row', 
      paddingHorizontal:10
    },
    fromText:{
      marginTop:3,
      marginBottom:3,
      borderRadius:5,
      fontSize:16, 
      color:defaultColors.greyText,
      fontWeight:'400'
    },
    locationButton:{
      flexDirection:'row'
    },
    filterSortContainer:{
      flexDirection:"row", 
      justifyContent:'space-evenly', 
      paddingTop:10, 
      backgroundColor:defaultColors.greyWhite
    },
    sortButton:{
      flexDirection:'row', 
      alignItems:'center'
    },
    filterButton:{
      borderLeftWidth:1, 
      height:16, 
      alignSelf:'center'
    }
})