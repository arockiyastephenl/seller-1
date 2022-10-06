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
import DashboardHeader from "./DashboardHeader";
import DashboardMain from "./DashboardMain";


function DashboardPage() {
  const navigation = useNavigation();
  return (
    <>
    <DashboardHeader/>
    {/* <DashboardMain/> */}
    </>
  );
}
export default DashboardPage;
