import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { auth } from './firebase'
import { useNavigation } from '@react-navigation/core'

const HomeScreen = () => {

    const navigation = useNavigation();

     const handleSignout=()=>{
       auth.signOut().then(()=>{
         navigation.replace("Login")

       })
     }

  return (
    <View style = {styles.container}>
      <Text>user-Email:{auth.currentUser?.email}</Text>
      <TouchableOpacity 
      onPress={handleSignout}
      style = {styles.button}
      >
      <Text style = {styles.buttonText}>Sign out</Text>

      </TouchableOpacity>
    </View>
  )
}

    
  


export default HomeScreen

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:"center",
        alignItems:'center'
    
      },
    
    
      buttonText:{
        color:'white',
        fontWeight:'500',
        fontSize:16,
    
      },
      button:{
        backgroundColor: "brown",
               width:'100%',
               padding: 15,
               borderRadius:10,
               alignItems:'center',
               marginTop: 40
      }
    

    
})