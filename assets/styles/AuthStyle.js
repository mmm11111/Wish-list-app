import { StyleSheet } from "react-native";

const AuthStyle = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'brown'
    },

    inputContainer:{
        width: '80%'
    },
     input:{
         backgroundColor:"green",
         paddingHorizontal:15,
         paddingVertical:10,
         borderRadius:10,
         marginTop:5,
         color:'white'
     },
     buttonContainer:{
         width: '60%',
         justifyContent:'center',
         alignItems:'center',
         marginTop:25

     },
     button:{
         backgroundColor: "brown",
         width:'100%',
         padding: 15,
         borderRadius:10,
         alignItems:'center'

     },
     buttonText:{
         color:'white',
         fontWeight:'700',
         fontSize:16

     },
     buttonOutline:{
         marginTop: 5,
         backgroundColor:'white',
         borderColor:'black',
         borderWidth:2


     },
     buttonOutlineText:{

     },
     pic:{
        width: "100%",
        height:"100%",
        resizeMode: "cover",
        position:'absolute'
     }


})

export default AuthStyle;

