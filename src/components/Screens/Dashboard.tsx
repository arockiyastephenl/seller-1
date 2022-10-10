import React, { useState } from "react";
import { Dimensions } from 'react-native';
import Checkbox from 'expo-checkbox';
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    ScrollView,
    SafeAreaView,
    Image,
    Keyboard,
    TouchableOpacity,
    KeyboardAvoidingView,
    StatusBar
} from "react-native";

import { ProfileStyles } from "../css/profile";
import { RouteStackParamList } from "../../RouteStackParams";
import { StackNavigationProp } from "@react-navigation/stack";
const {width,height} = Dimensions.get('window')
import { useNavigation } from "@react-navigation/native";
import Svg, { Path } from "react-native-svg";
import CareCommerce from "../utils/CareCommerce";

import '@expo/match-media'
import { useMediaQuery } from "react-responsive";

type dashboard = StackNavigationProp<RouteStackParamList, "Login">;
export default function Dashboard() {
    const navigation = useNavigation<dashboard>();
//     const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
const isTabletOrMobileDevice = useMediaQuery({    
    maxDeviceWidth: 1244,
    // alternatively...
    query: "(max-device-width: 744px)"  
  });
    const errmsg = {
        
       
        // phonenumberErr: "",
        emailErr: "",
        passwordErr: "",


       
       
    };
   
    const [forgetForm, setForgetForm] = useState();
    const [error, setError] = useState(errmsg);

    console.log("yes", forgetForm);
    const emailverify =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const pattern = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;

   
   
 

    return (
        <>
       <ScrollView >
    
       <View style={{backgroundColor:"lightblue",height:70,paddingLeft:13,paddingRight:13,flexDirection:"row",alignItems:"center",justifyContent:"space-between",flex:0.4}}>
      <View>
        <Text style={{color:"blue",fontWeight:"bold"}}>
            Demo Company
        </Text>
      </View>

     <TouchableOpacity style={{padding:13,backgroundColor:"darkblue",borderRadius:9}}>
      
        <Text style={{color:"white",fontWeight:"bold"}}>
         Edit dashboard
        </Text>
    
     </TouchableOpacity>

    </View>
    <View style={{flex:1,flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
         <View style={[ProfileStyles.tabContainer]}>
               <View style={{marginTop:50}} >
                <View style={{flex:1,flexDirection:"row",marginBottom:54}}>
                    <View>
                    {/* <CareCommerce/> */}
                    </View>
                    <View style={{marginLeft:40}}>
                        <Text style={{fontWeight:"bold",fontSize:16,marginBottom:15}}>
                            Get to know seller app
                        </Text>
                        <Text style={{fontSize:13,marginBottom:15}}>
                            Get to know seller app
                        </Text>
                        <TouchableOpacity>
                            <Text style={{backgroundColor:"skyblue",paddingTop:3,paddingLeft:5,paddingRight:5,borderRadius:3,height:32,padding:5}}>
                                Learn more about the company
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>

                

               </View>
              </View>
             
              </View>
              <View style={{backgroundColor:"gainsboro",alignItems:"center",justifyContent:"center",padding:15}}>
                <View style={{flex:1,flexDirection:"row",flexWrap:"wrap",
                
                width:isTabletOrMobileDevice ? 500:725,justifyContent:"center"}}>

<View style={[ProfileStyles.dashCards,{marginRight:isTabletOrMobileDevice ? 0:20}]}>
                        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                            <Text style={{marginBottom:5,fontSize:15,fontWeight:"bold"}}>
                            Business Savings Account
                            </Text>
                            <Text style={{marginBottom:5,fontSize:15,fontWeight:"bold"}}>
                               Location
                            </Text>
                        </View>

                        <View style={{flexDirection:"row",marginTop:20,justifyContent:"space-around"}}>
                           <TouchableOpacity style={{backgroundColor:"darkblue"}}>
                               <Text style={{color:"white",padding:10}}>
                               Reconcile 28 items
                            </Text> 
                           </TouchableOpacity>
                        <View style={{flexDirection:'column'}}>
                            <Text style={{marginBottom:5,fontSize:8,fontWeight:"bold"}}>
                               Balance in xero
                            </Text>
                            <Text style={{marginBottom:5,fontSize:8,fontWeight:"bold"}}>
                              Statement balance
                            </Text>
                            </View>
                            <View style={{flexDirection:'column'}}>
                            <Text style={{marginBottom:5,fontSize:8,fontWeight:"bold"}}>
                               17,8998
                            </Text>
                            <Text style={{marginBottom:5,fontSize:8,fontWeight:"bold"}}>
                              4,377
                            </Text>
                            </View>
                        </View>
                        
                        
                     
                       
                    </View>
                    
                    <View style={[ProfileStyles.dashCards,{marginRight:isTabletOrMobileDevice ? 0:20}]}>
                        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                            <Text style={{marginBottom:5,fontSize:15,fontWeight:"bold"}}>
                                Account Watchlist
                            </Text>
                            <Text style={{marginBottom:5,fontSize:15,fontWeight:"bold"}}>
                                Order Watchlist
                            </Text>
                        </View>

                        <View style={{flexDirection:"row",marginTop:20,justifyContent:"space-around"}}>
                            <Text style={{marginBottom:5,fontSize:12,fontWeight:"bold"}}>
                                Account 
                            </Text>
                            <Text style={{marginBottom:5,fontSize:12,fontWeight:"bold"}}>
                                This month
                            </Text>
                            <Text style={{marginBottom:5,fontSize:12,fontWeight:"bold"}}>
                                YTD
                            </Text>
                        </View>
                        <View style={{flexDirection:"row",marginTop:21,justifyContent:"space-around",marginLeft:-17}}>
                            <Text style={{marginBottom:5,fontSize:8,fontWeight:"bold",color:"blue"}}>
                                Inventory
                            </Text>
                            <Text style={{marginBottom:5,fontSize:8,fontWeight:"bold",color:"blue"}}>
                                0.00
                            </Text>
                            <Text style={{marginBottom:5,fontSize:8,fontWeight:"bold",color:"blue"}}>
                                0.00
                            </Text>
                        </View>
                        <View style={{flexDirection:"row",marginTop:3,justifyContent:"space-around",marginLeft:-17}}>
                            <Text style={{marginBottom:5,fontSize:8,fontWeight:"bold",color:"blue"}}>
                                Office Expenses(543)
                            </Text>
                            <Text style={{marginBottom:5,fontSize:8,fontWeight:"bold",color:"blue"}}>
                            129.93
                            </Text>
                            <Text style={{marginBottom:5,fontSize:8,fontWeight:"bold",color:"blue"}}>
                                435.20
                            </Text>
                        </View>
                        <View style={{flexDirection:"row",marginTop:3,justifyContent:"space-around",marginLeft:-17}}>
                            <Text style={{marginBottom:5,fontSize:8,fontWeight:"bold",color:"blue"}}>
                               PayG withholds (543)
                            </Text>
                            <Text style={{marginBottom:5,fontSize:8,fontWeight:"bold",color:"blue"}}>
                            15904.00
                            </Text>
                            <Text style={{marginBottom:5,fontSize:8,fontWeight:"bold",color:"blue"}}>
                                9,343.00
                            </Text>
                        </View>
                        <View style={{flexDirection:"row",marginTop:3,marginLeft:-17}}>
                            <Text style={{marginBottom:5,fontSize:8,fontWeight:"bold",marginLeft:27,marginRight:110,color:"blue"}}>
                              Sales
                            </Text>
                            <Text style={{marginBottom:5,fontSize:8,fontWeight:"bold",color:"blue",marginRight:68}}>
                            15904.00
                            </Text>
                            <Text style={{marginBottom:5,fontSize:8,fontWeight:"bold",color:"blue"}}>
                                9,343.00
                            </Text>
                        </View>
                    </View>


                    
                    <View style={[ProfileStyles.dashCards,{marginRight:isTabletOrMobileDevice ? 0:20}]}>
                        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                            <Text style={{marginBottom:5,fontSize:15,fontWeight:"bold"}}>
                            Business Savings Account
                            </Text>
                            <Text style={{marginBottom:5,fontSize:15,fontWeight:"bold"}}>
                               Location
                            </Text>
                        </View>

                        <View style={{flexDirection:"row",marginTop:20,justifyContent:"space-around"}}>
                           
                            <Text style={{marginBottom:5,fontSize:12,fontWeight:"bold",color:"blue"}}>
                             
                               Reconcilled
                            </Text>
                            <Text style={{marginBottom:5,fontSize:12,fontWeight:"bold",color:"blue"}}>
                                This month
                            </Text>
                            <Text style={{marginBottom:5,fontSize:12,fontWeight:"bold",color:"blue"}}>
                                YTD
                            </Text>
                        </View>
                        <View style={{flexDirection:"row",marginTop:21,justifyContent:"space-around",marginLeft:-17}}>
                            <Text style={{marginBottom:5,fontSize:8,fontWeight:"bold",color:"blue"}}>
                                Inventory
                            </Text>
                            <Text style={{marginBottom:5,fontSize:8,fontWeight:"bold",color:"blue"}}>
                                0.00
                            </Text>
                            <Text style={{marginBottom:5,fontSize:8,fontWeight:"bold",color:"blue"}}>
                                0.00
                            </Text>
                        </View>
                       
                    </View>
                    
                    <View style={[ProfileStyles.dashCards,{marginRight:isTabletOrMobileDevice ? 0:20}]}>
                    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                            <Text style={{marginBottom:5,fontSize:15,fontWeight:"bold"}}>
                            Business Savings Account
                            </Text>
                            <Text style={{marginBottom:5,fontSize:15,fontWeight:"bold"}}>
                               Location
                            </Text>
                        </View>

                        <View style={{flexDirection:"row",marginTop:20,justifyContent:"space-around"}}>
                           <TouchableOpacity style={{backgroundColor:"white",borderColor:"gray",borderWidth:2}}>
                               <Text style={{color:"darkblue",fontWeight:"bold",fontSize:12,padding:13}}>
                               New sales invoice
                            </Text> 
                           </TouchableOpacity>
                        <View style={{flexDirection:'column'}}>
                            <Text style={{marginBottom:5,fontSize:10,fontWeight:"bold"}}>
                               Draft invoice
                            </Text>
                            <Text style={{marginBottom:5,fontSize:10,fontWeight:"bold"}}>
                             Awaiting Payment
                            </Text>
                            <Text style={{marginBottom:5,fontSize:10,fontWeight:"bold"}}>
                             Overdue
                            </Text>
                            </View>
                            <View style={{flexDirection:'column'}}>
                            <Text style={{marginBottom:5,fontSize:10,fontWeight:"bold"}}>
                               2,8998
                            </Text>
                            <Text style={{marginBottom:5,fontSize:10,fontWeight:"bold"}}>
                              89,377
                            </Text>
                            <Text style={{marginBottom:5,fontSize:10,fontWeight:"bold"}}>
                              7,377
                            </Text>
                            </View>
                        </View>
                    </View>

                </View>

                    
</View>
         </ScrollView>
        </>
        
      
    );
}
const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        // backgroundColor:"violet",
        // marginTop: 83,
        // marginVertical: 32,
        
      },
      scrollView: {
        backgroundColor: 'white',
  
        // height:330,
        // marginTop:500
        // marginHorizontal: 20,
      },
     
    // container: {
    //   flex: 1,
    // //   marginHorizontal: 16,
    // //   marginVertical: 32,
    //  },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom:10,
    },
    paragraph: {
      fontSize: 15,
    },
    checkbox: {
      margin: 8,
    },
  });
