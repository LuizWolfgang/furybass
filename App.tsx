import React from 'react';
import { ThemeProvider } from 'styled-components';

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium
} from '@expo-google-fonts/inter';
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold
} from '@expo-google-fonts/archivo';

// import { Routes } from './src/routes';

import theme from './src/styles/theme';

import { SignUp } from './src/screens/SignUp';
import { SignIn } from './src/screens/SignIn';
import { ActivityIndicator } from 'react-native';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold
  });

  if(!fontsLoaded){
    return <ActivityIndicator />
  }

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  )
}