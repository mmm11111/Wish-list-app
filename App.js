import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ImageBackground,Pressable,Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground 
      source={require('./assets/shoping.jpg')}
      
      style = {styles.pic}
      />
      <View>
      <Text style = {styles.title}>Wish-list App</Text>
      </View>
      <View style ={styles.loginContainer}>
        <Pressable 
        style = {styles.login} 
        onPress = {() => {
          console.warn("logging in")   //just for now
        }}
        
        >
          <Text style = {styles.loginText}>Login</Text>
          
          
        </Pressable>
        </View>

        <View style = {styles.loginContainer}>
                
        <Pressable  
        style = {styles.login} 
        onPress = {() => {
          console.warn("logging in")   
        }}
        
        >
          <Text style = {styles.loginText}>Signup</Text>
          
          
        </Pressable>
      </View>
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pic:{
    width: "80%",
    height:"95%",
    resizeMode: "cover",
    position:'absolute'


  },
  title:{
    marginTop: '15%',
    
    alignItems:'center',
    width:'100%',
    fontWeight: '500',
    fontSize:46,
    
    
  },
  loginContainer:{
    width:'100%',
    padding:10


  },
  login:{                                                            //button
    backgroundColor:"blue",
    height:40,
    borderRadius:20,
    justifyContent:"center",
    alignItems:'center',
   
    

  },
  loginText:{
    fontSize:12,
    fontWeight:'500',
    textTransform:'uppercase',

  }

  
});
