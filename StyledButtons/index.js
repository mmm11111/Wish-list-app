import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './style'


const StyledButtons = (props) => {
    const {content, onPress} = props;

  return (
    <View style = {styles.container}>
       <Pressable
       
       style = {styles.button}
       onPress = {()=> onPress()}
      
       
       >

           <Text style = {styles.text}> {content}</Text>




       </Pressable>



    </View>
  )
}

export default StyledButtons

