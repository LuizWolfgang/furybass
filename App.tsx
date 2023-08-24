import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold
} from '@expo-google-fonts/inter';
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold
} from '@expo-google-fonts/archivo';

// import { Routes } from './src/routes';

import theme from './src/styles/theme';

import { ActivityIndicator, StatusBar } from 'react-native';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold
  });

  if(!fontsLoaded){
    return <ActivityIndicator />
  }

  return (

    <ThemeProvider theme={theme}>
      <BottomSheetModalProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor="black"
          translucent
        />
        <Routes />
      </BottomSheetModalProvider>

    </ThemeProvider>
  )
}
