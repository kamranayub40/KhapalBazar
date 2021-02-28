import React, { useEffect, useState,ActivityIndicator } from 'react'
import View from "react-native"
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createDrawerNavigator} from '@react-navigation/drawer'
import auth from '@react-native-firebase/auth'
import Home from '../components/Home'
import onbordingui from '../components/onbordingui'
import Login from '../components/Login'
import signup from '../components/signup'
import AuthContext from '../config/Auth'
import AsyncStorage from '@react-native-community/async-storage'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const Stack=createStackNavigator()
const Drawer=createDrawerNavigator()
const navigationhandel=()=>({

    headerShown: false
  }
)
const Navigation=()=>{
  const [fristLounchstate,setFristLaounchState]=useState(null)
  let routeName
  useEffect(()=>{
    AsyncStorage.getItem('alreadyLaunched').then(value=>{
        if(value==null){
          AsyncStorage.setItem('alreadylaunched','true')
        setFristLaounchState(false)
        }
    })

  },[])  
  if(fristLounchstate==null){
    return null
  }else if(fristLounchstate==true){
    routeName="onboardingui"
  }else{
      routeName= "Login"
  
    }
    return(
      // <NavigationContainer>

      <Stack.Navigator initialRouteName={routeName} >
          <Stack.Screen options={navigationhandel} name="onboardingui" component={onbordingui}/>
  
          <Stack.Screen options={navigationhandel} name="Login" component={Login}/>
          <Stack.Screen options={navigationhandel} name="signup"
           component={signup}
        options={({navigation})=>({
          title:"",
          headerStyle:{
            backgroundColor:"white",
            elevation:0,
          },
          // headerLeft:()=>{
          //   <View>
          //     <FontAwesome.Button
          //     name="long-arrow-left"
          //     size={25}
          //     background="teal"
          //     color="black"
          //     onPress={()=>navigation.navigate("Login")}

          //     />

          //   </View>
          // },
        })}
           
           />
          {/* <Stack.Screen options={navigationhandel} name="Home" component={Home}/> */}
  
  
      </Stack.Navigator>
      // </NavigationContainer>

    )

  
  }
    export default Navigation
    


  // const[user,setUser]=useState(AuthContext)
  // 
  // const onAuthStateChanged=(user)=>{
  //   setUser(user);
  //   if(intializing)setInitializing(false)

  // }
  // useEffect(()=>{
  //   const subscriber=auth().onAuthStateChanged(onAuthStateChanged)
  //   return subscriber

  // },[])
  // if(intializing)return null;
  //   return(
        
        
  //       <NavigationContainer >
          
  //       {/* <Drawer.Navigator > */}
  //         {user?<Home/>:<LoginStack/>}
  //       {/* drawerContent={props=><Sidebar {...props}/>} */}
       
  //          {/* <Drawer.Screen name="Home" component={Home}  /> 
  //         <Drawer.Screen name="Login" component={LoginStack}  /> */}

         
      





  //       {/* </Drawer.Navigator>  */}
  //     </NavigationContainer>