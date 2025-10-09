// components/MapWrapper.web.tsx (For Web ONLY)
import React from 'react';
import { View, Text } from 'react-native';

// Simple placeholder component for the web build
export default function MapWrapper() {
  return (
    <View style={{ 
      width: '100%', 
      height: 200, 
      borderRadius: 20, 
      backgroundColor: '#f0f0f0', // Light gray background
      justifyContent: 'center', 
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#ccc',
    }}>
      <Text style={{ color: '#666', fontWeight: 'bold' }}>Map Disabled on Web Build</Text>
    </View>
  );
}