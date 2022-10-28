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
import * as ImagePicker from 'react-native-image-picker'
import { ProfileStyles } from "../css/profile";
import { RouteStackParamList } from "../../RouteStackParams";
import { StackNavigationProp } from "@react-navigation/stack";
const {width,height} = Dimensions.get('window')
import { useNavigation } from "@react-navigation/native";
import { useMediaQuery } from "react-responsive";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'
type login = StackNavigationProp<RouteStackParamList, "ForgetPassword">;
export default function AddNewStore() {
    const navigation = useNavigation<login>();

    const isTabletOrMobileDevice = useMediaQuery({
        maxDeviceWidth: 1244,
        // alternatively...
        query: "(max-device-width: 744px)",
      });


    const initialstate = {
        name: "",
        category: "",
        image: "",
        description: "",
        storelocation: "",
    
        storetype: "",
        license: "",
        address: "",
        servinglocation: "",
        email: "",
        storecountry: "",
        storecontact: "",
        storegst: "",
      };
    
      const errmsg = {
        nameErr: "",
        categoryErr: "",
        imageErr: "",
        descriptionErr: "",
        storelocationErr: "",
    
        storetypeErr: "",
        licenseErr: "",
        addressErr: "",
        servinglocationErr: "",
        emailErr: "",
        storecountryErr: "",
        storecontactErr: "",
        storegstErr: "",
      };
    
      const [form, setForm] = useState(initialstate);
      const [error, setError] = useState(errmsg);
    
      const emailverify =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const pattern = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
    
      function FirstnameValidate(value: string) {
        if (form.name === "") {
          setError({ ...error, nameErr: "*This field can not be empty" });
        } else {
          setError({ ...error, nameErr: "" });
        }
      }
      function CategoryValidate(value: string) {
        if (form.category === "") {
          setError({ ...error, categoryErr: "*This field can not be empty" });
        } else {
          setError({ ...error, categoryErr: "" });
        }
      }
    
      function DescriptionValidate(value: string) {
        if (form.name === "") {
          setError({ ...error, nameErr: "*This field can not be empty" });
        } else {
          setError({ ...error, nameErr: "" });
        }
      }
      function StoreLocationValidate(value: string) {
        if (form.storelocation === "") {
          setError({ ...error, storelocationErr: "*This field can not be empty" });
        } else {
          setError({ ...error, storelocationErr: "" });
        }
      }
      function StoreTypeValidate(value: string) {
        if (form.storetype === "") {
          setError({ ...error, storetypeErr: "*This field can not be empty" });
        } else {
          setError({ ...error, storetypeErr: "" });
        }
      }
      function LicenseValidate(value: string) {
        if (form.license === "") {
          setError({ ...error, licenseErr: "*This field can not be empty" });
        } else if (!!!form.license.match("[0-9]{10}")) {
          setError({
            ...error,
            licenseErr: "Please provide valid password",
          });
        } else {
          setError({ ...error, licenseErr: "" });
        }
      }
      function AddressValidate(value: string) {
        if (form.address === "") {
          setError({ ...error, addressErr: "*This field can not be empty" });
        } else {
          setError({ ...error, addressErr: "" });
        }
      }
      function ServLocationValidate(value: string) {
        if (form.servinglocation === "") {
          setError({
            ...error,
            servinglocationErr: "*This field can not be empty",
          });
        } else {
          setError({ ...error, servinglocationErr: "" });
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
      function countryValidate(value: string) {
        if (form.storecountry === "") {
          setError({ ...error, storecountryErr: "*This field can not be empty" });
        } else {
          setError({ ...error, storecountryErr: "" });
        }
      }
      function PhonenumberValidate(value: string) {
        if (form.storecontact === "") {
          setError({ ...error, storecontactErr: "*This field can not be empty" });
        } else if (!!!form.storecontact.match("[0-9]{10}")) {
          setError({
            ...error,
            storecontactErr: "Please provide valid phone number",
          });
        } else {
          setError({ ...error, storecontactErr: "" });
        }
      }
      function GstValidate(value: string) {
        if (form.storegst === "") {
          setError({ ...error, storegstErr: "*This field can not be empty" });
        } else {
          setError({ ...error, storegstErr: "" });
        }
      }
    const options = {
        title: 'Select Image',
        type: 'library',
        options: {
        selectionLimit: 1,
        mediaType: 'photo',
        includeBase64: false,
        
      },
    }
    
    const [state, setState] = useState({resourcePath:"",});

    const [selectedTeam, setSelectedTeam] = useState({})
    const [selectedTeams, setSelectedTeams] = useState([])

    const [storeLocation, setStoreLocation] = useState({})
    const [storeLoc,setStoreLoc] = useState([])

    const [servLoc,setServLoc] = useState([])

const K_OPTIONS = [
    {
      item: 'Grocery',
      id: 'GROC',
    },
    {
      item: 'Mobile',
      id: ' MO',
    },
    {
      item: 'Milk',
      id: 'ML',
    },
    {
      item: 'Head Set',
      id: 'HDT',
    },
    {
      item: 'Chocolate',
      id: 'CHO',
    },
    {
      item: 'Watches',
      id: 'WAT',
    },
   
  
   
  ]
  const store_Location_OPTIONS = [
    {
      item: 'Chennai',
      id: 'GROC',
    },
    {
      item: 'Mumbai',
      id: ' MO',
    },
    {
      item: 'Kolkata',
      id: 'ML',
    },
    {
      item: 'Karnataka',
      id: 'HDT',
    },
    {
      item: 'Shimla',
      id: 'CHO',
    },
    {
      item: 'Watches',
      id: 'WAT',
    },
   
  
   
  ]
  const serv_Location_OPTIONS= [
    {
      item: 'Trichy',
      id: 'GROC',
    },
    {
      item: 'Vellore',
      id: ' MO',
    },
    {
      item: 'Kolkata',
      id: 'ML',
    },
    {
      item: 'Karnataka',
      id: 'HDT',
    },
    {
      item: 'Shimla',
      id: 'CHO',
    },
    {
      item: 'Watches',
      id: 'WAT',
    },
   
  
   
  ]

    return (
        <>
       
        {isTabletOrMobileDevice ? (
          
     
                  <SafeAreaView style={styles.safeContainer}>
                    <ScrollView style={[styles.scrollView,{marginTop:-9}]}>
                      <View style={[ProfileStyles.content]}>
                        <View>
                          <Text style={[ProfileStyles.regisText,{marginTop:10}]}>
                            Add Your Store
                          </Text>
                        </View>

                        <View>
                          <View style={[ProfileStyles.headContainer]}>
                            <View>
                              <Text style={[ProfileStyles.headText]}>
                                Store Name
                              </Text>
                            </View>
                            <TextInput
                              onChangeText={(value) =>
                                setForm({ ...form, name: value })
                              }
                              style={[ProfileStyles.inputBox]}
                              placeholder="First name"
                              onBlur={() => FirstnameValidate(form.name)}
                              value={form.name}
                            />
                            <Text>
                              <Text
                                style={{
                                  color: "red",
                                  marginLeft: 6,
                                  marginBottom: 0,
                                  fontSize: 13,
                                }}
                              >
                                {error.nameErr}
                              </Text>
                            </Text>
                          </View>
                          <View style={ProfileStyles.headContainer}>
                            <View>
                              <Text style={ProfileStyles.headText}>
                              Store Category
                              </Text>
                            </View>

                            <SelectBox
                              style={[ProfileStyles.inputBox]}
                              placeholder="Store Category"
                                  options={K_OPTIONS}
                               selectedValues={selectedTeams}
                               onMultiSelect={onMultiChange()}
                               onTapClose={onMultiChange()}
                              isMulti
      />
                          {/* <MultiselectPage/> */}

                            {/* <Dropdown
                style={[
                  ProfileStyles.inputBox,
                  isFocus && { borderColor: "blue" },
                ]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={dropData}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? "Select Category" : "..."}
                // searchPlaceholder="Search..."
                value={dropValue}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setForm({ ...form, category: item.value })
                 
                  setIsFocus(false);
                }}
              /> */}
                          {/* <MultiSelect
          hideTags
          items={items}
          uniqueKey="id"
          onSelectedItemsChange={onSelectedItemsChange}
          selectedItems={selectedItems}
          selectText="Select Items"
          searchInputPlaceholderText="Search Items Here..."
          onChangeInput={(text) => console.log(text)}
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          displayKey="name"
          searchInputStyle={{ color: '#CCC' }}
          submitButtonColor="#00BFA5"
          submitButtonText="Submit"
        />   */}
                            <Text>
                              <Text
                                style={{
                                  color: "red",
                                  marginLeft: 6,
                                  marginBottom: 0,
                                  fontSize: 13,
                                }}
                              >
                                {error.categoryErr}
                              </Text>
                            </Text>
                          </View>
                           <View style={ProfileStyles.headContainer}>
                          <View>
                              <Text style={ProfileStyles.headText}>
                                Upload Store Image
                              </Text>
                            </View>
                            
                            <TouchableOpacity
                                 onPress={()=>
                                    ImagePicker.launchImageLibrary(
                                      {
                                      
                                        mediaType: 'photo',
                                        includeBase64: false,
                                        maxHeight:200,
                                        maxWidth:200,
                                        selectionLimit: 3,
          
                                      },
                                      (response ) => {
                                        setState({ resourcePath: response.assets[0].uri })
                                      },
                                    )}
                                style={ProfileStyles.uploadbtn}
                              >
                                  <Text>
                                     Upload Images
                                    </Text>
                              </TouchableOpacity>
                              <Image source={
                                 state.resourcePath

                         }
                         style={{marginTop:10,width:108,height:130}}
                         />  

                          

                            <Text>
                              <Text
                                style={{
                                  color: "red",
                                  marginLeft: 6,
                                  marginBottom: 0,
                                  fontSize: 13,
                                }}
                              >
                                {error.emailErr}
                              </Text>
                            </Text>
                          </View> 

                          <View style={ProfileStyles.headContainer}>
                            <View>
                              <Text style={ProfileStyles.headText}>
                                Store Description
                              </Text>
                            </View>
                            <TextInput
                              onChangeText={(value) =>
                                setForm({ ...form, description: value })
                              }
                              style={[ProfileStyles.inputBox, { height: 100 }]}
                              placeholder=" Store Description"
                              // secureTextEntry={true}
                              numberOfLines={4}
                              multiline={true}
                              onBlur={() =>
                                DescriptionValidate(form.description)
                              }
                              value={form.description}
                            
                            />
                            <Text>
                              <Text
                                style={{
                                  color: "red",
                                  marginLeft: 6,
                                  marginBottom: 0,
                                  fontSize: 13,
                                }}
                              >
                                {error.descriptionErr}
                              </Text>
                            </Text>
                          </View>

                          <View style={ProfileStyles.headContainer}>
                            <View>
                              <Text style={ProfileStyles.headText}>
                                Store Location
                              </Text>
                            </View>
                            <SelectBox
                              style={[ProfileStyles.inputBox]}
                              placeholder="Store Category"
                                  options={store_Location_OPTIONS}
                               selectedValues={storeLoc}
                               onMultiSelect={onMultiChangeStore()}
                               onTapClose={onMultiChangeStore()}
                              isMulti
      />
                            {/* <TextInput
                               onChangeText={(password) => setPassword(password)}
                              onChangeText={(value) =>
                                setForm({ ...form, storelocation: value })
                              }
                              style={[ProfileStyles.inputBox]}
                              placeholder=" Store Location"
                              secureTextEntry={true}
                              onBlur={() =>
                                StoreLocationValidate(form.storelocation)
                              }
                              value={form.storelocation}
                          
                            /> */}
                            <Text>
                              <Text
                                style={{
                                  color: "red",
                                  marginLeft: 6,
                                  marginBottom: 0,
                                  fontSize: 13,
                                }}
                              >
                                {error.storelocationErr}
                              </Text>
                            </Text>
                          </View>

                          <View style={ProfileStyles.headContainer}>
                            <View>
                              <Text style={ProfileStyles.headText}>
                                Store Type
                              </Text>
                            </View>
                            <TextInput
                              onChangeText={(value) =>
                                setForm({ ...form, storetype: value })
                              }
                              style={[ProfileStyles.inputBox]}
                              placeholder=" Store Type"
                              onBlur={() => StoreTypeValidate(form.storetype)}
                              value={form.storetype}
                             
                            />
                            <Text>
                              <Text
                                style={{
                                  color: "red",
                                  marginLeft: 6,
                                  marginBottom: 0,
                                  fontSize: 13,
                                }}
                              >
                                {error.storetypeErr}
                              </Text>
                            </Text>
                          </View>

                          <View style={ProfileStyles.headContainer}>
                            <View>
                              <Text style={ProfileStyles.headText}>
                                Store License Number
                              </Text>
                            </View>
                            <TextInput
                              onChangeText={(value) =>
                                setForm({ ...form, license: value })
                              }
                              style={[ProfileStyles.inputBox]}
                              placeholder=" Store License Number"
                              onBlur={() => LicenseValidate(form.license)}
                              value={form.license}
                            />
                            <Text>
                              <Text
                                style={{
                                  color: "red",
                                  marginLeft: 6,
                                  marginBottom: 0,
                                  fontSize: 13,
                                }}
                              >
                                {error.licenseErr}
                              </Text>
                            </Text>
                          </View>
                          <View style={ProfileStyles.headContainer}>
                            <View>
                              <Text style={ProfileStyles.headText}>
                                Store Address
                              </Text>
                            </View>
                            <TextInput
                              onChangeText={(value) =>
                                setForm({ ...form, address: value })
                              }
                              style={[ProfileStyles.inputBox]}
                              placeholder=" Store Address"
                              onBlur={() => AddressValidate(form.address)}
                              value={form.address}
                            />
                            <Text>
                              <Text
                                style={{
                                  color: "red",
                                  marginLeft: 6,
                                  marginBottom: 0,
                                  fontSize: 13,
                                }}
                              >
                                {error.addressErr}
                              </Text>
                            </Text>
                          </View>
                          <View style={ProfileStyles.headContainer}>
                            <View>
                              <Text style={ProfileStyles.headText}>
                                Serving Location
                              </Text>
                            </View>
                            <SelectBox
                              style={[ProfileStyles.inputBox]}
                              placeholder="Store Category"
                                  options={serv_Location_OPTIONS}
                               selectedValues={servLoc}
                               onMultiSelect={onMultiChangeServ()}
                               onTapClose={onMultiChangeServ()}
                              isMulti
      />
                            {/* <TextInput
                              onChangeText={(value) =>
                                setForm({ ...form, servinglocation: value })
                              }
                              style={[ProfileStyles.inputBox]}
                              placeholder=" Serving Location"
                              onBlur={() =>
                                ServLocationValidate(form.servinglocation)
                              }
                              value={form.servinglocation}
                            /> */}
                            <Text>
                              <Text
                                style={{
                                  color: "red",
                                  marginLeft: 6,
                                  marginBottom: 0,
                                  fontSize: 13,
                                }}
                              >
                                {error.servinglocationErr}
                              </Text>
                            </Text>
                          </View>
                          <View style={ProfileStyles.headContainer}>
                            <View>
                              <Text style={ProfileStyles.headText}>
                                Store Email
                              </Text>
                            </View>
                            <TextInput
                              onChangeText={(value) =>
                                setForm({ ...form, email: value })
                              }
                              style={[ProfileStyles.inputBox]}
                              placeholder=" Store Email"
                              onBlur={() => EmailValidate(form.email)}
                              value={form.email}
                            />
                            <Text>
                              <Text
                                style={{
                                  color: "red",
                                  marginLeft: 6,
                                  marginBottom: 0,
                                  fontSize: 13,
                                }}
                              >
                                {error.emailErr}
                              </Text>
                            </Text>
                          </View>
                          <View style={ProfileStyles.headContainer}>
                            <View>
                              <Text style={ProfileStyles.headText}>
                                Store Country
                              </Text>
                            </View>
                            <TextInput
                              onChangeText={(value) =>
                                setForm({ ...form, storecountry: value })
                              }
                              style={[ProfileStyles.inputBox]}
                              placeholder=" Store Country"
                              onBlur={() => countryValidate(form.storecountry)}
                              value={form.storecountry}
                            />
                            <Text>
                              <Text
                                style={{
                                  color: "red",
                                  marginLeft: 6,
                                  marginBottom: 0,
                                  fontSize: 13,
                                }}
                              >
                                {error.storecountryErr}
                              </Text>
                            </Text>
                          </View>
                          <View style={ProfileStyles.headContainer}>
                            <View>
                              <Text style={ProfileStyles.headText}>
                                Store Contact
                              </Text>
                            </View>
                            <TextInput
                              onChangeText={(value) =>
                                setForm({ ...form, storecontact: value })
                              }
                              style={[ProfileStyles.inputBox]}
                              placeholder=" Store Contact"
                              onBlur={() =>
                                PhonenumberValidate(form.storecontact)
                              }
                              value={form.storecontact}
                            />
                            <Text>
                              <Text
                                style={{
                                  color: "red",
                                  marginLeft: 6,
                                  marginBottom: 0,
                                  fontSize: 13,
                                }}
                              >
                                {error.storecontactErr}
                              </Text>
                            </Text>
                          </View>
                          <View style={ProfileStyles.headContainer}>
                            <View>
                              <Text style={ProfileStyles.headText}>
                                Store GST Number
                              </Text>
                            </View>
                            <TextInput
                              onChangeText={(value) =>
                                setForm({ ...form, storegst: value })
                              }
                              style={[ProfileStyles.inputBox]}
                              placeholder=" Store GST Number"
                              onBlur={() => GstValidate(form.storegst)}
                              value={form.storegst}
                            />
                            <Text>
                              <Text
                                style={{
                                  color: "red",
                                  marginLeft: 6,
                                  marginBottom: 0,
                                  fontSize: 13,
                                }}
                              >
                                {error.storegstErr}
                              </Text>
                            </Text>
                          </View>
                          {/* <View style={{ flex: 1, alignItems: "center" }}>
                            <TouchableOpacity style={ProfileStyles.uploadbtn}>
                              <Text>
                               Save
                               </Text>
                            </TouchableOpacity>
                          </View> */}
                        </View>
                      </View>
                    </ScrollView>
                  </SafeAreaView>
               
           
        ) : (
         
      
                  <SafeAreaView style={styles.safeContainer}>
                    <ScrollView style={styles.scrollView}>
                      <View style={[ProfileStyles.content]}>
                        <View>
                          <Text style={[ProfileStyles.regisText,{marginTop:10}]}>
                            Add Your Store
                          </Text>
                        </View>

                        <View>
                          <View style={[ProfileStyles.headContainer]}>
                            <View>
                              <Text style={[ProfileStyles.headText]}>
                                Store Name
                              </Text>
                            </View>
                            <TextInput
                              onChangeText={(value) =>
                                setForm({ ...form, name: value })
                              }
                              style={[ProfileStyles.inputBoxDesk]}
                              placeholder=" Store name"
                              onBlur={() => FirstnameValidate(form.name)}
                              value={form.name}
                            />
                            <View>
                              <Text
                                style={{
                                  color: "red",
                                  marginLeft: 6,
                                  marginBottom: 0,
                                  fontSize: 13,
                                }}
                              >
                                {error.nameErr}
                              </Text>
                            </View>
                          </View>
                          <View style={ProfileStyles.headContainer}>
                            <View>
                              <Text style={ProfileStyles.headText}>
                                Store Category
                              </Text>
                            </View>
                            <View   
                            // style={[ProfileStyles.inputBoxDesk]}
                             >
                            <SelectBox
                             
                              placeholder="Store Category"
                                  options={K_OPTIONS}
                               selectedValues={selectedTeams}
                               onMultiSelect={onMultiChange()}
                               onTapClose={onMultiChange()}
                              isMulti
      />
      </View>
                            {/* <TextInput
                              onChangeText={(value) =>
                                setForm({ ...form, category: value })
                              }
                              style={[ProfileStyles.inputBoxDesk]}
                              onBlur={() => CategoryValidate(form.category)}
                              placeholder=" Store Category"
                              value={form.category}
                            /> */}
                            <View>
                              <Text
                                style={{
                                  color: "red",
                                  marginLeft: 6,
                                  marginBottom: 0,
                                  fontSize: 13,
                                }}
                              >
                                {error.categoryErr}
                              </Text>
                            </View>
                          </View>
                          <View style={ProfileStyles.headContainer}>
                         
                              <Text style={ProfileStyles.headText}>
                                  Upload Store Image
                                 </Text>
                          
                           
                              <TouchableOpacity
                                 onPress={()=>
                                    ImagePicker.launchImageLibrary(
                                      {
                                      
                                        mediaType: 'photo',
                                        includeBase64: false,
                                        maxHeight:200,
                                        maxWidth:200,
                                        selectionLimit: 3,
          
                                      },
                                      (response ) => {
                                        setState({ resourcePath: response.assets[0].uri })
                                      },
                                    )}
                                style={ProfileStyles.uploadbtn}
                              >
                                  <Text>
                                     Upload Images
                                    </Text>
                              </TouchableOpacity>
                              <Image source={
                                 state.resourcePath

                         }
                         style={{marginTop:10,width:108,height:130}}
                         />  

                            <Text>
                              <Text
                                style={{
                                  color: "red",
                                  marginLeft: 6,
                                  marginBottom: 0,
                                  fontSize: 13,
                                }}
                              >
                                {error.emailErr}
                              </Text>
                            </Text>
                          </View>

                          <View style={ProfileStyles.headContainer}>
                           
                              <Text style={ProfileStyles.headText}>
                                Store Description
                              </Text>
                           
                            <TextInput
                              onChangeText={(value) =>
                                setForm({ ...form, description: value })
                              }
                              style={[
                                ProfileStyles.inputBoxDesk,
                                { height: 100 },
                              ]}
                              placeholder=" Store Description"
                              // secureTextEntry={true}
                              numberOfLines={4}
                              multiline={true}
                              onBlur={() =>
                                DescriptionValidate(form.description)
                              }
                              value={form.description}
                              keyboardType="number-pad"
                            />
                            <View>
                              <Text
                                style={{
                                  color: "red",
                                  marginLeft: 6,
                                  marginBottom: 0,
                                  fontSize: 13,
                                }}
                              >
                                {error.descriptionErr}
                              </Text>
                            </View>
                          </View>

                          <View style={ProfileStyles.headContainer}>
                            <View>
                              <Text style={ProfileStyles.headText}>
                                Store Location
                              </Text>
                            </View>
                            <SelectBox
                              style={[ProfileStyles.inputBox]}
                              placeholder="Store Category"
                                  options={store_Location_OPTIONS}
                               selectedValues={storeLoc}
                               onMultiSelect={onMultiChangeStore()}
                               onTapClose={onMultiChangeStore()}
                              isMulti
      />
                            {/* <TextInput
                               onChangeText={(password) => setPassword(password)}
                              onChangeText={(value) =>
                                setForm({ ...form, storelocation: value })
                              }
                              style={[ProfileStyles.inputBoxDesk]}
                              placeholder=" Store Location"
                              secureTextEntry={true}
                              onBlur={() =>
                                StoreLocationValidate(form.storelocation)
                              }
                              value={form.storelocation}
                              maxLength={10}
                              keyboardType="number-pad"
                            /> */}
                            <View>
                              <Text
                                style={{
                                  color: "red",
                                  marginLeft: 6,
                                  marginBottom: 0,
                                  fontSize: 13,
                                }}
                              >
                                {error.storelocationErr}
                              </Text>
                            </View>
                          </View>

                          <View style={ProfileStyles.headContainer}>
                            <View>
                              <Text style={ProfileStyles.headText}>
                                Store Type
                              </Text>
                            </View>
                            <TextInput
                              onChangeText={(value) =>
                                setForm({ ...form, storetype: value })
                              }
                              style={[ProfileStyles.inputBoxDesk]}
                              placeholder=" Store Type"
                              onBlur={() => StoreTypeValidate(form.storetype)}
                              value={form.storetype}
                              maxLength={10}
                              keyboardType="number-pad"
                            />
                            <View>
                              <Text
                                style={{
                                  color: "red",
                                  marginLeft: 6,
                                  marginBottom: 0,
                                  fontSize: 13,
                                }}
                              >
                                {error.storetypeErr}
                              </Text>
                            </View>
                          </View>

                          <View style={ProfileStyles.headContainer}>
                            <View>
                              <Text style={ProfileStyles.headText}>
                                Store License Number
                                </Text>
                            </View>
                            <TextInput
                              onChangeText={(value) =>
                                setForm({ ...form, license: value })
                              }
                              style={[ProfileStyles.inputBoxDesk]}
                              placeholder=" Store License Number"
                              onBlur={() => LicenseValidate(form.license)}
                              value={form.license}
                            />
                            <View>
                              <Text
                                style={{
                                  color: "red",
                                  marginLeft: 6,
                                  marginBottom: 0,
                                  fontSize: 13,
                                }}
                              >
                                {error.licenseErr}
                              </Text>
                            </View>
                          </View>
                          <View style={ProfileStyles.headContainer}>
                            <View>
                              <Text style={ProfileStyles.headText}>
                                Store Address
                              </Text>
                            </View>
                            <TextInput
                              onChangeText={(value) =>
                                setForm({ ...form, address: value })
                              }
                              style={[ProfileStyles.inputBoxDesk]}
                              placeholder=" Store Address"
                              onBlur={() => AddressValidate(form.address)}
                              value={form.address}
                            />
                            <View>
                              <Text
                                style={{
                                  color: "red",
                                  marginLeft: 6,
                                  marginBottom: 0,
                                  fontSize: 13,
                                }}
                              >
                                {error.addressErr}
                              </Text>
                            </View>
                          </View>
                          <View style={ProfileStyles.headContainer}>
                            <View>
                              <Text style={ProfileStyles.headText}>
                                Serving Location
                              </Text>
                            </View>
                            <SelectBox
                              style={[ProfileStyles.inputBox]}
                              placeholder="Store Category"
                                  options={serv_Location_OPTIONS}
                               selectedValues={servLoc}
                               onMultiSelect={onMultiChangeServ()}
                               onTapClose={onMultiChangeServ()}
                              isMulti
      />
                            {/* <TextInput
                              onChangeText={(value) =>
                                setForm({ ...form, servinglocation: value })
                              }
                              style={[ProfileStyles.inputBoxDesk]}
                              placeholder=" Serving Location"
                              onBlur={() =>
                                ServLocationValidate(form.servinglocation)
                              }
                              value={form.servinglocation}
                            /> */}
                            <View>
                              <Text
                                style={{
                                  color: "red",
                                  marginLeft: 6,
                                  marginBottom: 0,
                                  fontSize: 13,
                                }}
                              >
                                {error.servinglocationErr}
                              </Text>
                            </View>
                          </View>
                          <View style={ProfileStyles.headContainer}>
                            <View>
                              <Text style={ProfileStyles.headText}>
                                Store Email
                              </Text>
                            </View>
                            <TextInput
                              onChangeText={(value) =>
                                setForm({ ...form, email: value })
                              }
                              style={[ProfileStyles.inputBoxDesk]}
                              placeholder=" Store Email"
                              onBlur={() => EmailValidate(form.email)}
                              value={form.email}
                            />
                            <View>
                              <Text
                                style={{
                                  color: "red",
                                  marginLeft: 6,
                                  marginBottom: 0,
                                  fontSize: 13,
                                }}
                              >
                                {error.emailErr}
                              </Text>
                            </View>
                          </View>
                          <View style={ProfileStyles.headContainer}>
                            <View>
                              <Text style={ProfileStyles.headText}>
                                Store Country
                              </Text>
                            </View>
                            <TextInput
                              onChangeText={(value) =>
                                setForm({ ...form, storecountry: value })
                              }
                              style={[ProfileStyles.inputBoxDesk]}
                              placeholder=" Store Country"
                              onBlur={() => countryValidate(form.storecountry)}
                              value={form.storecountry}
                            />
                            <View>
                              <Text
                                style={{
                                  color: "red",
                                  marginLeft: 6,
                                  marginBottom: 0,
                                  fontSize: 13,
                                }}
                              >
                                {error.storecountryErr}
                              </Text>
                            </View>
                          </View>
                          <View style={ProfileStyles.headContainer}>
                            <View>
                              <Text style={ProfileStyles.headText}>
                                Store Contact
                              </Text>
                            </View>
                            <TextInput
                              onChangeText={(value) =>
                                setForm({ ...form, storecontact: value })
                              }
                              style={[ProfileStyles.inputBoxDesk]}
                              placeholder=" Store Contact"
                              onBlur={() =>
                                PhonenumberValidate(form.storecontact)
                              }
                              value={form.storecontact}
                            />
                            <View>
                              <Text
                                style={{
                                  color: "red",
                                  marginLeft: 6,
                                  marginBottom: 0,
                                  fontSize: 13,
                                }}
                              >
                                {error.storecontactErr}
                              </Text>
                            </View>
                          </View>
                          <View style={ProfileStyles.headContainer}>
                            <View>
                              <Text style={ProfileStyles.headText}>
                                Store GST Number
                              </Text>
                            </View>
                            <TextInput
                              onChangeText={(value) =>
                                setForm({ ...form, storegst: value })
                              }
                              style={[ProfileStyles.inputBoxDesk]}
                              placeholder=" Store GST Number"
                              onBlur={() => GstValidate(form.storegst)}
                              value={form.storegst}
                            />
                            <View>
                              <Text
                                style={{
                                  color: "red",
                                  marginLeft: 6,
                                  marginBottom: 0,
                                  fontSize: 13,
                                }}
                              >
                                {error.storegstErr}
                              </Text>
                            </View>
                          </View>
                          {/* <View style={{ flex: 1, alignItems: "center" }}>
                            <TouchableOpacity style={ProfileStyles.uploadbtn}>
                                <Text>
                                    Save
                                    </Text>
                            </TouchableOpacity>
                          </View> */}
                        </View>
                      </View>
                    </ScrollView>
                  </SafeAreaView>
               
                
              
        )}
     
        </>
        
      
    );
    function onMultiChange() {
        return (item:any) => setSelectedTeams(xorBy(selectedTeams, [item], 'id'))
      }
      function onMultiChangeStore() {
        return (item:any) => setStoreLoc(xorBy(storeLoc, [item], 'id'))
      }
      function onMultiChangeServ() {
        return (item:any) => setServLoc(xorBy(servLoc, [item], 'id'))
      }
    
    

      function onChange() {
        return (val:any) => setSelectedTeam(val)
      }
    
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
        // marginTop:90
        // display:"flex",
        
        // justifyContent:"center",
  
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
