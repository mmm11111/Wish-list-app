import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ImageBackground,Pressable,Button } from 'react-native';

import LoginScreen from './Pages/LoginScreen';
import HomeScreen from './Pages/HomeScreen';
import AddItem from './Pages/AddItem';
import FriendScreen from './Pages/FriendScreen';
import Notifications from './Pages/Notifications';
import ListScreen from './Pages/ListScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (

    

    
    <NavigationContainer> 
      

    <Stack.Navigator>

    
      <Stack.Screen options={{headerShown:false}} name = "Login" component={LoginScreen} />  
      <Stack.Screen  name = "Home" component={HomeScreen} />   
      <Stack.Screen name = "AddItem" component={AddItem} />
      <Stack.Screen name = "FriendScreen" component={FriendScreen} />
      <Stack.Screen name = "Notifications" component={Notifications} />
      <Stack.Screen name = "ListScreen" component={ListScreen} />

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
