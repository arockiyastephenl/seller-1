import React, { useState } from "react";

import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  Button,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import { useNavigation } from '@react-navigation/native';
import { ProfileStyles } from "./css/profile";

function Header() {
  const navigation = useNavigation();
  return (
    <View   style={[ProfileStyles.headers]}>
   
    
      <TouchableOpacity  onPress={() => navigation.goBack()} style={{flex:1,justifyContent:"center"}}>
        <Text style={{fontSize:17,fontWeight:"bold"}}>Go back</Text>
      </TouchableOpacity>
      {/* <View>
     <View style={{flex:1,flexDirection:"row"}}>
     <TouchableOpacity style={ProfileStyles.loginButton}>
      <Text style={{fontSize:15,fontWeight:"bold",color:"#ffffff"}}>
      Home
      </Text>
      </TouchableOpacity>
     <TouchableOpacity style={ProfileStyles.loginButton}>
      <Text style={{fontSize:15,fontWeight:"bold",color:"#ffffff"}}>
      Login
      </Text>
      </TouchableOpacity>
      </View>
      
      </View> */}
    </View>
  );
}
export default Header;
