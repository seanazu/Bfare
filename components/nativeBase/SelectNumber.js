import { Platform, StyleSheet, View } from 'react-native';
import React from 'react';
import { CheckIcon, Select } from 'native-base';
import { defaultColors } from '../../assets/styling/defaultColors';
import { cardShadow } from '../../assets/styling/Shadows';

const SelectNumber = ({ defaultNumber }) => {
  const[service, setService] = React.useState(defaultNumber);
  const numberOfPassengers = 8 ;
  const options = []
  for(let i = 0 ; i < numberOfPassengers ; i++){
    options.push(
    <Select.Item key={i} label={i.toString()} value={i.toString()} />
    )
  }


  return (
    <View style={[styles.container, styles.shadowProp]}>
      <Select 
        style={{}}
        selectedValue={service} 
        w="68" 
        h={Platform.OS === 'ios' ? "6" : '8'}
        borderColor={defaultColors.black}
        borderRadius="lg"
        _selectedItem={{ bg: "teal.600", endIcon: <CheckIcon size="5" />}} 
        onValueChange={itemValue => setService(itemValue)}
       >
        {options}
      </Select>
    </View>
  )
}

export default SelectNumber

const styles = StyleSheet.create({
    container:{
        backgroundColor:defaultColors.white, 
        width:68, 
        borderRadius:9
    },
    shadowProp:cardShadow,

})