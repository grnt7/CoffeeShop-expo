import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
// import 'react-native-reanimated';
import { Appearance } from 'react-native';
//import { useColorScheme } from '@/hooks/use-color-scheme';
import { Colors } from '@/constants/theme';
import { GestureHandlerRootView, NativeViewGestureHandler } from 'react-native-gesture-handler';
export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = Appearance.getColorScheme();

  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

  return (
    <GestureHandlerRootView>
    
      <Stack screenOptions={{headerStyle: {backgroundColor: 
      theme.headerBackground}, headerTintColor: theme.text, 
      headerShadowVisible: false}}>
        <Stack.Screen name="index" options={{ headerShown: false, title: "Home" }} />
     
        <Stack.Screen name="Contact" options={{ headerShown: true, title: "Contact", headerTitle: "Contact Us" }} />
        <Stack.Screen name="Menu" options={{ headerShown: true, title: "Menu", headerTitle: "Coffee Shop Menu" }} />
     
        <Stack.Screen name="+not-found" options={{title: "not found",
           headerShown: false
        }}/>
      
      </Stack>
      
      </GestureHandlerRootView>
      // <StatusBar style="auto" />
   
  );
}
