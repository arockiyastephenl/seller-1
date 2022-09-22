import React, { useState } from "react";
import { Dimensions } from 'react-native';
import Checkbox from 'expo-checkbox';
// import { StackNavigationProp } from '@react-navigation/stack';
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
    SafeAreaView,
    StatusBar
   
  
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { ProfileStyles } from "./css/profile";

import { RouteStackParamList } from "../RouteStackParams";
import { StackNavigationProp } from '@react-navigation/stack';

const {width,height} = Dimensions.get('window')
// type Registration = StackNavigationProp;
type registration = StackNavigationProp<RouteStackParamList, 'Login'>;
export default function Registration() {
    const navigation = useNavigation<registration>();
    const initialstate = {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
       
        phonenumber: "",
        country: "",
        state:"",
        city:"",
        business: "",
        

       

       

    };
    const errmsg = {
        firstNameErr: "",
        lastNameErr: "",
        emailErr: "",
        passwordErr: "",
       
        phonenumberErr: "",
        countryErr: "",
        stateErr: "",
        cityErr:"",
        businessErr:"",
        
        


       
       
    };
   
    const [form, setForm] = useState(initialstate);
    const [error, setError] = useState(errmsg);

    console.log("yes", form);
    const emailverify =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const pattern = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;

    function FirstnameValidate(value: string) {
        if (form.firstname === "") {
            setError({ ...error, firstNameErr: "*This field can not be empty" });
        } else {
            setError({ ...error, firstNameErr: "" });
        }
    }
    function LastnameValidate(value: string) {
        if (form.lastname === "") {
            setError({ ...error, lastNameErr: "*This field can not be empty" });
        } else {
            setError({ ...error, lastNameErr: "" });
        }
    }
  
    function PhonenumberValidate(value: string) {
        if (form.phonenumber === "") {
            setError({ ...error, phonenumberErr: "*This field can not be empty" });
        } else if (!!!form.phonenumber.match("[0-9]{10}")) {
            setError({
                ...error,
                phonenumberErr: "Please provide valid phone number",
            });
        } else {
            setError({ ...error, phonenumberErr: "" });
        }
    }
    function countryValidate(value: string) {
        if (form.country === "") {
            setError({ ...error, countryErr: "*This field can not be empty" });
        } else {
            setError({ ...error, countryErr: "" });
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
    }
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
    function cityValidate(value: string) {
        if (form.city === "") {
            setError({ ...error, cityErr: "*This field can not be empty" });
        } else {
            setError({ ...error, cityErr: "" });
        }
    }
    function stateValidate(value: string) {
        if (form.state === "") {
            setError({ ...error, stateErr: "*This field can not be empty" });
        } else {
            setError({ ...error, stateErr: "" });
        }
    }

    function businessValidate(value: string) {
        if (form.business === "") {
            setError({ ...error, businessErr: "*This field can not be empty" });
        } else {
            setError({ ...error, businessErr: "" });
        }
    }
    const [isChecked, setChecked] = useState(false);
    const [isChecked2, setChecked2] = useState(false);

    return (
        <SafeAreaView style={styles.safeContainer}>
        <ScrollView style={styles.scrollView}>
        <View style={[ProfileStyles.content]}>
          
              
            <View>
                <Text style={ProfileStyles.regisText}>Registration</Text>
                </View>  
           
         <View >
            <View style={[ProfileStyles.headContainer]} >
                <View >
                    <Text style={[ProfileStyles.headText]}>First Name</Text>
                </View>
                <TextInput
                    onChangeText={(value) => setForm({ ...form, firstname: value })}
                    style={[ProfileStyles.inputBox]}
                    placeholder="First name"
                    onBlur={() => FirstnameValidate(form.firstname)}
                    value={form.firstname}
                />
                <Text>
                    <Text
                        style={{ color: "red", marginLeft: 6, marginBottom: 0, fontSize: 13 }} >
                        {error.firstNameErr}
                    </Text>
                </Text>
            </View>
             <View style={ProfileStyles.headContainer} >

                <View >
                    <Text style={ProfileStyles.headText}>Last Name</Text>
                </View>
                <TextInput
                    onChangeText={(value) => setForm({ ...form, lastname: value })}
                    style={[ProfileStyles.inputBox]}
                    onBlur={() => LastnameValidate(form.lastname)}
                    placeholder="Last name"
                    value={form.lastname}
                />
                <Text>
                    <Text
                        style={{ color: "red", marginLeft: 6, marginBottom: 0, fontSize: 13 }}
                    >
                        {error.lastNameErr}
                    </Text>
                </Text>
            </View>
            <View style={ProfileStyles.headContainer} >
                <View >
                    <Text style={ProfileStyles.headText}>Email</Text>
                </View>
                <TextInput
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
                    <Text style={ProfileStyles.headText}>Create Password</Text>
                </View>
                <TextInput
                //  onChangeText={(password) => setPassword(password)}
                    onChangeText={(value) => setForm({ ...form, password: value })}
                    style={[ProfileStyles.inputBox]}
                    placeholder="Create Password"
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
            </View>

            <View style={ProfileStyles.headContainer} >
            <View >
                    <Text style={ProfileStyles.headText}>Confirm Password</Text>
                </View>
                <TextInput
                //  onChangeText={(password) => setPassword(password)}
                    onChangeText={(value) => setForm({ ...form, password: value })}
                    style={[ProfileStyles.inputBox]}
                    placeholder="Confirm Password"
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
            </View>

            <View style={ProfileStyles.headContainer} >
                <View >
                    <Text style={ProfileStyles.headText}>Phone number</Text>
                </View>
                <TextInput
                    onChangeText={(value) => setForm({ ...form, phonenumber: value })}
                    style={[ProfileStyles.inputBox]}
                    placeholder="Phone Number"
                    onBlur={() => PhonenumberValidate(form.phonenumber)}
                    value={form.phonenumber}
                    maxLength={10}
                    keyboardType="number-pad"
                />
                <Text>
                    <Text
                        style={{ color: "red", marginLeft: 6, marginBottom: 0, fontSize: 13 }}>
                        {error.phonenumberErr}
                    </Text>
                </Text>
            </View>

            <View style={ProfileStyles.headContainer} >
                <View >
                    <Text style={ProfileStyles.headText}>Country</Text>
                </View>
                <TextInput
                    onChangeText={(value) => setForm({ ...form, country: value })}
                    style={[ProfileStyles.inputBox]}
                    placeholder="Country"
                    onBlur={() => countryValidate(form.country)}
                    value={form.country}
                />
                <Text>
                    <Text
                        style={{ color: "red", marginLeft: 6, marginBottom: 0, fontSize: 13 }}>
                        {error.countryErr}
                    </Text>
                </Text>
            </View> 

          
           
            <View style={ProfileStyles.headContainer} >
                <View >
                    <Text style={ProfileStyles.headText}>State</Text>
                </View>
                <TextInput
                    onChangeText={(value) => setForm({ ...form, state: value })}
                    style={[ProfileStyles.inputBox]}
                    placeholder="State"
                    onBlur={() => stateValidate(form.state)}
                    value={form.state}
                />
                <Text>
                    <Text
                        style={{ color: "red", marginLeft: 6, marginBottom: 0, fontSize: 13 }}>
                        {error.stateErr}
                    </Text>
                </Text>
            </View>
            <View style={ProfileStyles.headContainer} >
                <View >
                    <Text style={ProfileStyles.headText}>City</Text>
                </View>
                <TextInput
                    onChangeText={(value) => setForm({ ...form, city: value })}
                    style={[ProfileStyles.inputBox]}
                    placeholder="City"
                    onBlur={() => cityValidate(form.city)}
                    value={form.city}
                />
                <Text>
                    <Text
                        style={{ color: "red", marginLeft: 6, marginBottom: 0, fontSize: 13 }}>
                        {error.cityErr}
                    </Text>
                </Text>
            </View>
           
            <View style={ProfileStyles.headContainer} >
                <View >
                    <Text style={ProfileStyles.headText}>Business Site</Text>
                </View>
                <TextInput
                    onChangeText={(value) => setForm({ ...form, business: value })}
                    style={[ProfileStyles.inputBox]}
                    placeholder="Business site"
                    onBlur={() => businessValidate(form.business)}
                    value={form.business}
                />
                <Text>
                    <Text
                        style={{ color: "red", marginLeft: 6, marginBottom: 0, fontSize: 13 }}>
                        {error.businessErr}
                    </Text>
                </Text>
            </View>

            </View>  
            <View style={styles.container}>
      <View style={styles.section}>
        <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
        <Text style={styles.paragraph}>I've read and agreed to the terms of use,privacy notice and offer details:
        Terms of Service,privacy notice and offer details
        
        </Text>
      </View>
      <View style={styles.section}>
        <Checkbox style={styles.checkbox} value={isChecked2} onValueChange={setChecked2} />
        <Text style={styles.paragraph}>Please don't send me any marketing communications</Text>
      </View>
     
     
    
       
            <TouchableOpacity 
    //  onPress={() => navigation.navigate('Login')}

       style={[ProfileStyles.greenButton]}>
               <Text>
                  <Text style={[ProfileStyles.whiteText]}>Sign Up</Text>
                </Text>
            </TouchableOpacity>
            
            </View>
        </View>
        </ScrollView>
        </SafeAreaView>
      
      
    );
}
const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        // paddingTop: StatusBar.currentHeight,
      },
      scrollView: {
        backgroundColor: 'white',
        // marginHorizontal: 20,
      },
    container: {
    //   flex: 1,
    //   marginHorizontal: 16,
    //   marginVertical: 32,
     },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom:10,
      width:322,
    },
    paragraph: {
      fontSize: 10,
    },
    checkbox: {
      margin: 8,
    },
  });
