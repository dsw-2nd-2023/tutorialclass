import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import HomeStack from './stack';
import { createContext, useState } from 'react';

export const MyContext = createContext();

export default function App() {
  const [value, setValue] = useState(0);
  const dark_theme = "#eee";


  return (
    <MyContext.Provider value={{value, setValue, dark_theme}} >
    <NavigationContainer >
      <HomeStack />
    </NavigationContainer>
    </MyContext.Provider>
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
