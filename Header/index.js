import {  Image,View } from 'react-native'
import React from 'react'
import styles from './style'


const Header = () => {
  return (
    <View style = {styles.container}>
      <Image 
       style = {styles.logo} source = {require('../assets/logos.jpg')}/>

     <Image 
       style = {styles.secondLogo} source = {require('../assets/logo3.png')}/>
      
    </View>
  )
}

export default Header

