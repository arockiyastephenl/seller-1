import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import Header from './src/components/Header';
import Login from './src/components/Login';
import Registration from './src/components/Registration';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { ProfileStyles } from "./src/components/css/profile";
import Layout from './src/Layout';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
<NavigationContainer>
{/* <Header/> */}
<Stack.Navigator  
  screenOptions={{ 
    headerShown:true,headerStyle: {
      backgroundColor: '#F4DAFF' ,
      
      
   },
    
  
  headerRight: () => (
    <Layout/>
    
  
  ),
 
  
}}
  
  
>
  
<Stack.Screen name="Registration" component={Registration}/>
<Stack.Screen name="Login"  component={Login}/>
   

</Stack.Navigator>
</NavigationContainer>

    
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  
  },
});
