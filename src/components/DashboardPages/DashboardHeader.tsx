import { ImagePickerIOS, StatusBar } from "react-native";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Alert,
  Modal,
  Pressable,
  Image,
} from "react-native";
// import {Button,  Menu, Divider, Provider,List } from 'react-native-paper';
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProfileStyles } from "../../components/css/profile";
import { RouteStackParamList } from "../../../src/RouteStackParams";
import { StackNavigationProp } from "@react-navigation/stack";

import { useNavigation } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { Ionicons, AntDesign, Entypo } from "@expo/vector-icons";
import DashboardMain from "./DashboardMain";
import "@expo/match-media";
import { useMediaQuery } from "react-responsive";
import Dashboard from "../Screens/Dashboard";

import * as ImagePicker from "react-native-image-picker";

import { launchImageLibrary } from "react-native-image-picker";
import AddNewStore from "../utils/AddNewStore";
import EditStore from "../utils/EditStore";
import EditOrder from "../utils/EditOrder";
import EditPayment from "../utils/EditPayment";
const Tab = createMaterialTopTabNavigator();

const options: any = {
  title: "Select Image",
  type: "library",
  options: {
    selectionLimit: 1,
    mediaType: "photo",
    includeBase64: false,
  },
};

type layout = StackNavigationProp<RouteStackParamList, "Login">;

