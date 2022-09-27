import React, { useEffect, useState } from "react";

import { Dimensions } from "react-native";
import Checkbox from "expo-checkbox";
// import country from "./dropDown.ts"
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
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ProfileStyles } from "./css/profile";

import { RouteStackParamList } from "../RouteStackParams";
import { StackNavigationProp } from "@react-navigation/stack";

import { Dropdown } from "react-native-element-dropdown";

import Option from "react-select/dist/declarations/src/components/Option";
import Input from "react-select/dist/declarations/src/components/Input";
import { useFormik } from "formik";
import Select from "react-select";
import { Country, State, City } from "country-state-city";
console.log("njiumim", Country);
console.log(Country.getAllCountries());
console.log(State.getAllStates());
import axios from "axios";
const { width, height } = Dimensions.get("window");

type registration = StackNavigationProp<RouteStackParamList, "Login">;
export default function Registration() {
  const navigation = useNavigation<registration>();
  const initialstate = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    checkPassword: "",

    phonenumber: "",
    country: "",
    state: "",
    city: "",
    business: "",
  };
  const errmsg = {
    firstNameErr: "",
    lastNameErr: "",
    emailErr: "",
    passwordErr: "",
    checkPasswordErr: "",
    phonenumberErr: "",
    countryErr: "",
    stateErr: "",
    cityErr: "",
    businessErr: "",
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
    if (form.country[1] === "") {
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
  function checkPasswordValidate(value: string) {
    if (form.checkPassword === "") {
      setError({ ...error, checkPasswordErr: "*This field can not be empty" });
    } else if (form.checkPassword !== form.password) {
      setError({
        ...error,
        checkPasswordErr: "Password did not match",
      });
    } else {
      setError({ ...error, checkPasswordErr: "" });
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
  const [procedures, setSelectedItems] = useState([]);
  const [proceduresData, setProcedureData] = useState([]);

  // console.log("qqq",dropDown.length);

  const newww = [
    { id: 2, name: "hamesh" },
    { id: 3, name: "pari" },
  ];

  console.log("llll", newww);

  //   const stateData = [
  //     { label: "Andhra Pradesh", value: "Andhra Pradesh" },
  //     { label: "Tamil Nadu", value: "Tamil Nadu" },
  //     { label: "Kerala", value: "kerala" },
  //  {label="Andaman and Nicobar Islands",value="Andaman and Nicobar Islands"},
  //  {label="Arunachal Pradesh",value="Arunachal Pradesh"},
  //  {label="Assam",value="Assam"},
  //  {label="Bihar",value="Bihar"},
  //  {label="Chandigarh",value="Chandigarh"},
  //  {label="Chhattisgarh",value="Chhattisgarh"},
  //  {label="Dadar and Nagar Haveli",value="Dadar and Nagar Haveli"},
  //  {label="Daman and Diu",value="Daman and Diu"},
  //  {label="Delhi",value="Delhi"},
  //  {label="Lakshadweep",value="Lakshadweep"},
  //  {label="Puducherry",value="Puducherry"},
  //  {label="Goa",value="Goa"},
  //  {label="Gujarat",value="Gujarat"},
  //  {label="Haryana",value="Haryana"},
  //  {label="Himachal Pradesh"    ,value="Himachal Pradesh"},
  // { label="Jammu and Kashmir", value="Jammu and Kashmir"},
  // { label="Jharkhand",value="Jharkhand"},
  // { label="Karnataka",value="Karnataka"},
  //  {label="Kerala",value="Kerala"},
  // { label="Madhya Pradesh",value="Madhya Pradesh"},
  // { label="Maharashtra",value="Maharashtra"},
  // { label="Manipur",value="Manipur"},
  // { label="Meghalaya",value="Meghalaya"},
  // { label="Mizoram",value="Mizoram"},
  // { label="Nagaland",value="Nagaland"},
  // { label="Odisha",value="Odisha"},
  // { label="Punjab",value="Punjab"},
  // { label="Rajasthan", value="Rajasthan"},
  // { label="Sikkim",value="Sikkim"},
  // { label="Tamil Nadu", value="Tamil Nadu"},
  // { label="Telangana",value="Telangana"},
  // { label="Tripura",value="Tripura"},
  // { label="Uttar Pradesh",value="Uttar Pradesh"},
  //  {label="Uttarakhand",value="Uttarakhand"},
  // { label="West Bengal",value="West Bengal"},
  //   ];
  //   const cityData = [
  //     { label: "Trichy", value: "Trichy" },
  //     { label: "cuddalore", value: "cuddalore" },
  //     { label: "Madurai", value: "Madurai" },
  //   ];

  const addressFromik = useFormik({
    initialValues: {
      Country: "India",
      state: null,
      city: null,
    },
    onSubmit: (values) => console.log(JSON.stringify(values)),
  });
  console.log("dwede", Country.getAllCountries());
  const countries = Country.getAllCountries();
  console.log("jniucnc", countries);
  const updatedCountries = countries.map((country: any) => ({
    label: country.name,
    value: country.id,
    ...country,
  }));

  const { values, handleSubmit, setFieldValue, setValues } = addressFromik;

  useEffect(() => {}, [values]);

  const [countryData, setCountryData] = useState([]);
  const [stateData, setStateData] = useState([]);
  const [cityData, setCityData] = useState([]);
  const [country, setCountry] = useState(null);
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);
  const [countryName, setCountryName] = useState(null);
  const [stateName, setStateName] = useState(null);
  const [cityName, setCityName] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    var config = {
      method: "get",
      url: `https://api.countrystatecity.in/v1/countries`,
      headers: {
        "X-CSCAPI-KEY":
          "SXhYOGJ6RzRoM3RIaEI5ZHhmaHBxekpEdWVSdHdLWlN6WUJKNzJEUA==",
      },
    };

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        var count = Object.keys(response.data).length;
        const countryArray: any = [];
        for (var i = 0; i < count; i++) {
          countryArray.push({
            value: response.data[i].iso2,
            label: response.data[i].name,
          });
        }
        setCountryData(countryArray);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleState = (countryCode: any) => {
    var config: any = {
      method: "get",
      url:
        "https://api.countrystatecity.in/v1/countries/" +
        countryCode +
        "/states",
      headers: {
        "X-CSCAPI-KEY":
          "SXhYOGJ6RzRoM3RIaEI5ZHhmaHBxekpEdWVSdHdLWlN6WUJKNzJEUA==",
      },
    };

    axios(config)
      .then(function (response: any) {
        console.log(JSON.stringify(response.data));
        var count = Object.keys(response.data).length;
        const stateArray: any = [];
        for (var i = 0; i < count; i++) {
          stateArray.push({
            value: response.data[i].iso2,
            label: response.data[i].name,
          });
        }
        setStateData(stateArray);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleCity = (countryCode: any, stateCode: any) => {
    var config: any = {
      method: "get",
      url:
        "https://api.countrystatecity.in/v1/countries/" +
        countryCode +
        "/states/" +
        stateCode +
        "/cities",
      headers: {
        "X-CSCAPI-KEY":
          "SXhYOGJ6RzRoM3RIaEI5ZHhmaHBxekpEdWVSdHdLWlN6WUJKNzJEUA==",
      },
    };

    axios(config)
      .then(function (response: any) {
        console.log(JSON.stringify(response.data));
        var count = Object.keys(response.data).length;
        const cityArray: any = [];
        for (var i = 0; i < count; i++) {
          cityArray.push({
            value: response.data[i].id,
            label: response.data[i].name,
          });
        }
        setCityData(cityArray);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView style={styles.scrollView}>
        <View style={[ProfileStyles.content]}>
          <View>
            <Text style={ProfileStyles.regisText}>Registration</Text>
          </View>

          <View>
            <View style={[ProfileStyles.headContainer]}>
              <View>
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
                  style={{
                    color: "red",
                    marginLeft: 6,
                    marginBottom: 0,
                    fontSize: 13,
                  }}
                >
                  {error.firstNameErr}
                </Text>
              </Text>
            </View>
            <View style={ProfileStyles.headContainer}>
              <View>
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
                  style={{
                    color: "red",
                    marginLeft: 6,
                    marginBottom: 0,
                    fontSize: 13,
                  }}
                >
                  {error.lastNameErr}
                </Text>
              </Text>
            </View>
            <View style={ProfileStyles.headContainer}>
              <View>
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
                  style={{
                    color: "red",
                    marginLeft: 6,
                    marginBottom: 0,
                    fontSize: 13,
                  }}
                >
                  {error.passwordErr}
                </Text>
              </Text>
            </View>

            <View style={ProfileStyles.headContainer}>
              <View>
                <Text style={ProfileStyles.headText}>Confirm Password</Text>
              </View>
              <TextInput
                //  onChangeText={(password) => setPassword(password)}
                onChangeText={(value) =>
                  setForm({ ...form, checkPassword: value })
                }
                style={[ProfileStyles.inputBox]}
                placeholder="Confirm Password"
                secureTextEntry={true}
                onBlur={() => checkPasswordValidate(form.checkPassword)}
                value={form.checkPassword}
                maxLength={10}
                keyboardType="number-pad"
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
                  {error.checkPasswordErr}
                </Text>
              </Text>
            </View>

            <View style={ProfileStyles.headContainer}>
              <View>
                <Text style={ProfileStyles.headText}>Phone number</Text>
              </View>
              <TextInput
                onChangeText={(value) =>
                  setForm({ ...form, phonenumber: value })
                }
                style={[ProfileStyles.inputBox]}
                placeholder="Phone Number"
                onBlur={() => PhonenumberValidate(form.phonenumber)}
                value={form.phonenumber}
                maxLength={10}
                keyboardType="number-pad"
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
                  {error.phonenumberErr}
                </Text>
              </Text>
            </View>

            <View style={ProfileStyles.headContainer}>
              <View>
                <Text style={ProfileStyles.headText}>Country</Text>
              </View>

              <Dropdown
                style={[
                  ProfileStyles.inputBox,
                  isFocus && { borderColor: "blue" },
                ]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={countryData}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? "Select country" : "..."}
                searchPlaceholder="Search..."
                value={country}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={(item) => {
                  setCountry(item.value);
                  handleState(item.value);
                  setCountryName(item.label);
                  setIsFocus(false);
                }}
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
                  {error.countryErr}
                </Text>
              </Text>
            </View>

            <View style={ProfileStyles.headContainer}>
              <View>
                <Text style={ProfileStyles.headText}>State</Text>
              </View>
              <Dropdown
                style={[
                  ProfileStyles.inputBox,
                  isFocus && { borderColor: "blue" },
                ]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={stateData}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? "Select state" : "..."}
                searchPlaceholder="Search..."
                value={state}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={(item) => {
                  setState(item.value);
                  handleCity(country, item.value);
                  setStateName(item.label);
                  setIsFocus(false);
                }}
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
                  {error.stateErr}
                </Text>
              </Text>
            </View>
            <View style={ProfileStyles.headContainer}>
              <View>
                <Text style={ProfileStyles.headText}>City</Text>
              </View>

              <Dropdown
                style={[
                  ProfileStyles.inputBox,
                  isFocus && { borderColor: "blue" },
                ]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={cityData}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? "Select city" : "..."}
                searchPlaceholder="Search..."
                value={city}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={(item) => {
                  setCity(item.value);
                  setCityName(item.label);
                  setIsFocus(false);
                }}
              />

              {/* <Dropdown
       style={[ProfileStyles.inputBox]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={stateData}
        // search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select city"
        searchPlaceholder="Search..."
        // value={value}
        value={form.city}
        onBlur={() => countryValidate(form.city)}
        onChange={(value) => setForm({ ...form, city:  value.value })}
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
                  {error.cityErr}
                </Text>
              </Text>
            </View>

            <View style={ProfileStyles.headContainer}>
              <View>
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
                  style={{
                    color: "red",
                    marginLeft: 6,
                    marginBottom: 0,
                    fontSize: 13,
                  }}
                >
                  {error.businessErr}
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.section}>
              <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
              />
              <Text style={styles.paragraph}>
                I've read and agreed to the terms of use,privacy notice and
                offer details:
                <Text
                  onPress={() => navigation.navigate("TermsPage")}
                  style={{ fontWeight: "bold", color: "#336699" }}
                >
                  Terms of Service,privacy notice
                </Text>
                and
                <Text
                  onPress={() => navigation.navigate("TermsPage")}
                  style={{ fontWeight: "bold", color: "#336699" }}
                >
                  offer details
                </Text>
              </Text>
            </View>
            <View style={styles.section}>
              <Checkbox
                style={styles.checkbox}
                value={isChecked2}
                onValueChange={setChecked2}
              />
              <Text style={styles.paragraph}>
                Please don't send me any marketing communications
              </Text>
            </View>

            <TouchableOpacity
              //  onPress={() => navigation.navigate('Login')}

              style={[ProfileStyles.greenButton]}
            >
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
    backgroundColor: "white",
    // marginHorizontal: 20,
  },
  container: {
    //   flex: 1,
    //   marginHorizontal: 16,
    //   marginVertical: 32,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    width: 322,
  },
  paragraph: {
    fontSize: 10,
  },
  checkbox: {
    margin: 8,
  },
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
