import React, { useState } from "react";
import { Dimensions } from "react-native";
import Checkbox from "expo-checkbox";
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
  StatusBar,
} from "react-native";
import * as ImagePicker from "react-native-image-picker";
import { ProfileStyles } from "../css/profile";
import { RouteStackParamList } from "../../RouteStackParams";
import { StackNavigationProp } from "@react-navigation/stack";
const { width, height } = Dimensions.get("window");
import { useNavigation } from "@react-navigation/native";
import { useMediaQuery } from "react-responsive";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";

import SelectBox from "react-native-multi-selectbox";
import { xorBy } from "lodash";
type login = StackNavigationProp<RouteStackParamList, "ForgetPassword">;
export default function EditPayment() {
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
    storeAccount: "",
    ConfirmAccount: "",
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
    storeAccountErr: "",
    ConfirmAccountErr:""
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
  function AccountnumberValidate(value: string) {
    if (form.storeAccount === "") {
      setError({ ...error, storeAccountErr: "*This field can not be empty" });
    } else if (!!!form.storeAccount.match("[0-9]{10}")) {
      setError({
        ...error,
        storeAccountErr: "Please provide valid account number",
      });
    } else {
      setError({ ...error, storeAccountErr: "" });
    }
  }
  function ConfirmAccountValidate(value: string) {
    if (form.ConfirmAccount === "") {
      setError({ ...error, ConfirmAccountErr: "*This field can not be empty" });
    } else if (!!!form.ConfirmAccount.match("[0-9]{10}")) {
      setError({
        ...error,
        ConfirmAccountErr: "Please provide valid phone number",
      });
    } else {
      setError({ ...error, ConfirmAccountErr: "" });
    }
  }
 
  const options = {
    title: "Select Image",
    type: "library",
    options: {
      selectionLimit: 1,
      mediaType: "photo",
      includeBase64: false,
    },
  };

  const [state, setState] = useState({ resourcePath: "" });
  const [state2, setState2] = useState({ resourcePath: "" });

  const [selectedTeam, setSelectedTeam] = useState({});
  const [selectedTeams, setSelectedTeams] = useState([]);

  const [storeLocation, setStoreLocation] = useState({});
  const [storeLoc, setStoreLoc] = useState([]);

  const [servLoc, setServLoc] = useState([]);

  const [profilePic, setprofilePic] = useState(true);

  const K_OPTIONS = [
    {
      item: "Grocery",
      id: "GROC",
    },
    {
      item: "Mobile",
      id: " MO",
    },
    {
      item: "Milk",
      id: "ML",
    },
    {
      item: "Head Set",
      id: "HDT",
    },
    {
      item: "Chocolate",
      id: "CHO",
    },
    {
      item: "Watches",
      id: "WAT",
    },
  ];
  const store_Location_OPTIONS = [
    {
      item: "Chennai",
      id: "GROC",
    },
    {
      item: "Mumbai",
      id: " MO",
    },
    {
      item: "Kolkata",
      id: "ML",
    },
    {
      item: "Karnataka",
      id: "HDT",
    },
    {
      item: "Shimla",
      id: "CHO",
    },
    {
      item: "Watches",
      id: "WAT",
    },
  ];
  const serv_Location_OPTIONS = [
    {
      item: "Trichy",
      id: "GROC",
    },
    {
      item: "Vellore",
      id: " MO",
    },
    {
      item: "Kolkata",
      id: "ML",
    },
    {
      item: "Karnataka",
      id: "HDT",
    },
    {
      item: "Shimla",
      id: "CHO",
    },
    {
      item: "Watches",
      id: "WAT",
    },
  ];

  return (
    <>
      {isTabletOrMobileDevice ? (
          <SafeAreaView style={styles.safeContainer}>
          <ScrollView style={styles.scrollView}>
            <View style={[ProfileStyles.content]}>
              <View>
                <Text style={[ProfileStyles.regisText, { marginTop: 10 }]}>
                  Add Your Store
                </Text>
              </View>
              
              <View>
                <View style={[ProfileStyles.headContainer]}>
                  <View>
                    <Text style={[ProfileStyles.headText]}>Account Holder Name</Text>
                  </View>
                  <TextInput
                    onChangeText={(value) => setForm({ ...form, name: value })}
                    style={[ProfileStyles.inputBox]}
                    placeholder=" Account Holder Name"
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
                    <Text style={ProfileStyles.headText}>Account Number</Text>
                  </View>
                  <TextInput
                    onChangeText={(value) =>
                      setForm({ ...form, storeAccount: value })
                    }
                    style={[ProfileStyles.inputBox]}
                    placeholder=" Account Number"
                    // onBlur={() => AccountnumberValidate(form.storeAccount)}
                    value={form.storeAccount}
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
                    <Text style={ProfileStyles.headText}>Confirm Account Number</Text>
                  </View>
                  <TextInput
                    onChangeText={(value) =>
                      setForm({ ...form, ConfirmAccount: value })
                    }
                    style={[ProfileStyles.inputBox]}
                    placeholder=" Confirm Account Number"
                    // onBlur={() => ConfirmAccountValidate(form.ConfirmAccount)}
                    value={form.ConfirmAccount}
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
                      {error.ConfirmAccountErr}
                    </Text>
                  </View>
                </View>

                <View style={ProfileStyles.headContainer}>
                  <View>
                    <Text style={ProfileStyles.headText}>
                      IFSC Code
                    </Text>
                  </View>
                  <TextInput
                    onChangeText={(value) =>
                      setForm({ ...form, license: value })
                    }
                    style={[ProfileStyles.inputBox]}
                    placeholder="  Ifsc Code"
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
                    <Text style={ProfileStyles.headText}>Store Address</Text>
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
                    <Text style={ProfileStyles.headText}>Phone Number</Text>
                  </View>
                  <TextInput
                    onChangeText={(value) =>
                      setForm({ ...form, storecontact: value })
                    }
                    style={[ProfileStyles.inputBox]}
                    placeholder=" Phone Number"
                    onBlur={() => PhonenumberValidate(form.storecontact)}
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
                    <Text style={ProfileStyles.headText}>Email</Text>
                  </View>
                  <TextInput
                    onChangeText={(value) => setForm({ ...form, email: value })}
                    style={[ProfileStyles.inputBox]}
                    placeholder=" Email"
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
                <View
                  style={[
                    ProfileStyles.headContainer,
                    { flex: 1, justifyContent: "center", flexDirection: "row" },
                  ]}
                >
                  <TouchableOpacity style={[ProfileStyles.discardBtn]}>
                    <Text style={{ color: "white", fontWeight: "bold" }}>
                      Discard
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[ProfileStyles.discardBtn]}>
                    <Text style={{ color: "white", fontWeight: "bold" }}>
                      Save
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      
      ) : (
        <SafeAreaView style={styles.safeContainer}>
          <ScrollView style={styles.scrollView}>
            <View style={[ProfileStyles.content]}>
              <View>
                <Text style={[ProfileStyles.regisText, { marginTop: 10 }]}>
                  Add Your Store
                </Text>
              </View>
              
              <View>
                <View style={[ProfileStyles.headContainer]}>
                  <View>
                    <Text style={[ProfileStyles.headText]}>Account Holder Name</Text>
                  </View>
                  <TextInput
                    onChangeText={(value) => setForm({ ...form, name: value })}
                    style={[ProfileStyles.inputBoxDesk]}
                    placeholder=" Account Holder Name"
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
                    <Text style={ProfileStyles.headText}>Account Number</Text>
                  </View>
                  <TextInput
                    onChangeText={(value) =>
                      setForm({ ...form, storeAccount: value })
                    }
                    style={[ProfileStyles.inputBoxDesk]}
                    placeholder=" Account Number"
                    // onBlur={() => AccountnumberValidate(form.storeAccount)}
                    value={form.storeAccount}
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
                    <Text style={ProfileStyles.headText}>Confirm Account Number</Text>
                  </View>
                  <TextInput
                    onChangeText={(value) =>
                      setForm({ ...form, ConfirmAccount: value })
                    }
                    style={[ProfileStyles.inputBoxDesk]}
                    placeholder=" Confirm Account Number"
                    // onBlur={() => ConfirmAccountValidate(form.ConfirmAccount)}
                    value={form.ConfirmAccount}
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
                      {error.ConfirmAccountErr}
                    </Text>
                  </View>
                </View>

                <View style={ProfileStyles.headContainer}>
                  <View>
                    <Text style={ProfileStyles.headText}>
                      IFSC Code
                    </Text>
                  </View>
                  <TextInput
                    onChangeText={(value) =>
                      setForm({ ...form, license: value })
                    }
                    style={[ProfileStyles.inputBoxDesk]}
                    placeholder="  Ifsc Code"
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
                    <Text style={ProfileStyles.headText}>Store Address</Text>
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
                    <Text style={ProfileStyles.headText}>Phone Number</Text>
                  </View>
                  <TextInput
                    onChangeText={(value) =>
                      setForm({ ...form, storecontact: value })
                    }
                    style={[ProfileStyles.inputBoxDesk]}
                    placeholder=" Phone Number"
                    onBlur={() => PhonenumberValidate(form.storecontact)}
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
                    <Text style={ProfileStyles.headText}>Email</Text>
                  </View>
                  <TextInput
                    onChangeText={(value) => setForm({ ...form, email: value })}
                    style={[ProfileStyles.inputBoxDesk]}
                    placeholder=" Email"
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
                <View
                  style={[
                    ProfileStyles.headContainer,
                    { flex: 1, justifyContent: "center", flexDirection: "row" },
                  ]}
                >
                  <TouchableOpacity style={[ProfileStyles.discardBtn]}>
                    <Text style={{ color: "white", fontWeight: "bold" }}>
                      Discard
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[ProfileStyles.discardBtn]}>
                    <Text style={{ color: "white", fontWeight: "bold" }}>
                      Save
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      )}
    </>
  );
  function onMultiChange() {
    return (item: any) => setSelectedTeams(xorBy(selectedTeams, [item], "id"));
  }
  function onMultiChangeStore() {
    return (item: any) => setStoreLoc(xorBy(storeLoc, [item], "id"));
  }
  function onMultiChangeServ() {
    return (item: any) => setServLoc(xorBy(servLoc, [item], "id"));
  }

  function onChange() {
    return (val: any) => setSelectedTeam(val);
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
    backgroundColor: "white",
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
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },
});
