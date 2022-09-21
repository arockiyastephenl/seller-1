import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import Login from './src/components/Login';
import Registration from './src/components/Registration';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
<NavigationContainer>
<Header/>
<Stack.Navigator
  screenOptions={{ 
    headerShown:false
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
