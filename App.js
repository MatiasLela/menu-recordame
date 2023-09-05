import { View } from 'react-native';
import { useState, useEffect } from 'react';
import Menu from './components/Menu.js';
import * as Font from 'expo-font';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  useEffect(() => {
    if (!fontsLoaded){
      loadFonts();
    }
  });
  const loadFonts = async () => {
    await Font.loadAsync({
      'MontserratAlternates-Bold': require('./assets/fonts/MontserratAlternates-Bold.otf'),
      'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
      'Montserrat-Thin': require('./assets/fonts/Montserrat-Thin.ttf'),
    });
    setFontsLoaded(true);
  }
  
  return (
    <View>
      <Menu/>
    </View>
  );
}
