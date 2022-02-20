import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ImageBackground,Pressable,Button } from 'react-native';

import LoginScreen from './Pages/LoginScreen';
import HomeScreen from './Pages/HomeScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (

    

    
    <NavigationContainer> 
      

    <Stack.Navigator>

    
      <Stack.Screen options={{headerShown:false}} name = "Login" component={LoginScreen} />  
       <Stack.Screen  name = "Home" component={HomeScreen} />   

    </Stack.Navigator>



    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
   // backgroundColor: '#fff',
   backgroundColor:'green',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  }
  
});
