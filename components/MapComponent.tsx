// MapComponent.tsx (or rename your current file to this)
import MapView, { Marker } from 'react-native-maps';

interface MapComponentProps {
    initialRegion: {
        latitude: number;
        longitude: number;
        latitudeDelta: number;
        longitudeDelta: number;
    };
    markerCoordinate: {
        latitude: number;
        longitude: number;
    };
}

export default function MapComponent(props: MapComponentProps) {
    return (
        <MapView style={{ flex: 1 }} initialRegion={props.initialRegion}>
            <Marker coordinate={props.markerCoordinate} />
        </MapView>
    );
}