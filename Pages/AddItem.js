import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AuthStyle from '../assets/styles/AuthStyle'
import { View, Text, Alert, StyleSheet } from 'react-native'
import { Button } from 'react-native'
import { TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native'


export default function AddItem() {
  return (
    <SafeAreaView style={AuthStyle.container}>
        <View style = {styles.itemContainer}>
          <Text style = {styles.title}>
            WISH-LIST
          </Text>
          <TextInput
          style = {styles.inputContainer}
          placeholder="Item..."
          placeholderTextColor="grey"
          
          >

          </TextInput>
          <TouchableOpacity
          
          style= {styles.button}
    
          >
            <Text style= {styles.buttonText}>Add an Item</Text>
    
             </TouchableOpacity>
          

          
        </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  
  itemContainer:{
    width:'100%',
    height:"100%",
      padding:16,
      borderRadius:8,
      backgroundColor:"white"
  },
  
  

title:{
  fontSize:21,
  fontWeight:'bold',
  color:"blue",
  borderRadius:2
},
button:{
  
  backgroundColor:"brown",
  padding:16,
  borderRadius:7,
  alignItems:"center",
  marginTop:16
  
},
inputContainer:{
  

},
buttonText:{
  color:'blue',
  fontSize:18,
  fontWeight:'bold'

}

})
