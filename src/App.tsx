import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import Staff from './components/Staff';
import Continents from './components/Continents';
import HeaderBar from './components/shared/HeaderBar';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="login" options={{ headerTitle: () => HeaderBar({ title: "Login"})}} component={Login}></Stack.Screen> */}
        <Stack.Screen name="home" options={{ headerTitle: () => HeaderBar({ title: "Home"})}}  component={Home}></Stack.Screen>
        <Stack.Screen name="logout" options={{ headerTitle: () => HeaderBar({ title: "Logout"})}} component={Logout}></Stack.Screen>
        <Stack.Screen name="staff" options={{ headerTitle: () => HeaderBar({ title: "Staff"})}}  component={Staff}></Stack.Screen>
        <Stack.Screen name="continents" options={{ headerTitle: () => HeaderBar({ title: "Continents"})}}  component={Continents}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
