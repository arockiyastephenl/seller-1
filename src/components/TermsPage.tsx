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

import { ProfileStyles } from "./css/profile";
import { RouteStackParamList } from "../RouteStackParams";
import { StackNavigationProp } from "@react-navigation/stack";
const {width,height} = Dimensions.get('window')
import { useNavigation } from "@react-navigation/native";

type termsPage = StackNavigationProp<RouteStackParamList, "Registration">;
export default function TermsPage() {
    const navigation = useNavigation<termsPage>();
//     const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
 
   

   
   
 

    return (
        <>
        <SafeAreaView style={styles.safeContainer}>
        <ScrollView style={[styles.scrollView]}>
      <View style={[ProfileStyles.contentTerms]}>
          
              
            
           
           
           
         <View >
            
            <View style={ProfileStyles.headContainer} >
            <View style={{alignItems:"flex-start"}}>
                <Text style={[ProfileStyles.regisText]}>Privacy Notice</Text>
                <Text style={{fontSize:13,marginBottom:30}}>
           <Text style={{fontSize:13,marginBottom:20}}>
           
           Last updated: 23 July 2020
            </Text>


            </Text>

                </View> 
            <Text style={[ProfileStyles.regisText]}>
               Introduction
            </Text>
            <Text style={{fontSize:13,marginBottom:20}}>
            This notice applies across all websites that we own and operate and all services we provide, including our online and mobile accounting and financial services products, and any other apps or services we may offer (for example, events or training). For the purpose of this notice, we’ll just call them our ‘services’. If you are a WorkflowMax user, this notice applies to you too!

When we say ‘personal data’ we mean identifiable information about you, like your name, email, address, telephone number, bank account details, payment information, support queries, community comments and so on. If you can’t be identified (for example, when personal data has been aggregated and anonymised) then this notice doesn’t apply. Check out our terms of use for more information on how we treat your other data.

We may need to update this notice from time to time. Where a change is significant, we’ll make sure we let you know – usually by sending you an email.

You can read the whole notice below, or if you haven’t got much time, you can jump to the section you need using the navigation menu.

            </Text>


            <Text style={[ProfileStyles.regisText]}>
            Who are ‘we’?
            </Text>
            <Text style={{fontSize:13,marginBottom:20}}>
            This notice applies across all websites that we own and operate and all services we provide, including our online and mobile accounting and financial services products, and any other apps or services we may offer (for example, events or training). For the purpose of this notice, we’ll just call them our ‘services’. If you are a WorkflowMax user, this notice applies to you too!

When we say ‘personal data’ we mean identifiable information about you, like your name, email, address, telephone number, bank account details, payment information, support queries, community comments and so on. If you can’t be identified (for example, when personal data has been aggregated and anonymised) then this notice doesn’t apply. Check out our terms of use for more information on how we treat your other data.

We may need to update this notice from time to time. Where a change is significant, we’ll make sure we let you know – usually by sending you an email.

You can read the whole notice below, or if you haven’t got much time, you can jump to the section you need using the navigation menu.

            </Text>

            <Text style={[ProfileStyles.regisText]}>
            Our principles of data protection
            </Text>
            <Text style={{fontSize:13,marginBottom:20}}>
            This notice applies across all websites that we own and operate and all services we provide, including our online and mobile accounting and financial services products, and any other apps or services we may offer (for example, events or training). For the purpose of this notice, we’ll just call them our ‘services’. If you are a WorkflowMax user, this notice applies to you too!

When we say ‘personal data’ we mean identifiable information about you, like your name, email, address, telephone number, bank account details, payment information, support queries, community comments and so on. If you can’t be identified (for example, when personal data has been aggregated and anonymised) then this notice doesn’t apply. Check out our terms of use for more information on how we treat your other data.

We may need to update this notice from time to time. Where a change is significant, we’ll make sure we let you know – usually by sending you an email.

You can read the whole notice below, or if you haven’t got much time, you can jump to the section you need using the navigation menu.

            </Text>
              
               
            </View>

         
         
            <View >
            <View style={{flex:1,flexDirection:"row"}}>

        <TouchableOpacity>

        <Text
        onPress={() => navigation.navigate('Registration')}
        style={ProfileStyles.forgot_button}>Back to signup</Text>
        </TouchableOpacity>
      </View>
     
    </View>
       
            </View>   
        </View>
      </ScrollView>
        </SafeAreaView>
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
