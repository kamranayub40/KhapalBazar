import React,{useContext, useEffect, useState} from 'react'
import {View,Image,Text,Button,TouchableOpacity, FlatList} from 'react-native'
import { Icon } from 'react-native-elements'
import {AuthContext} from '../config/Auth'
import FormButton from '../config/formbutton'
import firestore from '@react-native-firebase/firestore';
// import { Card } from 'react-native-paper';

// const  Card=()=>{
//     return(

        
//         )
// }
function Home(props){
    const {user,logout}=useContext(AuthContext)
    const [post ,setPost]=useState(null)
    const [loading ,setloading]=useState(true)

    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const list=[]
                await firestore()
                .collection('Products')
                .get()
                .then((querySnapshot)=>{
                    querySnapshot.forEach(doc=>{
                        const {itemName,prise,postimg}=doc.data()
                        list.push({
                            prise:prise,
                            itemName:itemName,
                            postimg:postimg
                        })
                    })
                })
                setPost(list)
                if(loading)[
                    setloading(false)
                ]
                console.log('product',list)
            }catch(e){
                console.log(e)
            }
        }
        fetchData();

    },[])
    return(
        <>
        <View >

        <TouchableOpacity style={{borderWidth:1,felx:1,top:6,flexDirection:'row',backgroundColor:'teal'}}>
        <View style={{textAlign:'center',marginLeft:60,flexDirection:'row',flex:1,color:"white"}}>
            <TouchableOpacity onPress={()=>props.navigation.openDrawer()}> 
            <Icon size={29}
      name='rowing' />
            </TouchableOpacity>
       
            <Text style={{fontSize:30,marginLeft:20,color:"white"}}>E-COMMERCE</Text>
            </View>
      </TouchableOpacity>
          </View>
          <Text>{user.email}</Text>
          <FormButton
            buttonTitle="Logout"
            onPress={()=>logout()} />
          

          <FlatList
          style={{}}
          data={post}
          renderItem={({item})=>{
              return ( 
              <TouchableOpacity  style={{borderEndWidth:2}}>
              <Image
        source={{ uri:item.postimg }}
        style={ { width: 150, height: 100,borderWidth:2 ,flexDirection:"row",flexWrap:"wrap" } }
      />
              <Text style={{borderWidth:2}}>{item.prise}</Text>
              <Text>{item.itemName}</Text>
      
          </TouchableOpacity>
              )
          }
        }
          keyExtractor={(item)=>item.id}
          showsVerticalScrollIndicator={false}
          />
          </>

    )
}
export default Home