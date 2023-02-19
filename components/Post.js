import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'; 

// Components
import AppText from './AppText';

// UI Libararies 
import ArrowRight from '../assets/animations/ArrowRight';

// Styling
import { defaultColors } from '../assets/styling/defaultColors';
import { cardShadow } from '../assets/styling/Shadows';

// Redux
import { useDispatch } from 'react-redux';
import { addToBasket } from '../redux/features/basketSlice';

const Post = ({ flightNumber, from, to, company, outboundDepartureTime, outBoundLandingTime, returnDepartureTime, returnLandingTime, price, numberOfTickets, imgUrl }) => {

  const dispatch = useDispatch();

  const addItemToBasket = () => {
     dispatch(addToBasket({flightNumber, from, to, company, imgUrl}))
  }

  return (
    <View activeOpacity={.7} style={[styles.container, styles.shadowProp]}>
      <View style={styles.postBody}> 
        <View>
          <View style={styles.flightToContainer}>
            <Image
              style={styles.image}
              source={{
                uri:imgUrl
              }}
            />
            <View>
              <AppText>{from}</AppText>
              <AppText>{outboundDepartureTime}</AppText>
            </View>
            <ArrowRight/>
            <View>
              <AppText>{to}</AppText>
              <AppText>{outBoundLandingTime}</AppText>
            </View>
          </View>
          
          <View style={styles.flightBackContainer}>
            <Image
              style={styles.image}
              source={{
                uri:imgUrl
              }}
            />
            <View>
              <AppText>{to}</AppText>
              <AppText>{returnDepartureTime}</AppText>
            </View>
            <ArrowRight/>
            <View>
              <AppText>{from}</AppText>
              <AppText>{returnLandingTime}</AppText>
            </View>
          </View>
  
        </View>
        <View style={styles.ticketsPriceContainer}>
          <View style={styles.priceContainer}>
            <AppText style={styles.priceTextTitle}>
              price
            </AppText>
            <AppText style={styles.priceText}>
              {price} ₪
            </AppText>
          </View>
          <View style={styles.ticketNumberContainer}>
            <AppText style={styles.numTextTitle}>
              num of tickets
            </AppText>
            <AppText style={styles.numText}>
              {numberOfTickets}
            </AppText>
          </View>
        </View>
      </View>

      <View style={styles.buttonsContainer}>
       
        <TouchableOpacity style={styles.button} onPress={addItemToBasket} > 
          <AppText style={styles.buttonText}>Buy</AppText>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} > 
          <AppText style={styles.buttonText}>Switch</AppText>
        </TouchableOpacity>

      </View>

    </View>
  )
}

export default Post

const styles = StyleSheet.create({
  container:{
    width:350, 
    height:200, 
    marginTop:20, 
    marginBottom:15, 
    alignSelf:'center', 
    borderRadius:20, 
    backgroundColor:defaultColors.white, 
    padding:10
  },
  shadowProp: cardShadow,
  image:{
    width:50,
    height:50,
    borderRadius:25,
    margin:7,
  }, 
  button:{
    backgroundColor:defaultColors.lightBlue,
    width:'35%',
    alignSelf:'center',
    borderRadius:10,
    height:30, 
    marginBottom:10
  }, 
  buttonText:{
    alignSelf:'center',
    marginTop:3,
    fontWeight:'700',
    fontSize:18, 
    color:'white',
  },
  flightBackContainer:{
    flexDirection:'row', 
    alignItems:'center'
  }, 
  postBody:{
    flexDirection:'row'
  },
  flightToContainer:{
    flexDirection:'row', 
    alignItems:'center'
  },
  ticketsPriceContainer:{
    width:'45%', 
    height:'auto', 
    borderColor:'rgba(0,0,0,0.2)', 
    borderLeftWidth:1, 
    marginLeft:15
  },
  priceContainer:{
    marginTop:15
  },
  priceTextTitle:{
    alignSelf:'center', 
    color:'rgba(0,0,0,0.3)'
  },
  priceText:{
    alignSelf:'center', 
    fontSize:20
  },
  ticketNumberContainer:{
    marginTop:10
  },
  numTextTitle:{
    alignSelf:'center', 
    color:'rgba(0,0,0,0.3)'
  },
  numText:{
    alignSelf:'center', 
    fontSize:20
  },
  buttonsContainer:{
    flexDirection:'row', 
    justifyContent:"space-evenly", 
    marginTop:20
  }
})