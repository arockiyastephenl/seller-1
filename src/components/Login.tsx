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

const {width,height} = Dimensions.get('window')

export default function Login() {
//     const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
 
    const initialstate = {
        
       
        password: "",
        
        email: "",

       

       

    };
    const errmsg = {
        
       
        // phonenumberErr: "",
        emailErr: "",
        passwordErr: "",


       
       
    };
   
    const [form, setForm] = useState(initialstate);
    const [error, setError] = useState(errmsg);

    console.log("yes", form);
    const emailverify =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const pattern = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;

   
   
  
    function passwordValidate(value: string) {
        if (form.password === "") {
            setError({ ...error, passwordErr: "*This field can not be empty" });
        } else if (!!!form.password.match("[0-9]{10}")) {
            setError({
                ...error,
                passwordErr: "Please provide valid password",
            });
        } else {
            setError({ ...error, passwordErr: "" });
        }
    }
    

    function EmailValidate(value: string) {
        if (form.email === "") {
            setError({ ...error, emailErr: "*This field can not be empty" });
        } else if (!!!emailverify.test(form.email)) {
            setError({ ...error, emailErr: "Invalid Email" });
        } else {
            setError({ ...error, emailErr: "" });
        }
    }const [isChecked, setChecked] = useState(false);
    const [isChecked2, setChecked2] = useState(false);

    return (
        <>
        <SafeAreaView style={styles.safeContainer}>
        <ScrollView style={[styles.scrollView]}>
      <View style={[ProfileStyles.content]}>
          
              
            <View>
                <Text style={ProfileStyles.regisText}>Login</Text>
                </View>  
           
         <View >
            
            <View style={ProfileStyles.headContainer} >
                <View >
                    <Text style={ProfileStyles.headText}>Email</Text>
                </View>
                <TextInput
                // onChangeText={(email) => setEmail(email)}
                    onChangeText={(value) => setForm({ ...form, email: value })}
                    style={[ProfileStyles.inputBox]}
                    placeholder="Email"
                    onBlur={() => EmailValidate(form.email)}
                    value={form.email}
                />
                <Text>
                    <Text
                        style={{ color: "red", marginLeft: 6, marginBottom: 0, fontSize: 13 }}>
                        {error.emailErr}
                    </Text>
              </Text>
            </View>

            <View style={ProfileStyles.headContainer} >
                <View >
                    <Text style={ProfileStyles.headText}>Password</Text>
                </View>
                <TextInput
                //  onChangeText={(password) => setPassword(password)}
                    onChangeText={(value) => setForm({ ...form, password: value })}
                    style={[ProfileStyles.inputBox]}
                    placeholder="Password"
                    secureTextEntry={true}

                    onBlur={() => passwordValidate(form.password)}
                    value={form.password}
                    maxLength={10}
                    keyboardType="number-pad"
                />
                <Text>
                    <Text
                        style={{ color: "red", marginLeft: 6, marginBottom: 0, fontSize: 13 }}>
                        {error.passwordErr}
                    </Text>
                </Text>
            
          
            
          
            <TouchableOpacity style={[ProfileStyles.greenButton]}>
               <Text>
                  <Text style={[ProfileStyles.whiteText]}>Login</Text>
                </Text>
            </TouchableOpacity>
           
            </View>
         
            <View >
            <View style={{flex:1,flexDirection:"row"}}>
<TouchableOpacity>
      
        <Text style={ProfileStyles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity>

        <Text style={ProfileStyles.forgot_button}>Can't log in ?</Text>
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
