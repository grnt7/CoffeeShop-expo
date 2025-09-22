// import { Tabs } from 'expo-router';
// import React from 'react';

// import { HapticTab } from '@/components/haptic-tab';
// import { IconSymbol } from '@/components/ui/icon-symbol';

// import Ionicons from '@expo/vector-icons/Ionicons';
// //import {TabBarIcon } from "@/components/navigation/TabBarIcon",
// import { Colors } from '@/constants/theme';
// import { useColorScheme } from '@/hooks/use-color-scheme';

// export default function TabLayout() {
//   const colorScheme = useColorScheme();

//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
//         tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].tint,
//         headerShown: false,
//         headerTitleAlign:"center",
//         tabBarButton: HapticTab,
//       }}>
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: 'Home',
//           tabBarIcon: ({ color,focused}) => 
//           <Ionicons name={focused ? "home" : "home-outline"  }color={color} size={28}/>,
//         }}
//       />
//       <Tabs.Screen
//         name="contact"
//         options={{
//           title: 'contact',
//           tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? "mail" : "mail-outline" }color={color}  size={28}/>,
//         }}
//       />
//     </Tabs>
//   );
// }
