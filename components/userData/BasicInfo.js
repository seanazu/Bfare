import { StyleSheet, TouchableOpacity, View, FlatList } from 'react-native';
import React from 'react';

// components
import AppText from '../AppText';
import EmailIcon from '../icons/EmailIcon';
import PhoneIcon from '../icons/PhoneIcon';
import VerifiedIcon from '../icons/VerifiedIcon';
import UserIcon from '../icons/UserIcon';
import UnverifiedIcon from '../icons/UnverifiedIcon';
import ArrowRight from '../icons/ArrowRight';
import { cardShadow } from '../../assets/styling/Shadows';

// Redux
import { useSelector } from 'react-redux';
import { selectUserData } from '../../redux/features/userSlice';


const BasicInfo = () => {

  const { user } = useSelector(selectUserData);

  const userData = {
    email:user.email,
    username:user.fullName,
    phoneNumber:user.phoneNumber,
    verified:true
  }

  const userDataArr = Object.keys(userData).map((key) => {
    return {type:key,data:userData[key]}
  })

  const renderItem = ({ item }) => {
    let firstItem = '';
    let icon ;
    if(item.type === "email"){
      icon = <EmailIcon />
    }
    if(item.type === "phoneNumber"){
      icon = <PhoneIcon />
    }
    if(item.type === "username"){
      icon = <UserIcon />
    }
    if(item.type === "verified" && item.data == true){
      icon = <VerifiedIcon />
    } else if(item.type === "verified" && item.data == false){
      icon = <UnverifiedIcon />
    }


    if(item.type == "phoneNumber"){
      item.type = 'phone number'
    }
    if(item.type == 'email'){
      firstItem = styles.firstItem
    }

    return (
      <View style={[styles.infoBar,firstItem]}>
        {icon}
        <AppText style={styles.infoBarTitle}>{item.type}</AppText>
        <View style={styles.infoBarData}>
          <AppText >{item.data}</AppText>
        </View>
        <TouchableOpacity style={styles.arrowRightContainer}>
          { !(item.type === "verified" && item.data == true) ? <ArrowRight /> : <></> }
        </TouchableOpacity> 
      </View>
    )
  };
  
    return (
      <View style={styles.container}>
        <AppText style={styles.headerText} >Basic info</AppText>
        <View style={[styles.infoBarsContainer, styles.shadowProp]}>
          <FlatList 
            style={styles.infoBarList}
            data={userDataArr}
            renderItem={renderItem}
            keyExtractor={item => item.header}  
            showsHorizontalScrollIndicator={false}
          /> 
        </View>
      </View>
    )
}

export default BasicInfo

const styles = StyleSheet.create({
    container:{
        width:'90%',
        justifyContent:'center',
        marginTop:20
    },
    headerText:{
        alignSelf:'center',
        fontSize:20,
        marginBottom:10
    },
    infoBarsContainer:{
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#fcfcfc',
      paddingHorizontal:10,
      borderRadius:15
    },
    shadowProp:cardShadow,
    infoBarTitle:{
      fontSize:15,
      fontWeight:'500',
      marginLeft:20
    }, 
    infoBarData:{
      flex:1,
      flexDirection:'row',
      justifyContent:'flex-end'
    },
    infoBarList:{
      width:'104%'
    },
    infoBar:{
        width:'99%',
        paddingVertical:8,
        paddingHorizontal:10,
        borderTopWidth:0.5,
        borderTopColor:'rgba(0,0,0,0.3)',
        flexDirection:'row',
        alignItems:'center'
    },
    firstItem:{
        borderTopWidth:0,
    },
    arrowRightContainer:{
      marginLeft:10,
      left:10
    }
})