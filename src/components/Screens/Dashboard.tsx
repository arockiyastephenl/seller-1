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

import { ProfileStyles } from "../css/profile";
import { RouteStackParamList } from "../../RouteStackParams";
import { StackNavigationProp } from "@react-navigation/stack";
const { width, height } = Dimensions.get("window");
import { useNavigation } from "@react-navigation/native";
import Svg, { Path } from "react-native-svg";
import CareCommerce from "../utils/CareCommerce";
// import { useMediaQuery } from "react-responsive";
import "@expo/match-media";
import { useMediaQuery } from "react-responsive";

type dashboard = StackNavigationProp<RouteStackParamList, "Login">;
export default function Dashboard() {
  const navigation = useNavigation<dashboard>();
  //     const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  const isTabletOrMobileDevice = useMediaQuery({
    maxDeviceWidth: 1244,
    // alternatively...
    query: "(max-device-width: 744px)",
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

  const storeDetails = [
    {
      name: "Saravana Stores",
      id: 1,
    },
    {
      name: "Vasan Eye Care",
      id: 2,
    },
    {
      name: "Poorvika mobiles",
      id: 3,
    },
    {
      name: "TVS Motors",
      id: 4,
    },
  ];
  const orderDetails = [
    {
      name: "Headphone-242 Blue",
      id: 1,
    },
    {
      name: "LG’s webOS",
      id: 2,
    },
    {
      name: "Micromax IN Note 1",
      id: 3,
    },
    {
      name: "Havells Freddo 70-Litre Cooler",
      id: 4,
    },
  ];
  const paymentDetails = [
    {
      name: "Headphone-242 Blue",
      id: 1,
      price: 450,
    },
    {
      name: "LG’s webOS",
      id: 2,
      price: 34000,
    },
    {
      name: "Micromax IN Note 1",
      id: 3,
      price: 24000,
    },
    {
      name: "Havells Freddo 70-Litre Cooler",
      id: 4,
      price: 2500,
    },
  ];

  return (
    <>
      <ScrollView>
        <View
          style={{
            backgroundColor: "lightblue",
            height: 70,
            paddingLeft: 13,
            paddingRight: 13,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: isTabletOrMobileDevice
              ? "space-around"
              : "space-between",
            flex: 0.4,
          }}
        >
          <View>
            <Text style={{ color: "blue", fontWeight: "bold" }}>
              Demo Company
            </Text>
          </View>

          <TouchableOpacity
            style={{
              padding: 13,
              backgroundColor: "darkblue",
              borderRadius: 9,
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Edit dashboard
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={[ProfileStyles.tabContainer]}>
            <View style={{ marginTop: 50 }}>
              <View style={{ flex: 1, flexDirection: "row", marginBottom: 54 }}>
                <View>{/* <CareCommerce/> */}</View>
                <View style={{ marginLeft: 40 }}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 16,
                      marginBottom: 15,
                    }}
                  >
                    Get to know seller app
                  </Text>
                  <Text style={{ fontSize: 13, marginBottom: 15 }}>
                    Get to know seller app
                  </Text>
                  <TouchableOpacity>
                    <Text
                      style={{
                        backgroundColor: "skyblue",
                        paddingTop: 3,
                        paddingLeft: 5,
                        paddingRight: 5,
                        borderRadius: 3,
                        height: 32,
                        padding: 5,
                      }}
                    >
                      Learn more about the company
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "gainsboro",
            alignItems: "center",
            justifyContent: "center",
            padding: 15,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              flexWrap: "wrap",

              width: isTabletOrMobileDevice ? 500 : 725,
              justifyContent: "center",
            }}
          >
            <View
              style={[
                ProfileStyles.dashCards,
                { marginRight: isTabletOrMobileDevice ? 0 : 20 },
              ]}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{ marginBottom: 5, fontSize: 15, fontWeight: "bold" }}
                >
                  Store Details
                </Text>
                <Text
                  style={{ marginBottom: 5, fontSize: 15, fontWeight: "bold" }}
                >
                  Edit
                </Text>
              </View>

              <View style={{ marginTop: 20 }}>
                {storeDetails.map((items, i) => (
                  <li>
                    <View style={[ProfileStyles.storeDetails]}>
                      <Text style={[ProfileStyles.storeNames]}>
                        {items.name}
                      </Text>
                    </View>
                  </li>
                ))}
              </View>
            </View>

            <View
              style={[
                ProfileStyles.dashCards,
                { marginRight: isTabletOrMobileDevice ? 0 : 20 },
              ]}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{ marginBottom: 5, fontSize: 15, fontWeight: "bold" }}
                >
                  Order Watchlist
                </Text>
                <Text
                  style={{ marginBottom: 5, fontSize: 15, fontWeight: "bold" }}
                >
                  Edit
                </Text>
              </View>

              <View style={{ marginTop: 20 }}>
                {orderDetails.map((items, i) => (
                  <li>
                    <View style={[ProfileStyles.storeDetails]}>
                      <Text style={[ProfileStyles.storeNames]}>
                        {items.name}
                      </Text>
                    </View>
                  </li>
                ))}
              </View>
            </View>

            <View
              style={[
                ProfileStyles.dashCards,
                { marginRight: isTabletOrMobileDevice ? 0 : 20 },
              ]}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{ marginBottom: 5, fontSize: 15, fontWeight: "bold" }}
                >
                  Location
                </Text>
                <Text
                  style={{ marginBottom: 5, fontSize: 15, fontWeight: "bold" }}
                >
                  Edit
                </Text>
              </View>
            </View>

            <View
              style={[
                ProfileStyles.dashCards,
                { marginRight: isTabletOrMobileDevice ? 0 : 20 },
              ]}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{ marginBottom: 5, fontSize: 15, fontWeight: "bold" }}
                >
                  Payment Owed to you
                </Text>
                <Text
                  style={{ marginBottom: 5, fontSize: 15, fontWeight: "bold" }}
                >
                  Edit
                </Text>
              </View>

              <View style={{ marginTop: 20 }}>
                {paymentDetails.map((items, i) => (
                  <li>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={[ProfileStyles.storeDetails, { width: 234 }]}
                      >
                        <Text style={[ProfileStyles.storeNames]}>
                          {items.name}
                        </Text>
                      </View>
                      <View style={[ProfileStyles.storeDetails, { width: 60 }]}>
                        <Text style={[ProfileStyles.storeNames]}>
                          {items.price}
                        </Text>
                      </View>
                    </View>
                  </li>
                ))}
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
    backgroundColor: "white",

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
