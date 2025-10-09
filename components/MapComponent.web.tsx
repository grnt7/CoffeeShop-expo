// MapComponent.web.tsx
import React from 'react';
import { View, Text } from 'react-native';

interface MapComponentProps {
    // Add prop definitions here if needed in the future
}

export default function MapComponent(props: MapComponentProps): React.ReactElement {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#eee' }}>
            <Text>Map feature not available on web (only iOS/Android)</Text>
        </View>
    );
}