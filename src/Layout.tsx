import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProfileStyles } from "./components/css/profile";
import { RouteStackParamList } from "../src/RouteStackParams";
import { StackNavigationProp } from "@react-navigation/stack";

import { useNavigation } from "@react-navigation/native";

type layout = StackNavigationProp<RouteStackParamList, "Login">;

function Layout() {
  const navigation = useNavigation<layout>();
  return (
    <>
      <View style={{ paddingRight: 12, flexDirection: "row" }}>
        <TouchableOpacity style={ProfileStyles.loginButton}>
          <Text style={{ fontSize: 13, fontWeight: "bold", color: "#ffffff" }}>
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={ProfileStyles.loginButton}
        >
          <Text style={{ fontSize: 13, fontWeight: "bold", color: "#ffffff" }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
export default Layout;
