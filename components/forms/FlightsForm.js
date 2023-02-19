import { StyleSheet, TouchableOpacity, View, Platform} from 'react-native'
import React, { useState } from 'react';

// Components
import AppText from '../AppText';

// UI Library 
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import EntypoIcon from 'react-native-vector-icons/Entypo'; 
import FeatherIcon from 'react-native-vector-icons/Feather'; 
import SelectNumber from '../nativeBase/SelectNumber';
import SearchButton from '../buttons/SearchButton';

// Styling
import { defaultColors } from '../../assets/styling/defaultColors';
import { cardShadow } from '../../assets/styling/Shadows';

const FlightsForm = ({ beSpontaneuos }) => {
    const[from, setFrom] = useState('Tel Aviv');
    const[to, setTo] = useState('Sofia');
  
    const[date, setDate] = useState('');
    const[showDate, setShowDate] = useState('');

   

  return (
    <View style={styles.searchForm}>
         
        <View style={styles.fromToInputContainer}>

            <TouchableOpacity style={styles.fromToInput} >
              <FontAwesomeIcon name="plane-departure" size={15} color={defaultColors.black} />
              <View style={styles.formSubHeaderText}>
                <AppText style={styles.formHeaderText}>
                  Leaving From
                </AppText>
                <AppText style={styles.formSubHeaderText}>
                  {from}
                </AppText>
              </View>
            </TouchableOpacity>

            <View style={styles.fromToBorder} />

            <TouchableOpacity style={[styles.swapFromTo, styles.shadowProp]} activeOpacity={.6}>
              <EntypoIcon name='chevron-up' size={20} color={defaultColors.black}  />
              <EntypoIcon name='chevron-down' size={20} color={defaultColors.black}  />
            </TouchableOpacity>

            <TouchableOpacity style={styles.fromToInput} >
              <FontAwesomeIcon name="plane-arrival" size={15} color={defaultColors.black} />
              <View style={styles.formSubHeaderText}>
                <AppText style={styles.formHeaderText}>
                  Going to
                </AppText>
                <AppText style={styles.formSubHeaderText}>
                  {to}
                </AppText>
              </View>
            </TouchableOpacity>

        </View>
              

        {!beSpontaneuos ? 
            <View style={styles.formInputContainer}>
                <TouchableOpacity style={styles.changeInputButton}>
                  <View>
                    <AppText style={styles.formHeaderText}>
                      Departure
                    </AppText>
                    <AppText style={styles.formSubHeaderText}>
                      {'01/01/2023'}
                    </AppText>
                  </View>
                </TouchableOpacity>    
                <View style={styles.datesBorder} />    
                <TouchableOpacity style={styles.changeInputButton}>
                  <View>
                    <AppText style={styles.formHeaderText}>
                      Return
                    </AppText>
                    <AppText style={styles.formSubHeaderText}>
                      {'02/01/2023'}
                    </AppText>
                  </View>
                </TouchableOpacity>
            </View>  : <></>
        }
        

        <View style={styles.formInputContainer}>
            <View style={styles.passengerIcon}>
              <FeatherIcon name='user' size={30} color={defaultColors.black}/>
            </View>
            
            <View style={styles.passengers}>
              <View style={styles.dropDownContainer}>
                <AppText style={styles.formHeaderText}>
                  Adults
                </AppText>
                <SelectNumber defaultNumber={'1'}/>
              </View>
            </View>

            <View style={styles.passengers}>
              <View style={styles.dropDownContainer}>
                <AppText style={styles.formHeaderText}>
                  Children
                </AppText>
                <SelectNumber defaultNumber={'0'} />
              </View>
            </View>
        </View>

        <SearchButton />
    </View>
  )
}

export default FlightsForm

const styles = StyleSheet.create({
      shadowProp: cardShadow,
      formHeaderText:{
          color:defaultColors.greyText,
          fontWeight:'400',
      }, 
      formSubHeaderText:{
          fontWeight:'400', 
          fontSize:18
      }, 
      searchForm:{
        paddingTop:10,
        alignItems:'center',
        paddingHorizontal:10,
        width:'100%'
      },
      textInput:{
        width:'90%'
      }, 
      fromToInputContainer:{
        flexDirection:'column', 
        width:'85%',
        borderRadius:10,
        alignItems:'center',
        backgroundColor:defaultColors.xLightBlue,
        width:'85%',
        borderRadius:10,
      },
      fromToInput:{
        backgroundColor:defaultColors.xLightBlue,
        width:'90%',
        height:45, 
        alignItems:'center', 
        flexDirection:'row', 
        justifyContent:'space-around', 
        margin:4, 
        position:'relative'
      },
      fromToBorder:{
        width:'101%', 
        borderBottomColor:defaultColors.borderColor, 
        borderBottomWidth:0.5, 
        height:5, 
      }, 
      formSubHeaderText:{
        marginTop:3,
        fontSize:15,
        fontWeight:'500',
        flexDirection:'column', 
        width:'80%'
      },
      swapFromTo:{
        position:'absolute', 
        marginTop:44,
        right:50,
        zIndex:2, 
        backgroundColor:defaultColors.white,
        borderColor:'rgba(155,155,155)',
        borderWidth:1, 
        borderRadius:10, 
        flexDirection:'row',
      }, 
      formInputContainer:{
        backgroundColor:defaultColors.xLightBlue,
        width:'85%',
        borderRadius:10,
        height: Platform.OS === 'android' ? 60 : 45, 
        alignItems:'center', 
        flexDirection:'row', 
        marginTop:10, 
        position:'relative'
      }, 
      changeInputButton:{
        width:'40%',
        marginLeft:25,
      },
      passengers:{
        width:'30%',
        alignSelf:'center'
      },
      datesBorder:{
        height:20, 
        width:2,
        borderRightColor:defaultColors.borderColor, 
        borderRightWidth:0.5, 
        marginRight:20
      },
      dropDownContainer:{
        alignItems:'center'
      },
      passengerIcon:{
        marginHorizontal:20
      }
})