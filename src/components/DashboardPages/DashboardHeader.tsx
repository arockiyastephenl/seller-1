import { StatusBar } from 'react-native';
import {  StyleSheet, Text, View,TouchableOpacity,ScrollView } from 'react-native';
// import {Button,  Menu, Divider, Provider,List } from 'react-native-paper';
import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProfileStyles } from "../../components/css/profile";
import { RouteStackParamList } from "../../../src/RouteStackParams";
import { StackNavigationProp } from '@react-navigation/stack';

import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Ionicons,AntDesign,Entypo } from '@expo/vector-icons';
import DashboardMain from './DashboardMain';
import '@expo/match-media'
import { useMediaQuery } from "react-responsive";
import Dashboard from '../Screens/Dashboard';
import CareCommerce from '../utils/CareCommerce';
const Tab = createMaterialTopTabNavigator();

type layout = StackNavigationProp<RouteStackParamList, 'Login'>;

function DashboardHeader() {

    const navigation = useNavigation<layout>();

    const isTabletOrMobileDevice = useMediaQuery({    
      maxDeviceWidth: 1244,
      // alternatively...
      query: "(max-device-width: 744px)"  
    });
  
    const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index: any) => {
      setToggleState(index);
    };
   
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
   
  
    return (
        <>

   {isTabletOrMobileDevice ?
        <View>
        <View style={{backgroundColor:"lightblue",height:70,padding:18,justifyContent:"center",alignItems:"flex-end"}}>
     
         <TouchableOpacity style={{padding:13,backgroundColor:"darkblue",borderRadius:9}}>
          <View>
            <Text style={{color:"white",fontWeight:"bold"}}>
             Start trail
            </Text>
           </View> 
         </TouchableOpacity>
    
        </View>
    
     <View style={{flexDirection:"column",paddingTop:16,
    //  height:65,
     backgroundColor:"#F4DAFF"}}>
    
    
     
       <View style={[ProfileStyles.container]}>

       <TouchableOpacity onPress={() => setOpen(current => !current)}> 
       <Entypo name="menu" style={{marginLeft:15}} size={37} color="black" />
       </TouchableOpacity>
      {open ?
       <View style={{flex:1,backgroundColor:"white",position:"absolute",top:44,width:205,paddingTop:30,flexDirection:"column"}}>
             <TouchableOpacity
               style={[ProfileStyles.tabs, toggleState === 1 ? ProfileStyles.touched : ProfileStyles.nonTouched]}
               onPress={() => toggleTab(1)}>
               <View>
                 <Text style={[{ fontWeight: "bold", zIndex: 2 , color: "black" }]}>
    
                   <Text  >
                Store Selection
                   </Text>
                 </Text>
               </View>
    
             </TouchableOpacity>
    
             <TouchableOpacity
               style={[ProfileStyles.tabs, toggleState === 2 ? ProfileStyles.touched : ProfileStyles.nonTouched]}
               onPress={() => toggleTab(2)}>
               <Text style={[{ fontWeight: "bold", zIndex: 2 , color: "black" }]}>
                Dashboard
               </Text>
             </TouchableOpacity>
    
             <TouchableOpacity
               style={[ProfileStyles.tabs, toggleState === 3 ? ProfileStyles.touched : ProfileStyles.nonTouched]}
               onPress={() => toggleTab(3)}>
               <Text style={[{ fontWeight: "bold", zIndex: 2 , color: "black" }]}>
                Stores
               </Text>
             </TouchableOpacity>
    
             <TouchableOpacity
               style={[ProfileStyles.tabs, toggleState === 4 ? ProfileStyles.touched : ProfileStyles.nonTouched]}
               onPress={() => toggleTab(4)}>
              <Text style={[{ fontWeight: "bold", zIndex: 2 , color: "black" }]}>
                 Location
               </Text>
    
    
             </TouchableOpacity>
    
             <TouchableOpacity
               style={[ProfileStyles.tabs, toggleState === 5 ? ProfileStyles.touched : ProfileStyles.nonTouched]}
               onPress={() => toggleTab(5)}>
              <Text style={[{ fontWeight: "bold", zIndex: 2 , color: "black" }]}>
                 Payment
               </Text>
    
    
             </TouchableOpacity>
    
             <TouchableOpacity
               style={[ProfileStyles.tabs, toggleState === 6 ? ProfileStyles.touched : ProfileStyles.nonTouched]}
               onPress={() => toggleTab(6)}>
              <Text style={[{ fontWeight: "bold", zIndex: 2 , color: "black" }]}>
                 Orders
               </Text>
    
    
             </TouchableOpacity>

             <TouchableOpacity
               style={[ProfileStyles.tabs, toggleState === 7 ? ProfileStyles.touched : ProfileStyles.nonTouched]}
               onPress={() => toggleTab(7)}>
              
              <AntDesign name="plus" size={24} color="black" />
    
             </TouchableOpacity>
    
             <TouchableOpacity
               style={[ProfileStyles.tabs, toggleState === 8 ? ProfileStyles.touched : ProfileStyles.nonTouched]}
               onPress={() => toggleTab(8)}>
             <AntDesign name="search1" size={24} color="black" />
    
    
             </TouchableOpacity>
             <TouchableOpacity
               style={[ProfileStyles.tabs, toggleState === 9 ? ProfileStyles.touched : ProfileStyles.nonTouched]}
               onPress={() => toggleTab(9)}>
             <Ionicons name="notifications" size={24} color="black" />
    
    
             </TouchableOpacity>





             
             </View>
:
""
   }
             <View style={{flex:1,flexDirection:"row",justifyContent:"flex-end"}}>
           
             <TouchableOpacity
               style={[ProfileStyles.tabs, toggleState === 10 ? ProfileStyles.touched : ProfileStyles.nonTouched]}
               onPress={() => setOpen2(current => !current)}>

            <Entypo name="menu" style={{marginLeft:15}} size={37} color="black" />
              {/* <Text style={[{ fontWeight: "bold", zIndex: 2 , color: "black" }]}>
                 Profile
               </Text> */}
    
    
             </TouchableOpacity>
             {open2 ?
       <View style={{flex:1,backgroundColor:"white",position:"absolute",top:44,width:205,paddingTop:30,flexDirection:"column"}}>
             <TouchableOpacity
               style={[ProfileStyles.tabs, toggleState === 1 ? ProfileStyles.touched : ProfileStyles.nonTouched]}
               onPress={() => toggleTab(1)}>
               <View>
                 <Text style={[{ fontWeight: "bold", zIndex: 2 , color: "black" }]}>
    
                   <Text  >
               Profile
                   </Text>
                 </Text>
               </View>
    
             </TouchableOpacity>
    
             <TouchableOpacity
               style={[ProfileStyles.tabs, toggleState === 2 ? ProfileStyles.touched : ProfileStyles.nonTouched]}
               onPress={() => toggleTab(2)}>
               <Text style={[{ fontWeight: "bold", zIndex: 2 , color: "black" }]}>
                Details
               </Text>
             </TouchableOpacity>
    
           





             
             </View>
:
""
   }
               
             </View>
    
    
         </View>
    
         <View style={ProfileStyles.contentTabs}>
    
           <View style={[ProfileStyles.contentt, toggleState === 1 ? ProfileStyles.activeContent : ProfileStyles.InActiveContent]}>
             <ScrollView>
             
            

             
             </ScrollView>
    
           </View>
    
    
           <View
             style={[ProfileStyles.content, toggleState === 2 ? ProfileStyles.activeContent : ProfileStyles.InActiveContent]}>
             <ScrollView>
             <Dashboard/>
             </ScrollView>
    
           </View>
    
           <View style={[ProfileStyles.content, toggleState === 3 ? ProfileStyles.activeContent : ProfileStyles.InActiveContent]}>
             <ScrollView>
             
               <Text style={{ color: "blue", marginTop: 10, paddingTop: 10, fontSize: 20, textAlign: "center" }}></Text>
             </ScrollView>
           </View>
    
           <View style={[ProfileStyles.content, toggleState === 4 ? ProfileStyles.activeContent : ProfileStyles.InActiveContent]}>
             <ScrollView>
             
               <Text style={{ color: "blue", marginTop: 10, paddingTop: 10, fontSize: 20, textAlign: "center" }}></Text>
             </ScrollView>
           </View>
    
           <View style={[ProfileStyles.content, toggleState === 5 ? ProfileStyles.activeContent : ProfileStyles.InActiveContent]}>
             <ScrollView>
             
               <Text style={{ color: "blue", marginTop: 10, paddingTop: 10, fontSize: 20, textAlign: "center" }}></Text>
             </ScrollView>
           </View>
    
           <View style={[ProfileStyles.content, toggleState === 6 ? ProfileStyles.activeContent : ProfileStyles.InActiveContent]}>
             <ScrollView>
             
               <Text style={{ color: "blue", marginTop: 10, paddingTop: 10, fontSize: 20, textAlign: "center" }}>dddd</Text>
             </ScrollView>
           </View>
           {/* <View style={[ProfileStyles.content, toggleState === 7 ? ProfileStyles.activeContent : ProfileStyles.InActiveContent]}>
             <ScrollView>
             
               <Text style={{ color: "blue", marginTop: 10, paddingTop: 10, fontSize: 20, textAlign: "center" }}>dd</Text>
             </ScrollView>
           </View>
           <View style={[ProfileStyles.content, toggleState === 8 ? ProfileStyles.activeContent : ProfileStyles.InActiveContent]}>
             <ScrollView>
             
               <Text style={{ color: "blue", marginTop: 10, paddingTop: 10, fontSize: 20, textAlign: "center" }}>dd</Text>
             </ScrollView>
           </View>
           <View style={[ProfileStyles.content, toggleState === 9 ? ProfileStyles.activeContent : ProfileStyles.InActiveContent]}>
             <ScrollView>
             
               <Text style={{ color: "blue", marginTop: 10, paddingTop: 10, fontSize: 20, textAlign: "center" }}>dd</Text>
             </ScrollView>
           </View>
           <View style={[ProfileStyles.content, toggleState === 10 ? ProfileStyles.activeContent : ProfileStyles.InActiveContent]}>
             <ScrollView>
             
               <Text style={{ color: "blue", marginTop: 10, paddingTop: 10, fontSize: 20, textAlign: "center" }}>dd</Text>
             </ScrollView>
           </View>
     */}
         
    
    
         </View>
    
    
      
    
    
    
     </View>
    
           
            </View> 





    :




    <View>
    <View style={{backgroundColor:"lightblue",height:70,padding:18,justifyContent:"center",alignItems:"flex-end"}}>
 
     <TouchableOpacity style={{padding:13,backgroundColor:"darkblue",borderRadius:9}}>
      <View>
        <Text style={{color:"white",fontWeight:"bold"}}>
         Start trail
        </Text>
       </View> 
     </TouchableOpacity>

    </View>

    <View style={{flexDirection:"column",paddingTop:16,
    
    // height:65,
    backgroundColor:"#F4DAFF"}}>
   
    


 
   <View style={[ProfileStyles.container]}>
   <View style={{flex:1,flexDirection:"row"}}>
         <TouchableOpacity
           style={[ProfileStyles.tabs, toggleState === 1 ? ProfileStyles.touched : ProfileStyles.nonTouched]}
           onPress={() => toggleTab(1)}>
           <View>
             <Text style={[{ fontWeight: "bold", zIndex: 2 , color: "black" }]}>

               <Text  >
            Store Selection
               </Text>
             </Text>
           </View>

         </TouchableOpacity>

         <TouchableOpacity
           style={[ProfileStyles.tabs, toggleState === 2 ? ProfileStyles.touched : ProfileStyles.nonTouched]}
           onPress={() => toggleTab(2)}>
           <Text style={[{ fontWeight: "bold", zIndex: 2 , color: "black" }]}>
            Dashboard
           </Text>
         </TouchableOpacity>

         <TouchableOpacity
           style={[ProfileStyles.tabs, toggleState === 3 ? ProfileStyles.touched : ProfileStyles.nonTouched]}
           onPress={() => toggleTab(3)}>
           <Text style={[{ fontWeight: "bold", zIndex: 2 , color: "black" }]}>
            Stores
           </Text>
         </TouchableOpacity>

         <TouchableOpacity
           style={[ProfileStyles.tabs, toggleState === 4 ? ProfileStyles.touched : ProfileStyles.nonTouched]}
           onPress={() => toggleTab(4)}>
          <Text style={[{ fontWeight: "bold", zIndex: 2 , color: "black" }]}>
             Location
           </Text>


         </TouchableOpacity>

         <TouchableOpacity
           style={[ProfileStyles.tabs, toggleState === 5 ? ProfileStyles.touched : ProfileStyles.nonTouched]}
           onPress={() => toggleTab(5)}>
          <Text style={[{ fontWeight: "bold", zIndex: 2 , color: "black" }]}>
             Payment
           </Text>


         </TouchableOpacity>

         <TouchableOpacity
           style={[ProfileStyles.tabs, toggleState === 6 ? ProfileStyles.touched : ProfileStyles.nonTouched]}
           onPress={() => toggleTab(6)}>
          <Text style={[{ fontWeight: "bold", zIndex: 2 , color: "black" }]}>
             Orders
           </Text>


         </TouchableOpacity>
         </View>
         <View style={{flex:1,flexDirection:"row",justifyContent:"flex-end"}}>
         <TouchableOpacity
           style={[ProfileStyles.tabs, toggleState === 7 ? ProfileStyles.touched : ProfileStyles.nonTouched]}
           onPress={() => toggleTab(7)}>
          
          <AntDesign name="plus" size={24} color="black" />

         </TouchableOpacity>

         <TouchableOpacity
           style={[ProfileStyles.tabs, toggleState === 8 ? ProfileStyles.touched : ProfileStyles.nonTouched]}
           onPress={() => toggleTab(8)}>
         <AntDesign name="search1" size={24} color="black" />


         </TouchableOpacity>
         <TouchableOpacity
           style={[ProfileStyles.tabs, toggleState === 9 ? ProfileStyles.touched : ProfileStyles.nonTouched]}
           onPress={() => toggleTab(9)}>
         <Ionicons name="notifications" size={24} color="black" />


         </TouchableOpacity>

         <TouchableOpacity
           style={[ProfileStyles.tabs, toggleState === 10 ? ProfileStyles.touched : ProfileStyles.nonTouched]}
           onPress={() => toggleTab(10)}>
          <Text style={[{ fontWeight: "bold", zIndex: 2 , color: "black" }]}>
             Profile
           </Text>


         </TouchableOpacity>
           
         </View>


     </View>

     <View style={ProfileStyles.contentTabs}>

       <View style={[ProfileStyles.contentt, toggleState === 1 ? ProfileStyles.activeContent : ProfileStyles.InActiveContent]}>
        
       </View>


       <View
         style={[ProfileStyles.content, toggleState === 2 ? ProfileStyles.activeContent : ProfileStyles.InActiveContent]}>
         <ScrollView>
         <Dashboard/>
         </ScrollView>

       </View>

       <View style={[ProfileStyles.content, toggleState === 3 ? ProfileStyles.activeContent : ProfileStyles.InActiveContent]}>
         <ScrollView>
         
           <Text style={{ color: "blue", marginTop: 10, paddingTop: 10, fontSize: 20, textAlign: "center" }}></Text>
         </ScrollView>
       </View>

       <View style={[ProfileStyles.content, toggleState === 4 ? ProfileStyles.activeContent : ProfileStyles.InActiveContent]}>
         <ScrollView>
         
           <Text style={{ color: "blue", marginTop: 10, paddingTop: 10, fontSize: 20, textAlign: "center" }}></Text>
         </ScrollView>
       </View>

       <View style={[ProfileStyles.content, toggleState === 5 ? ProfileStyles.activeContent : ProfileStyles.InActiveContent]}>
         <ScrollView>
         
           <Text style={{ color: "blue", marginTop: 10, paddingTop: 10, fontSize: 20, textAlign: "center" }}></Text>
         </ScrollView>
       </View>

       <View style={[ProfileStyles.content, toggleState === 6 ? ProfileStyles.activeContent : ProfileStyles.InActiveContent]}>
         <ScrollView>
         
           <Text style={{ color: "blue", marginTop: 10, paddingTop: 10, fontSize: 20, textAlign: "center" }}>dddd</Text>
         </ScrollView>
       </View>
       <View style={[ProfileStyles.content, toggleState === 7 ? ProfileStyles.activeContent : ProfileStyles.InActiveContent]}>
         <ScrollView>
         
           <Text style={{ color: "blue", marginTop: 10, paddingTop: 10, fontSize: 20, textAlign: "center" }}>dd</Text>
         </ScrollView>
       </View>
       <View style={[ProfileStyles.content, toggleState === 8 ? ProfileStyles.activeContent : ProfileStyles.InActiveContent]}>
         <ScrollView>
         
           <Text style={{ color: "blue", marginTop: 10, paddingTop: 10, fontSize: 20, textAlign: "center" }}>dd</Text>
         </ScrollView>
       </View>
       <View style={[ProfileStyles.content, toggleState === 9 ? ProfileStyles.activeContent : ProfileStyles.InActiveContent]}>
         <ScrollView>
         
           <Text style={{ color: "blue", marginTop: 10, paddingTop: 10, fontSize: 20, textAlign: "center" }}>dd</Text>
         </ScrollView>
       </View>
       <View style={[ProfileStyles.content, toggleState === 10 ? ProfileStyles.activeContent : ProfileStyles.InActiveContent]}>
         <ScrollView>
         
           <Text style={{ color: "blue", marginTop: 10, paddingTop: 10, fontSize: 20, textAlign: "center" }}>dd</Text>
         </ScrollView>
       </View>

     


     </View>


  



 </View>

       
        </View> 
   }
       
      </>
    )
}
export default DashboardHeader;