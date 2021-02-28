import React, { useContext, useState } from 'react'
import {View,Text,Button,StyleSheet,TouchableOpacity, Image} from 'react-native'
import { colors, Icon } from 'react-native-elements'
import { TextInput } from 'react-native-gesture-handler'
import Forminput from '../config/formInput'
import FormButton from '../config/formbutton'
import { AuthContext } from '../config/Auth'


function Login(props){

    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const{login}=useContext(AuthContext)

    return(
        <>
        <View style={styles.container}>
            <Image
            source={require('../images/logo.png')}
            style={styles.logo}
            />
            <Text style={styles.text}>KHAPALBAZAR</Text>
            <Forminput
            labelValue={email}
            onChangeText={(userEmail)=>setEmail(userEmail)}
            placeholderText="Email"
            iconType="user"
            // keyboardType="email-address "
            autoCaptalize="false"
            autoCorrect={false}

            />
            <Forminput
            labelValue={password}
            onChangeText={(userPassword)=>setPassword(userPassword)}
            placeholderText="password"
            iconType="lock"
            // keyboardType="email-address "
            autoCaptalize="none"
            secureTextEntry={true}
            />
            <FormButton
            buttonTitle="Sign in"
            onPress={()=>login(email,password)}

            />
            <TouchableOpacity style={styles.forgotButton}>
                <Text style={styles.navButton}>Forget Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.forgotButton} onPress={()=>props.navigation.navigate("signup")}>
                <Text style={styles.navButton}>Don't Have an Account?Create Here</Text>
            </TouchableOpacity>
        </View>
      </>
    )
}
const styles=StyleSheet.create({
    container:{
        backgroundColor:"white",
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        padding:20
    },
    logo:{
        height:150,
        width:150,
        resizeMode:"cover"
    },
    text:{
        fontFamily:"kufan-SemiBoldItalic",
        fontSize:20,
        marginBottom:10,
        color:"black"
    },
    navButton:{
        marginTop:2,
        

    },
    forgotButton:{
        marginVertical:20
    },
    navButtonText:{
        fontSize:18,
        fontWeight:'500',
        color:"white",
        fontFamily:"lato-regular"
    }

})

export default Login
//         <View >

//     <TouchableOpacity style={{borderWidth:1,felx:1,top:6,flexDirection:'row',backgroundColor:'teal'}}>
//     <View style={{textAlign:'center',marginLeft:60,flexDirection:'row',flex:1,color:"white"}}>
//         <TouchableOpacity onPress={()=>props.navigation.navigate("Home")}> 
//         <Icon size={29}
//   name='rowing' />
//         </TouchableOpacity>
   
//         <Text style={{fontSize:30,marginLeft:70,color:"white"}}>LOGIN</Text>
//         </View>
//   </TouchableOpacity>
//       <View style={styles.form}>
//           <TextInput style={styles.formInput}  placeholder="Enter your Email"/>
//           <TextInput style={styles.formInput}  placeholder="Enter your password"/>
//           <Button title="Login"/>
//           <Text style={{textAlign:"center"}}>Are You New?<TouchableOpacity style={{borderRadius:4,borderWidth:2,marginBottom:4,backgroundColor:"darkblue"}} onPress={()=>props.navigation.navigate("signup")}><Text style={{color:"white"}}>SIGNUP</Text></TouchableOpacity></Text>



//       </View>
//       </View>