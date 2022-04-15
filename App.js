import React  from 'react';
import { AuthProvider } from './context/AuthContext'
import { AxiosProvider } from './context/AxiosContext'
import  Navigations from './Navigations'
import { useFonts } from 'expo-font'

export default function App() {
  const [loadFont] = useFonts({
    kanit_medium: require('./assets/fonts/Kanit-Medium.ttf'),
    kanit_light: require('./assets/fonts/Kanit-Light.ttf')
});

if (!loadFont) {
    return null;
}
  return (
    <AuthProvider >
      <AxiosProvider>
        <Navigations />
      </AxiosProvider>
    </AuthProvider>
  );
}

