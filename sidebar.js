import React from 'react'
import {View,Text,styleSheet} from 'react-native'
import {DrawerNavigationItem} from '@react-navigation/drawer'
// import Navigation from './Navigation'
import {DrawerContentScrollView,DrawerItemList} from '@react-navigation/drawer'
import { Avatar } from 'react-native-paper';



function Sidebar(props){
    return(

        <DrawerContentScrollView {...props}>
            <View>
            {/* <Avatar.Image size={100} style={{marginLeft:30}} source={require('../config/avtar.png')} /> */}
            <Text style={{color:"blue",marginLeft:30}}>KAMRAN AYOUB</Text>
            </View>
           
           <DrawerItemList {...props}/>

        </DrawerContentScrollView> 

    )

   
    
}
export default Sidebar