import { SplashScreen, Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CustomHeader from '../Components/CustomHeader';
import AuthHeader from '../Components/AuthHeader';
import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { StatusBar } from "react-native";

export const unstable_settings = {
  initialRouteName: 'index',
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'GTWalsheimProRegular': require('../assets/fonts/GTWalsheimPro-Regular.ttf'),
    'GTWalsheimProMedium': require('../assets/fonts/GTWalsheimPro-Medium.ttf'),
    'GTWalsheimProLight': require('../assets/fonts/GTWalsheimPro-Light.ttf'),
    'NantesBoldItalic': require('../assets/fonts/Nantes-BoldItalic.ttf'),
    'NantesRegular': require('../assets/fonts/Nantes-Regular.ttf'),
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <Stack>
        <Stack.Screen 
          name="index" 
          options={{
            header: () => <CustomHeader />,
          }} />

        <Stack.Screen 
          name="login" 
          options={{
            header: () => <AuthHeader button="Back" />,
          }} />

        <Stack.Screen 
          name="signup" 
          options={{
            header: () => <AuthHeader button="Back" />,
          }} />

        <Stack.Screen
          name="forgotpassword" 
          options={{
            header: () => <AuthHeader button="Back" />,
          }} />

        <Stack.Screen
          name="creategroup" 
          options={{
            headerShown: false,
          }} />

        <Stack.Screen 
          name="group/[uniqueURL]" 
          options={{
            header: () => <CustomHeader />,
          }} />
      </Stack>
    </SafeAreaProvider>
  );
}
