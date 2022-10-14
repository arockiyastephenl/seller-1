import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import Header from './src/components/Header';
import Login from './src/components/Login';
import Registration from './src/components/Registration';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { ProfileStyles } from "./src/components/css/profile";
import Layout from './src/Layout';
// import Country from "country-state-city";
import ForgetPassword from './src/components/ForgetPassword';
import TermsPage from './src/components/TermsPage';
import Svg, { Path } from "react-native-svg";
import CareCommerce from './src/components/utils/CareCommerce';
import DashboardPage from './src/components/DashboardPages/DashboardPage';
import Dashboard from './src/components/Screens/Dashboard';
// import DashboardMain from './src/components/DashboardPages/DashboardMain';
// import DashboardHeader from './src/components/DashboardPages/DashboardHeader';
const Stack = createNativeStackNavigator();
// const Dashboard= createNativeStackNavigator();

export default function App() {
  // console.log("state",Country)
  return (
    <>
   
<NavigationContainer>
{/* <Header/> */}
<Stack.Navigator   
  screenOptions={{ 
    headerShown:true,
   
    headerStyle: {
      backgroundColor: '#F4DAFF' ,
      
      
      
   },
  headerTitle:()=> false,
  
   headerLeft: () => 
   ( <>
   <View style={{display:"flex",flexDirection:"row"}}>
   {/* <Header/> */}
    {/* <CareCommerce/> */}
    </View> 
    </>
    ),
  headerRight: () => (
    <Layout/>
    
  
  ),
 
  
}}
  
  
>
  
<Stack.Screen name="Registration" component={Registration}/>
<Stack.Screen name="Login"  component={Login}/>
<Stack.Screen name="ForgetPassword"  component={ForgetPassword}/>



<Stack.Screen options={{ headerShown: false }} name='DashboardPage' component={DashboardPage}/>
{/* <Stack.Screen options={{ headerShown: false }} name='Dashboards' component={Dashboard}/> */}
<Stack.Screen name="TermsPage"  component={TermsPage}/>
   

</Stack.Navigator>

</NavigationContainer>



</>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  
  },
});
