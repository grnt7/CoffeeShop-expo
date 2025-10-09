// components/MapWrapper.tsx (For iOS and Android)
import React from 'react';
import { View, Text } from 'react-native';
// 🚨 This is the only file that imports react-native-maps now!
import MapView, { Marker } from "react-native-maps"; 

const COFFEE_SHOP_LOCATION = {
  latitude: 39.10904,
  longitude: -94.584457,
  latitudeDelta: 0.005,
  longitudeDelta: 0.005,
};

export default function MapWrapper() {
  return (
    <MapView
      style={{ width: '100%', height: 200, borderRadius: 20 }}
      initialRegion={COFFEE_SHOP_LOCATION}
    >
      <Marker
        coordinate={{
          latitude: COFFEE_SHOP_LOCATION.latitude,
          longitude: COFFEE_SHOP_LOCATION.longitude,
        }}
        title="Coffee Shop"
        description="555 Coffee Lane"
        pinColor="red"
      />
    </MapView>
  );
}