import React, { useEffect } from "react";
import { LogBox, StyleSheet } from "react-native";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// UI libraries  
import { NativeBaseProvider} from "native-base";

// Screens
import HomeScreen from "./screens/HomeScreen";
import FlightsScreen from "./screens/FlightsScreen";
import AccommodationScreen from "./screens/AccommodationScreen";
import DealsScreen from "./screens/DealsScreen";
import SearchingScreen from "./screens/SearchingScreen";
import EventScreen from "./screens/EventScreen";
import UserSettingScreen from "./screens/UserSettingScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import OnBoarding from "./screens/OnBoarding";
import LoginAndRegister from "./screens/LoginAndRegister";

// Redux 
import { Provider } from "react-redux";
import store from './redux/store';

const Stack = createNativeStackNavigator()


export default function App() {

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, [])

  return (
   
      <NavigationContainer> 
        <Provider store={store} >
        <NativeBaseProvider>
          <Stack.Navigator>
            <Stack.Screen 
              name="Welcome" 
              component={WelcomeScreen} 
              options={{headerShown:false}}
              />
            <Stack.Screen 
              name="OnBoarding" 
              component={OnBoarding} 
              options={{headerShown:false}}
              />
            <Stack.Screen 
              name="LoginAndRegister" 
              component={LoginAndRegister} 
              options={{headerShown:false}}
              />
            <Stack.Screen 
              name="Home" 
              component={HomeScreen} 
              options={{headerShown:false}}
              />
            <Stack.Screen
              name="Searching" 
              component={SearchingScreen}
              options={{headerShown:false}}
              />
            <Stack.Screen
              name="EventScreen" 
              component={EventScreen} 
              options={{headerShown:false}}
              />
            <Stack.Screen
              name="FlightsScreen" 
              component={FlightsScreen} 
              options={{headerShown:false}}
              />
            <Stack.Screen
              name="AccommodationScreen" 
              component={AccommodationScreen} 
              options={{headerShown:false}}
              />
            <Stack.Screen
              name="DealsScreen" 
              component={DealsScreen} 
              options={{headerShown:false}}
              />
            <Stack.Screen
              name="UserSettingsScreen" 
              component={UserSettingScreen} 
              options={{
                title:'Account'
              }}
              />
          </Stack.Navigator>
        </NativeBaseProvider>    
        </Provider>
      </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center'
  },
})