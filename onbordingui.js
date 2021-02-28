import React from 'react'
import {View,Text,Button,TouchableOpacity,Image} from 'react-native'
// import { AntDedign } from 'react-native-vector-icons'
import Onboarding from 'react-native-onboarding-swiper';
// import { IconFill, IconOutline } from "@ant-design/icons-react-native";


function onbordingui(props){
    return(
        
        <Onboarding
        onSkip={()=>props.navigation.navigate("Login")}
        onDone={()=>props.navigation.navigate("Login")}

        pages={[
          {
            backgroundColor: 'teal',
            image: <Image source={require('../images/onb1.jpg')} />,
            title: 'KhapalShop',
            subtitle: 'CASUAL SHIRT',
          },
          {
            backgroundColor: 'teal',
            image: <Image source={require('../images/onb5.jpg')} />,
            title: 'KhapalShop',
            subtitle: 'CASUAL SHIRT',
          },
          {
            backgroundColor: 'teal',
            image: <Image source={require('../images/onb3.jpg')} />,
            title: 'KhapalShop',
            subtitle: 'CASUAL SHIRT',
          },
          {
            backgroundColor: 'green',
            image: <Image source={require('../images/onb2.jpg')} />,
            title: 'KhapalShop',
            subtitle: 'CASUAL SHOES',
          },
        
        ]}
      />
    )
}
export default onbordingui