function DashboardHeader() {
  const navigation = useNavigation<layout>();

  const isTabletOrMobileDevice = useMediaQuery({
    maxDeviceWidth: 1244,
    // alternatively...
    query: "(max-device-width: 744px)",
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const [toggleState, setToggleState] = useState(2);
  const [state, setState] = useState({ resourcePath: "" });
  const toggleTab = (index: any) => {
    setToggleState(index);
  };

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  // const openGallery = async() => {
  //   const images = await launchImageLibrary(options);
  // }

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
  console.log("imageeeeeeeeee", state);
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

  const openGallery = async () => {
    const images = await launchImageLibrary(options);
  };
  const [storeEdit, setStoreEdit] = useState(false);
  const [storePayment, setstorePayment] = useState(false);
  const [orderEdit, setorderEdit] = useState(false);
  const storeDetails = [
    {
      name: "Saravana Stores",
      id: 1,
      location: "Theni",
    },
    {
      name: "Vasan Eye Care",
      id: 2,
      location: "chennai",
    },
    {
      name: "Poorvika mobiles",
      id: 3,
      location: "Madurai",
    },
    {
      name: "TVS Motors",
      id: 4,
      location: "ooty",
    },
    {
      name: "Vasan Eye Care",
      id: 2,
      location: "chennai",
    },
    {
      name: "Poorvika mobiles",
      id: 3,
      location: "Madurai",
    },
    {
      name: "TVS Motors",
      id: 4,
      location: "ooty",
    },
  ];
  const orderDetails = [
    {
      name: "Headphone-242 Blue",
      id: 1,
      location: "Coimbatore",
      price: 1277,
    },
    {
      name: "LG’s webOS",
      id: 2,
      location: "Karur",
      price: 34000,
    },
    {
      name: "Micromax IN Note 1",
      id: 3,
      location: "Vellore",
      price: 41000,
    },
    {
      name: "Havells Freddo 70-Litre Cooler",
      id: 4,
      location: "Bombay",
      price: 2300,
    },
  ];
  return (
    <>
      <SafeAreaView>
        {isTabletOrMobileDevice ? (
          <View>
            <View
              style={{
                backgroundColor: "lightblue",
                height: 70,
                padding: 18,
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <TouchableOpacity
                style={{
                  padding: 13,
                  backgroundColor: "darkblue",
                  borderRadius: 9,
                }}
              >
                <View>
                  <Text style={{ color: "white", fontWeight: "bold" }}>
                    Start trail
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "column",
                paddingTop: 16,

                backgroundColor: "#F4DAFF",
              }}
            >
              <View style={[ProfileStyles.container]}>
                <TouchableOpacity
                  onPress={() => setOpen(true)}
                >
                  <Entypo
                    name="menu"
                    style={{ marginLeft: 15 }}
                    size={37}
                    color="black"
                  />
                </TouchableOpacity>
                {open ? (
                  <View
                    style={{
                      flex: 1,
                      backgroundColor: "white",
                      position: "absolute",
                      top: 44,
                      width: 205,
                      paddingTop: 30,
                      flexDirection: "column",
                    }}
                  >
                    <TouchableOpacity
                      style={[
                        ProfileStyles.tabs,
                        toggleState === 1
                          ? ProfileStyles.touched
                          : ProfileStyles.nonTouched,
                      ]}
                      onPress={() => {toggleTab(1); setOpen(false)}}
                    >
                      <View>
                        <Text
                          style={[
                            { fontWeight: "bold", zIndex: 2, color: "black" },
                          ]}
                        >
                          <Text>Store Selection</Text>
                        </Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={[
                        ProfileStyles.tabs,
                        toggleState === 2
                          ? ProfileStyles.touched
                          : ProfileStyles.nonTouched,
                      ]}
                      onPress={() => {toggleTab(2); setOpen(false)}}
                    >
                      <View>
                        <Text
                          style={[
                            { fontWeight: "bold", zIndex: 2, color: "black" },
                          ]}
                        >
                          Dashboard
                        </Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={[
                        ProfileStyles.tabs,
                        toggleState === 3
                          ? ProfileStyles.touched
                          : ProfileStyles.nonTouched,
                      ]}
                      onPress={() => {toggleTab(3); setOpen(false)}}
                    >
                      <View>
                        <Text
                          style={[
                            { fontWeight: "bold", zIndex: 2, color: "black" },
                          ]}
                        >
                          Stores
                        </Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={[
                        ProfileStyles.tabs,
                        toggleState === 4
                          ? ProfileStyles.touched
                          : ProfileStyles.nonTouched,
                      ]}
                      onPress={() => {toggleTab(4); setOpen(false)}}
                    >
                      <View>
                        <Text
                          style={[
                            { fontWeight: "bold", zIndex: 2, color: "black" },
                          ]}
                        >
                          Location
                        </Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={[
                        ProfileStyles.tabs,
                        toggleState === 5
                          ? ProfileStyles.touched
                          : ProfileStyles.nonTouched,
                      ]}
                      onPress={() => {toggleTab(5); setOpen(false)}}
                    >
                      <View>
                        <Text
                          style={[
                            { fontWeight: "bold", zIndex: 2, color: "black" },
                          ]}
                        >
                          Payment
                        </Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={[
                        ProfileStyles.tabs,
                        toggleState === 6
                          ? ProfileStyles.touched
                          : ProfileStyles.nonTouched,
                      ]}
                      onPress={() => {toggleTab(6); setOpen(false)}}
                    >
                      <View>
                        <Text
                          style={[
                            { fontWeight: "bold", zIndex: 2, color: "black" },
                          ]}
                        >
                          Orders
                        </Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={[
                        ProfileStyles.tabs,
                        toggleState === 7
                          ? ProfileStyles.touched
                          : ProfileStyles.nonTouched,
                      ]}
                      onPress={() => {toggleTab(7); setOpen(false)}}
                    >
                      <AntDesign name="plus" size={24} color="black" />
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={[
                        ProfileStyles.tabs,
                        toggleState === 8
                          ? ProfileStyles.touched
                          : ProfileStyles.nonTouched,
                      ]}
                      onPress={() => {toggleTab(8); setOpen(false)}}
                    >
                      <AntDesign name="search1" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[
                        ProfileStyles.tabs,
                        toggleState === 9
                          ? ProfileStyles.touched
                          : ProfileStyles.nonTouched,
                      ]}
                      onPress={() => {toggleTab(9); setOpen(false)}}
                    >
                      <Ionicons name="notifications" size={24} color="black" />
                    </TouchableOpacity>
                  </View>
                ) : (
                  ""
                )}
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  }}
                >
                  <TouchableOpacity
                    style={[
                      ProfileStyles.tabs,
                      toggleState === 10
                        ? ProfileStyles.touched
                        : ProfileStyles.nonTouched,
                    ]}
                    onPress={() => setOpen2(true)}
                  >
                    <Entypo
                      name="menu"
                      style={{ marginLeft: 15 }}
                      size={37}
                      color="black"
                    />
                    {/* <Text style={[{ fontWeight: "bold", zIndex: 2 , color: "black" }]}>
                 Profile
               </Text> */}
                  </TouchableOpacity>
                  {open2 ? (
                    <View
                      style={{
                        flex: 1,
                        backgroundColor: "white",
                        position: "absolute",
                        top: 44,
                        width: 205,
                        paddingTop: 30,
                        flexDirection: "column",
                      }}
                    >
                      <TouchableOpacity
                        style={[
                          ProfileStyles.tabs,
                          toggleState === 1
                            ? ProfileStyles.touched
                            : ProfileStyles.nonTouched,
                        ]}
                        onPress={() => {toggleTab(1); setOpen2(false)}}
                      >
                        <View>
                          <Text
                            style={[
                              { fontWeight: "bold", zIndex: 2, color: "black" },
                            ]}
                          >
                            <Text>Profile</Text>
                          </Text>
                        </View>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={[
                          ProfileStyles.tabs,
                          toggleState === 2
                            ? ProfileStyles.touched
                            : ProfileStyles.nonTouched,
                        ]}
                        onPress={() => {toggleTab(1); setOpen2(false)}}
                      >
                        <View>
                          <Text
                            style={[
                              { fontWeight: "bold", zIndex: 2, color: "black" },
                            ]}
                          >
                            Details
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  ) : (
                    ""
                  )}
                </View>
              </View>

              <View style={ProfileStyles.contentTabs}>
                <View
                  style={[
                    ProfileStyles.contentt,
                    toggleState === 1
                      ? ProfileStyles.activeContent
                      : ProfileStyles.InActiveContent,
                  ]}
                ></View>

                <View
                  style={[
                    ProfileStyles.content,
                    toggleState === 2
                      ? ProfileStyles.activeContent
                      : ProfileStyles.InActiveContent,
                  ]}
                >
                  <ScrollView>
                    <Dashboard />
                  </ScrollView>
                </View>

                <View
                  style={[
                    ProfileStyles.content,
                    toggleState === 3
                      ? ProfileStyles.activeContent
                      : ProfileStyles.InActiveContent,
                  ]}
                >
                  {storeEdit ? (
                    <EditStore />
                  ) : (
                    <View style={[ProfileStyles.storeCard]}>
                      <Text
                        style={{
                          textAlign: "center",
                          fontWeight: "bold",
                          marginBottom: 10,
                          marginTop: 6,
                        }}
                      >
                        Store Details
                      </Text>
                      <View
                        style={{
                          marginTop: 20,
                          flex: 1,
                          flexDirection: "row",
                          flexWrap: "wrap",
                        }}
                      >
                        <View style={{ marginRight: 8 }}>
                          {storeDetails.map((items, i) => (
                            <li>
                              <View style={[ProfileStyles.storeMainCard]}>
                                <View
                                  style={{
                                    flex: 1,
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <View style={[ProfileStyles.storeMainPic]}>
                                    <Text>Pro</Text>
                                  </View>
                                  <View
                                    style={[
                                      ProfileStyles.storeDetails,
                                      {
                                        width: 234,
                                        marginLeft: 6,
                                        marginRight: 6,
                                      },
                                    ]}
                                  >
                                    <Text style={[ProfileStyles.storeNames]}>
                                      {items.name}
                                    </Text>
                                    <Text style={[ProfileStyles.storeNames]}>
                                      {items.location}
                                    </Text>
                                  </View>
                                  <TouchableOpacity
                                    onPress={() => setStoreEdit(true)}
                                    style={[
                                      ProfileStyles.storeDetails,
                                      { width: 60 },
                                    ]}
                                  >
                                    <View>
                                      <Text style={[ProfileStyles.storeNames]}>
                                        Edit
                                      </Text>
                                    </View>
                                  </TouchableOpacity>
                                </View>
                              </View>
                            </li>
                          ))}
                        </View>
                      </View>
                    </View>
                  )}
                </View>

                <View
                  style={[
                    ProfileStyles.content,
                    toggleState === 4
                      ? ProfileStyles.activeContent
                      : ProfileStyles.InActiveContent,
                  ]}
                ></View>

                <View
                  style={[
                    ProfileStyles.content,
                    toggleState === 5
                      ? ProfileStyles.activeContent
                      : ProfileStyles.InActiveContent,
                  ]}
                >
                 {storePayment ? (
                    <EditPayment />
                  ) : (
                  <View style={[ProfileStyles.storeCard]}>
                    <Text
                      style={{
                        textAlign: "center",
                        fontWeight: "bold",
                        marginBottom: 10,
                        marginTop: 6,
                      }}
                    >
                      Payment
                    </Text>
                    <TouchableOpacity 
                     onPress={() => setstorePayment(true)}
                    style={[ProfileStyles.paymentBtn]}>
                      <Text style={{ textAlign: "center", fontWeight: "bold" }}>
                        Payment Details
                      </Text>
                    </TouchableOpacity>
                    <View
                      style={{
                        marginTop: 20,
                        flex: 1,
                        flexDirection: "row",
                        flexWrap: "wrap",
                      }}
                    >
                      <View style={{ marginRight: 8 }}>
                        <Text
                          style={{
                            textAlign: "center",
                            fontWeight: "bold",
                            marginBottom: 10,
                            marginTop: 6,
                          }}
                        >
                          Pending Payments
                        </Text>
                        {orderDetails.map((items, i) => (
                          <li>
                            <View style={[ProfileStyles.paymentMainCard]}>
                              <View
                                style={{
                                  flex: 1,
                                  flexDirection: "row",
                                  justifyContent: "space-between",
                                }}
                              >
                                <View
                                  style={[
                                    ProfileStyles.storeMainPic,
                                    {
                                      borderRadius: 0,
                                      backgroundColor: "none",
                                    },
                                  ]}
                                >
                                  <Text style={[ProfileStyles.storeNames]}>
                                    {items.price}
                                  </Text>
                                </View>
                                <View
                                  style={[
                                    ProfileStyles.paymentDetails,
                                    {
                                      width: 234,
                                      marginLeft: 6,
                                      marginRight: 6,
                                    },
                                  ]}
                                >
                                  <Text style={[ProfileStyles.storeNames]}>
                                    {items.name}
                                  </Text>
                                  <Text style={[ProfileStyles.storeNames]}>
                                    Ordered from :{items.location}
                                  </Text>
                                  <Text style={[ProfileStyles.storeNames]}>
                                    {items.price}
                                  </Text>
                                </View>
                              </View>
                            </View>
                          </li>
                        ))}
                      </View>
                      <View style={{ marginRight: 8 }}>
                        <Text
                          style={{
                            textAlign: "center",
                            fontWeight: "bold",
                            marginBottom: 10,
                            marginTop: 6,
                          }}
                        >
                          Received Payments
                        </Text>
                        {orderDetails.map((items, i) => (
                          <li>
                            <View style={[ProfileStyles.paymentMainCard]}>
                              <View
                                style={{
                                  flex: 1,
                                  flexDirection: "row",
                                  justifyContent: "space-between",
                                }}
                              >
                                <View
                                  style={[
                                    ProfileStyles.storeMainPic,
                                    {
                                      borderRadius: 0,
                                      backgroundColor: "none",
                                    },
                                  ]}
                                >
                                  <Text style={[ProfileStyles.storeNames]}>
                                    {items.price}
                                  </Text>
                                </View>
                                <View
                                  style={[
                                    ProfileStyles.paymentDetails,
                                    {
                                      width: 234,
                                      marginLeft: 6,
                                      marginRight: 6,
                                    },
                                  ]}
                                >
                                  <Text style={[ProfileStyles.storeNames]}>
                                    {items.name}
                                  </Text>
                                  <Text style={[ProfileStyles.storeNames]}>
                                    Ordered from :{items.location}
                                  </Text>
                                  <Text style={[ProfileStyles.storeNames]}>
                                    {items.price}
                                  </Text>
                                </View>
                              </View>
                            </View>
                          </li>
                        ))}
                      </View>
                    </View>
                  </View>
                  )}
                </View>

                <View
                  style={[
                    ProfileStyles.content,
                    toggleState === 6
                      ? ProfileStyles.activeContent
                      : ProfileStyles.InActiveContent,
                  ]}
                >
                  {orderEdit ? (
                    <EditOrder />
                  ) : (
                    <View style={[ProfileStyles.storeCard]}>
                      <Text
                        style={{
                          textAlign: "center",
                          fontWeight: "bold",
                          marginBottom: 10,
                          marginTop: 6,
                        }}
                      >
                        Order Details
                      </Text>
                      <View
                        style={{
                          marginTop: 20,
                          flex: 1,
                          flexDirection: "row",
                          flexWrap: "wrap",
                        }}
                      >
                        <View style={{ marginRight: 8 }}>
                          <Text
                            style={{
                              textAlign: "center",
                              fontWeight: "bold",
                              marginBottom: 10,
                              marginTop: 6,
                            }}
                          >
                            New Order
                          </Text>
                          {orderDetails.map((items, i) => (
                            <li>
                              <View style={[ProfileStyles.storeMainCard]}>
                                <View
                                  style={{
                                    flex: 1,
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <View
                                    style={[
                                      ProfileStyles.storeMainPic,
                                      { borderRadius: 0 },
                                    ]}
                                  >
                                    <Text>Pro</Text>
                                  </View>
                                  <View
                                    style={[
                                      ProfileStyles.storeDetails,
                                      {
                                        width: 234,
                                        marginLeft: 6,
                                        marginRight: 6,
                                      },
                                    ]}
                                  >
                                    <Text style={[ProfileStyles.storeNames]}>
                                      {items.name}
                                    </Text>
                                    <Text style={[ProfileStyles.storeNames]}>
                                      Ordered from :{items.location}
                                    </Text>
                                    <Text style={[ProfileStyles.storeNames]}>
                                      {items.price}
                                    </Text>
                                  </View>
                                  <View>
                                    <TouchableOpacity
                                      style={[
                                        ProfileStyles.ordDetails,
                                        // {width:60}
                                      ]}
                                    >
                                      <View>
                                        <Text
                                          style={[ProfileStyles.storeNames]}
                                        >
                                          View
                                        </Text>
                                      </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                      style={[
                                        ProfileStyles.ordDetails,
                                        // {width:60}
                                      ]}
                                      onPress={() => setorderEdit(true)}
                                    >
                                      <View>
                                        <Text
                                          style={[ProfileStyles.storeNames]}
                                        >
                                          Update Status
                                        </Text>
                                      </View>
                                    </TouchableOpacity>
                                  </View>
                                </View>
                              </View>
                            </li>
                          ))}
                        </View>
                        <View style={{ marginRight: 8 }}>
                          <Text
                            style={{
                              textAlign: "center",
                              fontWeight: "bold",
                              marginBottom: 10,
                              marginTop: 6,
                            }}
                          >
                            Completed Order
                          </Text>
                          {orderDetails.map((items, i) => (
                            <li>
                              <View style={[ProfileStyles.storeMainCard]}>
                                <View
                                  style={{
                                    flex: 1,
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <View
                                    style={[
                                      ProfileStyles.storeMainPic,
                                      { borderRadius: 0 },
                                    ]}
                                  >
                                    <Text>Pro</Text>
                                  </View>
                                  <View
                                    style={[
                                      ProfileStyles.storeDetails,
                                      {
                                        width: 234,
                                        marginLeft: 6,
                                        marginRight: 6,
                                      },
                                    ]}
                                  >
                                    <Text style={[ProfileStyles.storeNames]}>
                                      {items.name}
                                    </Text>
                                    <Text style={[ProfileStyles.storeNames]}>
                                      Ordered from :{items.location}
                                    </Text>
                                    <Text style={[ProfileStyles.storeNames]}>
                                      {items.price}
                                    </Text>
                                  </View>
                                  <View>
                                    <TouchableOpacity
                                      style={[
                                        ProfileStyles.ordDetails,
                                        // {width:60}
                                      ]}
                                    >
                                      <View>
                                        <Text
                                          style={[ProfileStyles.storeNames]}
                                        >
                                          View
                                        </Text>
                                      </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                      style={[
                                        ProfileStyles.ordDetails,
                                        // ,{width:60}
                                      ]}
                                    >
                                      <View>
                                        <Text
                                          style={[ProfileStyles.storeNames]}
                                        >
                                          Update Status
                                        </Text>
                                      </View>
                                    </TouchableOpacity>
                                  </View>
                                </View>
                              </View>
                            </li>
                          ))}
                        </View>
                      </View>
                    </View>
                  )}
                </View>
                <View
                  style={[
                    ProfileStyles.content,
                    toggleState === 7
                      ? ProfileStyles.activeContent
                      : ProfileStyles.InActiveContent,
                    ,
                    { backgroundColor: "gainsboro" },
                  ]}
                >
                  <SafeAreaView style={styles.safeContainer}>
                    <AddNewStore />
                  </SafeAreaView>
                </View>

                <View
                  style={[
                    ProfileStyles.content,
                    toggleState === 8
                      ? ProfileStyles.activeContent
                      : ProfileStyles.InActiveContent,
                  ]}
                ></View>
                <View
                  style={[
                    ProfileStyles.content,
                    toggleState === 9
                      ? ProfileStyles.activeContent
                      : ProfileStyles.InActiveContent,
                  ]}
                ></View>
                <View
                  style={[
                    ProfileStyles.content,
                    toggleState === 10
                      ? ProfileStyles.activeContent
                      : ProfileStyles.InActiveContent,
                  ]}
                ></View>
              </View>
            </View>
          </View>
        ) : (
          <View>
            <View
              style={{
                backgroundColor: "lightblue",
                height: 70,
                padding: 18,
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <TouchableOpacity
                style={{
                  padding: 13,
                  backgroundColor: "darkblue",
                  borderRadius: 9,
                }}
              >
                <View>
                  <Text style={{ color: "white", fontWeight: "bold" }}>
                    Start trail
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "column",
                paddingTop: 16,

                height: 66,
                backgroundColor: "#F4DAFF",
              }}
            >
              <View style={[ProfileStyles.container]}>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <TouchableOpacity
                    style={[
                      ProfileStyles.tabs,
                      toggleState === 1
                        ? ProfileStyles.touched
                        : ProfileStyles.nonTouched,
                    ]}
                    onPress={() => toggleTab(1)}
                  >
                    <View>
                      <Text
                        style={[
                          { fontWeight: "bold", zIndex: 2, color: "black" },
                        ]}
                      >
                        <Text>Store Selection</Text>
                      </Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[
                      ProfileStyles.tabs,
                      toggleState === 2
                        ? ProfileStyles.touched
                        : ProfileStyles.nonTouched,
                    ]}
                    onPress={() => toggleTab(2)}
                  >
                    <View>
                      <Text
                        style={[
                          { fontWeight: "bold", zIndex: 2, color: "black" },
                        ]}
                      >
                        Dashboard
                      </Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[
                      ProfileStyles.tabs,
                      toggleState === 3
                        ? ProfileStyles.touched
                        : ProfileStyles.nonTouched,
                    ]}
                    onPress={() => toggleTab(3)}
                  >
                    <View>
                      <Text
                        style={[
                          { fontWeight: "bold", zIndex: 2, color: "black" },
                        ]}
                      >
                        Stores
                      </Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[
                      ProfileStyles.tabs,
                      toggleState === 4
                        ? ProfileStyles.touched
                        : ProfileStyles.nonTouched,
                    ]}
                    onPress={() => toggleTab(4)}
                  >
                    <View>
                      <Text
                        style={[
                          { fontWeight: "bold", zIndex: 2, color: "black" },
                        ]}
                      >
                        Location
                      </Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[
                      ProfileStyles.tabs,
                      toggleState === 5
                        ? ProfileStyles.touched
                        : ProfileStyles.nonTouched,
                    ]}
                    onPress={() => toggleTab(5)}
                  >
                    <View>
                      <Text
                        style={[
                          { fontWeight: "bold", zIndex: 2, color: "black" },
                        ]}
                      >
                        Payment
                      </Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[
                      ProfileStyles.tabs,
                      toggleState === 6
                        ? ProfileStyles.touched
                        : ProfileStyles.nonTouched,
                    ]}
                    onPress={() => toggleTab(6)}
                  >
                    <View>
                      <Text
                        style={[
                          { fontWeight: "bold", zIndex: 2, color: "black" },
                        ]}
                      >
                        Orders
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  }}
                >
                  <TouchableOpacity
                    style={[
                      ProfileStyles.tabs,
                      toggleState === 7
                        ? ProfileStyles.touched
                        : ProfileStyles.nonTouched,
                    ]}
                    onPress={() => toggleTab(7)}
                  >
                    <AntDesign name="plus" size={24} color="black" />
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[
                      ProfileStyles.tabs,
                      toggleState === 8
                        ? ProfileStyles.touched
                        : ProfileStyles.nonTouched,
                    ]}
                    onPress={() => toggleTab(8)}
                  >
                    <AntDesign name="search1" size={24} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      ProfileStyles.tabs,
                      toggleState === 9
                        ? ProfileStyles.touched
                        : ProfileStyles.nonTouched,
                    ]}
                    onPress={() => toggleTab(9)}
                  >
                    <Ionicons name="notifications" size={24} color="black" />
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[
                      ProfileStyles.tabs,
                      toggleState === 10
                        ? ProfileStyles.touched
                        : ProfileStyles.nonTouched,
                    ]}
                    onPress={() => toggleTab(10)}
                  >
                    <View>
                      <Text
                        style={[
                          { fontWeight: "bold", zIndex: 2, color: "black" },
                        ]}
                      >
                        Profile
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={ProfileStyles.contentTabs}>
                <View
                  style={[
                    ProfileStyles.contentt,
                    toggleState === 1
                      ? ProfileStyles.activeContent
                      : ProfileStyles.InActiveContent,
                  ]}
                ></View>

                <View
                  style={[
                    ProfileStyles.dashaligncontent,
                    toggleState === 2
                      ? ProfileStyles.activeContent
                      : ProfileStyles.InActiveContent,
                  ]}
                >
                  <ScrollView>
                    <Dashboard />
                  </ScrollView>
                </View>

                <View
                  style={[
                    ProfileStyles.content,
                    toggleState === 3
                      ? ProfileStyles.activeContent
                      : ProfileStyles.InActiveContent,
                  ]}
                >
                  {storeEdit ? (
                    <EditStore />
                  ) : (
                    <View style={[ProfileStyles.storeCard]}>
                      <Text
                        style={{
                          textAlign: "center",
                          fontWeight: "bold",
                          marginBottom: 10,
                          marginTop: 6,
                        }}
                      >
                        Store Details
                      </Text>
                      <View
                        style={{
                          marginTop: 20,
                          flex: 1,
                          flexDirection: "row",
                          flexWrap: "wrap",
                        }}
                      >
                        <View style={{ marginRight: 8 }}>
                          {storeDetails.map((items, i) => (
                            <li>
                              <View style={[ProfileStyles.storeMainCard]}>
                                <View
                                  style={{
                                    flex: 1,
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <View style={[ProfileStyles.storeMainPic]}>
                                    <Text>Pro</Text>
                                  </View>
                                  <View
                                    style={[
                                      ProfileStyles.storeDetails,
                                      {
                                        width: 234,
                                        marginLeft: 6,
                                        marginRight: 6,
                                      },
                                    ]}
                                  >
                                    <Text style={[ProfileStyles.storeNames]}>
                                      {items.name}
                                    </Text>
                                    <Text style={[ProfileStyles.storeNames]}>
                                      {items.location}
                                    </Text>
                                  </View>
                                  <TouchableOpacity
                                    onPress={() => setStoreEdit(true)}
                                    style={[
                                      ProfileStyles.storeDetails,
                                      { width: 60 },
                                    ]}
                                  >
                                    <View>
                                      <Text style={[ProfileStyles.storeNames]}>
                                        Edit
                                      </Text>
                                    </View>
                                  </TouchableOpacity>
                                </View>
                              </View>
                            </li>
                          ))}
                        </View>
                      </View>
                    </View>
                  )}
                </View>

                <View
                  style={[
                    ProfileStyles.content,
                    toggleState === 4
                      ? ProfileStyles.activeContent
                      : ProfileStyles.InActiveContent,
                  ]}
                ></View>

                <View
                  style={[
                    ProfileStyles.content,
                    toggleState === 5
                      ? ProfileStyles.activeContent
                      : ProfileStyles.InActiveContent,
                  ]}
                >
                    {storePayment ? (
                    <EditPayment />
                  ) : (
                  <View style={[ProfileStyles.storeCard]}>
                    <Text
                      style={{
                        textAlign: "center",
                        fontWeight: "bold",
                        marginBottom: 10,
                        marginTop: 6,
                      }}
                    >
                      Payment
                    </Text>
                    <TouchableOpacity 
                     onPress={() => setstorePayment(true)}
                    style={[ProfileStyles.paymentBtn]}>
                      <Text style={{ textAlign: "center", fontWeight: "bold" }}>
                        Payment Details
                      </Text>
                    </TouchableOpacity>
                    <View
                      style={{
                        marginTop: 20,
                        flex: 1,
                        flexDirection: "row",
                        flexWrap: "wrap",
                      }}
                    >
                      <View style={{ marginRight: 8 }}>
                        <Text
                          style={{
                            textAlign: "center",
                            fontWeight: "bold",
                            marginBottom: 10,
                            marginTop: 6,
                          }}
                        >
                          Pending Payments
                        </Text>
                        {orderDetails.map((items, i) => (
                          <li>
                            <View style={[ProfileStyles.paymentMainCard]}>
                              <View
                                style={{
                                  flex: 1,
                                  flexDirection: "row",
                                  justifyContent: "space-between",
                                }}
                              >
                                <View
                                  style={[
                                    ProfileStyles.storeMainPic,
                                    {
                                      borderRadius: 0,
                                      backgroundColor: "none",
                                    },
                                  ]}
                                >
                                  <Text style={[ProfileStyles.storeNames]}>
                                    {items.price}
                                  </Text>
                                </View>
                                <View
                                  style={[
                                    ProfileStyles.paymentDetails,
                                    {
                                      width: 234,
                                      marginLeft: 6,
                                      marginRight: 6,
                                    },
                                  ]}
                                >
                                  <Text style={[ProfileStyles.storeNames]}>
                                    {items.name}
                                  </Text>
                                  <Text style={[ProfileStyles.storeNames]}>
                                    Ordered from :{items.location}
                                  </Text>
                                  <Text style={[ProfileStyles.storeNames]}>
                                    {items.price}
                                  </Text>
                                </View>
                              </View>
                            </View>
                          </li>
                        ))}
                      </View>
                      <View style={{ marginRight: 8 }}>
                        <Text
                          style={{
                            textAlign: "center",
                            fontWeight: "bold",
                            marginBottom: 10,
                            marginTop: 6,
                          }}
                        >
                          Received Payments
                        </Text>
                        {orderDetails.map((items, i) => (
                          <li>
                            <View style={[ProfileStyles.paymentMainCard]}>
                              <View
                                style={{
                                  flex: 1,
                                  flexDirection: "row",
                                  justifyContent: "space-between",
                                }}
                              >
                                <View
                                  style={[
                                    ProfileStyles.storeMainPic,
                                    {
                                      borderRadius: 0,
                                      backgroundColor: "none",
                                    },
                                  ]}
                                >
                                  <Text style={[ProfileStyles.storeNames]}>
                                    {items.price}
                                  </Text>
                                </View>
                                <View
                                  style={[
                                    ProfileStyles.paymentDetails,
                                    {
                                      width: 234,
                                      marginLeft: 6,
                                      marginRight: 6,
                                    },
                                  ]}
                                >
                                  <Text style={[ProfileStyles.storeNames]}>
                                    {items.name}
                                  </Text>
                                  <Text style={[ProfileStyles.storeNames]}>
                                    Ordered from :{items.location}
                                  </Text>
                                  <Text style={[ProfileStyles.storeNames]}>
                                    {items.price}
                                  </Text>
                                </View>
                              </View>
                            </View>
                          </li>
                        ))}
                      </View>
                    </View>
                  </View>
                  )}
                </View>

                <View
                  style={[
                    ProfileStyles.content,
                    toggleState === 6
                      ? ProfileStyles.activeContent
                      : ProfileStyles.InActiveContent,
                  ]}
                >
                  {orderEdit ? (
                    <EditOrder />
                  ) : (
                    <View style={[ProfileStyles.storeCard]}>
                      <Text
                        style={{
                          textAlign: "center",
                          fontWeight: "bold",
                          marginBottom: 10,
                          marginTop: 6,
                        }}
                      >
                        Order Details
                      </Text>
                      <View
                        style={{
                          marginTop: 20,
                          flex: 1,
                          flexDirection: "row",
                          flexWrap: "wrap",
                        }}
                      >
                        <View style={{ marginRight: 8 }}>
                          <Text
                            style={{
                              textAlign: "center",
                              fontWeight: "bold",
                              marginBottom: 10,
                              marginTop: 6,
                            }}
                          >
                            New Order
                          </Text>
                          {orderDetails.map((items, i) => (
                            <li>
                              <View style={[ProfileStyles.storeMainCard]}>
                                <View
                                  style={{
                                    flex: 1,
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <View
                                    style={[
                                      ProfileStyles.storeMainPic,
                                      { borderRadius: 0 },
                                    ]}
                                  >
                                    <Text>Pro</Text>
                                  </View>
                                  <View
                                    style={[
                                      ProfileStyles.storeDetails,
                                      {
                                        width: 234,
                                        marginLeft: 6,
                                        marginRight: 6,
                                      },
                                    ]}
                                  >
                                    <Text style={[ProfileStyles.storeNames]}>
                                      {items.name}
                                    </Text>
                                    <Text style={[ProfileStyles.storeNames]}>
                                      Ordered from :{items.location}
                                    </Text>
                                    <Text style={[ProfileStyles.storeNames]}>
                                      {items.price}
                                    </Text>
                                  </View>
                                  <View>
                                    <TouchableOpacity
                                      style={[
                                        ProfileStyles.ordDetails,
                                        // {width:60}
                                      ]}
                                    >
                                      <View>
                                        <Text
                                          style={[ProfileStyles.storeNames]}
                                        >
                                          View
                                        </Text>
                                      </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                      style={[
                                        ProfileStyles.ordDetails,
                                        // {width:60}
                                      ]}
                                      onPress={() => setorderEdit(true)}
                                    >
                                      <View>
                                        <Text
                                          style={[ProfileStyles.storeNames]}
                                        >
                                          Update Status
                                        </Text>
                                      </View>
                                    </TouchableOpacity>
                                  </View>
                                </View>
                              </View>
                            </li>
                          ))}
                        </View>
                        <View style={{ marginRight: 8 }}>
                          <Text
                            style={{
                              textAlign: "center",
                              fontWeight: "bold",
                              marginBottom: 10,
                              marginTop: 6,
                            }}
                          >
                            Completed Order
                          </Text>
                          {orderDetails.map((items, i) => (
                            <li>
                              <View style={[ProfileStyles.storeMainCard]}>
                                <View
                                  style={{
                                    flex: 1,
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <View
                                    style={[
                                      ProfileStyles.storeMainPic,
                                      { borderRadius: 0 },
                                    ]}
                                  >
                                    <Text>Pro</Text>
                                  </View>
                                  <View
                                    style={[
                                      ProfileStyles.storeDetails,
                                      {
                                        width: 234,
                                        marginLeft: 6,
                                        marginRight: 6,
                                      },
                                    ]}
                                  >
                                    <Text style={[ProfileStyles.storeNames]}>
                                      {items.name}
                                    </Text>
                                    <Text style={[ProfileStyles.storeNames]}>
                                      Ordered from :{items.location}
                                    </Text>
                                    <Text style={[ProfileStyles.storeNames]}>
                                      {items.price}
                                    </Text>
                                  </View>
                                  <View>
                                    <TouchableOpacity
                                      style={[
                                        ProfileStyles.ordDetails,
                                        // {width:60}
                                      ]}
                                    >
                                      <View>
                                        <Text
                                          style={[ProfileStyles.storeNames]}
                                        >
                                          View
                                        </Text>
                                      </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                      style={[
                                        ProfileStyles.ordDetails,
                                        // ,{width:60}
                                      ]}
                                    >
                                      <View>
                                        <Text
                                          style={[ProfileStyles.storeNames]}
                                        >
                                          Update Status
                                        </Text>
                                      </View>
                                    </TouchableOpacity>
                                  </View>
                                </View>
                              </View>
                            </li>
                          ))}
                        </View>
                      </View>
                    </View>
                  )}
                </View>
                <View
                  style={[
                    ProfileStyles.content,
                    toggleState === 7
                      ? ProfileStyles.activeContent
                      : ProfileStyles.InActiveContent,
                  ]}
                >
                  <SafeAreaView style={styles.safeContainer}>
                    <AddNewStore />
                  </SafeAreaView>
                </View>
                <View
                  style={[
                    ProfileStyles.content,
                    toggleState === 8
                      ? ProfileStyles.activeContent
                      : ProfileStyles.InActiveContent,
                  ]}
                ></View>
                <View
                  style={[
                    ProfileStyles.content,
                    toggleState === 9
                      ? ProfileStyles.activeContent
                      : ProfileStyles.InActiveContent,
                  ]}
                ></View>
                <View
                  style={[
                    ProfileStyles.content,
                    toggleState === 10
                      ? ProfileStyles.activeContent
                      : ProfileStyles.InActiveContent,
                  ]}
                >
                  <ScrollView>
                    <View>
                      <Text
                        style={{
                          color: "blue",
                          marginTop: 10,
                          paddingTop: 10,
                          fontSize: 20,
                          textAlign: "center",
                        }}
                      >
                        dd
                      </Text>
                    </View>
                  </ScrollView>
                </View>
              </View>
            </View>
          </View>
        )}
      </SafeAreaView>
    </>
  );
}
export default DashboardHeader;
const styles = StyleSheet.create({
  safeContainer: {
    // boxShadow: "rgb(48 38 43 / 61%) 0 1 13",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 21,
    width: 511,
    // height:1411,
    marginTop: 10,
    // flex: 1,
    // paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: "white",
    margin: 10,
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
