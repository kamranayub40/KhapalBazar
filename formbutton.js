import { ReactNativeFirebase } from "@react-native-firebase/app";

import React from 'react'
import {Text,TextInput,Button,StyleSheet,TouchableOpacity} from 'react-native'
import { windowWidth,windowHeight } from "./dimension";

const FormButton=({buttonTitle,...rest})=>{
    return(
        <TouchableOpacity style={styles.buttoncontainer}{...rest}>
            <Text style={styles.buttonText}>{buttonTitle}</Text>
        </TouchableOpacity>
    )
}
export default FormButton
const styles=StyleSheet.create({
    buttoncontainer:{
        marginTop:1,
        width:"100%",
        height:50,
        backgroundColor:"teal",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:3
    },
    buttonText:{
        fontSize:30, 
        fontFamily:"lato-regular",
        color:"white",
        fontWeight:"bold"
    }
})