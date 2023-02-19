import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';
import TicketTypeCard from './TickeTypeCard';
import { defaultColors } from '../assets/styling/defaultColors';

const TicketTypes = ({ }) => {

  const images = {
    flightImageUrl:"https://i.pinimg.com/originals/e8/6f/51/e86f51430f34a4cf3e890bf9e5986eaf.png",
    hotelsImageUrl:"https://i.pinimg.com/736x/ba/1b/92/ba1b92fd2141aef3075da367ea805eb4.jpg",
    packagesImageUrl:"https://img.freepik.com/premium-vector/booking-travel-web-ticket-flight-online-app-rent-hotel-mobile-service-vacation-smartphone-reservation-travel-utter-vector-concept-online-smartphone-reservation-vacation-illustration_53562-14982.jpg?w=2000",


  }
  return (
    <SafeAreaView style={styles.container}>
      {/* Flat list better */}
        <ScrollView 
          contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 10, 
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <TicketTypeCard  imgUrl={images.flightImageUrl} title="flights" screen="FlightsScreen" />
          <TicketTypeCard  imgUrl={images.hotelsImageUrl} title="hotels" screen="AccommodationScreen"   />
          <TicketTypeCard  imgUrl={images.packagesImageUrl} title="packages" screen="PackagesScreen"   />
          <TicketTypeCard  imgUrl={images.hotelsImageUrl} title="hotels"  screen="AccommodationScreen"  />
        </ScrollView>
    </SafeAreaView>
  )
}

export default TicketTypes

const styles = StyleSheet.create({
    container:{
        marginBottom:8,
        minHeight:100,
        flexDirection:'row',
        justifyContent:'space-between'
    }, 

})