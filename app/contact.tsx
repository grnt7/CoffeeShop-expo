
import { Fontisto } from '@expo/vector-icons';
import MapView, { Marker } from "react-native-maps";
//import Iframe from 'react-iframe';
import {
  StyleSheet, View, Text, Appearance,
  Image,
  ScrollView,
  Linking,
  Platform
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

import { Colors } from '@/constants/theme';
export default function ContactScreen() {
  const colorScheme = Appearance.getColorScheme();

  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

  const imgColor = colorScheme === 'dark' ? 'papayawhip' : '#333';

  const styles = createStyles(theme, colorScheme);
  // Define the location coordinates once
const COFFEE_SHOP_LOCATION = {
  latitude: 39.10904,
  longitude: -94.584457,
  latitudeDelta: 0.005, // Controls the zoom level (smaller number = more zoom)
  longitudeDelta: 0.005, // Controls the zoom level
};

// Define the full address for the coffee shop
const FULL_ADDRESS = "555 Coffee Lane, Kansas City, KS 55555-1234";

// Add this function inside your component, or outside it if you prefer
const openMapApp = async () => {
    // Encode the address to handle spaces and special characters
    const encodedAddress = encodeURIComponent(FULL_ADDRESS);
    
    // Choose the correct scheme based on the platform
    const scheme = Platform.select({
        // iOS: uses the 'maps:' scheme, which opens Apple Maps or Google Maps (if comgooglemaps is whitelisted in Info.plist)
        // Using http://maps.apple.com or http://google.com/maps is often more reliable
        ios: `http://maps.apple.com/?q=${encodedAddress}`, 
        // Android: uses the 'geo:' scheme for the system's map app (usually Google Maps)
        android: `geo:0,0?q=${encodedAddress}`,
    });

    if (scheme) {
        try {
            const supported = await Linking.canOpenURL(scheme);

            if (supported) {
                await Linking.openURL(scheme);
            } else {
                // Fallback for an unlikely scenario where no map app can handle the scheme
                console.error('No map application found to open the URL.');
            }
        } catch (error) {
            console.error('An error occurred while opening the map:', error);
        }
    }
};


  return (

    <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.imgContainer}>
        <Fontisto
          name="coffeescript"
          size={250}
          color={imgColor}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>Coffee Shop</Text>

        <View style={styles.textView}>
          <Text style={styles.text}>
            <Text>555 Coffee Lane</Text>{'\n'}
            <Text>Kansas City, KS  55555-1234</Text>
          </Text>
              {/* --- Replace the Image component with MapView --- */}
        <MapView
          style={{ width: '100%', height: 200, borderRadius: 20 }} // Increase height for better visibility
          initialRegion={COFFEE_SHOP_LOCATION}
          // The following props make it static/display-only if you don't want interaction,
          // but removing them makes it fully interactive (recommended for better experience)
          // scrollEnabled={false}
          // zoomEnabled={false}
          // pitchEnabled={false}
          // rotateEnabled={false}
        >
          {/* Add a Marker for the shop's location */}
          <Marker
            coordinate={{
              latitude: COFFEE_SHOP_LOCATION.latitude,
              longitude: COFFEE_SHOP_LOCATION.longitude,
            }}
            title="Coffee Shop"
            description="555 Coffee Lane"
            pinColor="red" // Or any color you prefer
          />
        </MapView>

        {/* --- Add a "Get Directions" Button/Link below the MapView --- */}
<Text onPress={openMapApp} style={{
    textAlign: 'center',
    padding: 10,
    backgroundColor: '#007AFF',
    color: 'white',
    borderRadius: 8,
    marginTop: 10,
    fontWeight: 'bold',
}}>
    Get Directions
</Text>
        </View>

        <View style={styles.textView}>
          <Text style={styles.text}>
            Phone:{'\n'}
            <Link href="tel:5555555555" style={styles.link}>555-555-5555</Link>{'\n'}
            or{' '}
            <Link href="sms:5555555555" style={styles.link}>Click Here to Text!</Link>
          </Text>
        </View>

        <View style={styles.textView}>
          <Text style={styles.text}>
            Hours:{'\n'}
            <Text>Open 6am to 4pm daily.</Text>{'\n'}
          </Text>
       
        </View>

      </View>
          </ScrollView>
    </SafeAreaView>
  );
}

function createStyles(theme: { text: any; background: any; headerBackground?: string; tint?: string; icon?: string; tabIconDefault?: string; tabIconSelected?: string; }, colorScheme: string | null | undefined) {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.background,
      paddingTop: 0,
      flexGrow: 1,
      flex: 1,
    },
    scrollContent: {
      flexGrow: 1, // Allows content to fill the screen or expand for scrolling
      paddingBottom: 20, 
    },
    imgContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
      marginBottom: 20,
      // Set a fixed height for the image container
      backgroundColor: colorScheme === 'dark' ? '#353636' : '#D0D0D0',
      height: 250,
    },
    textContainer: {
      backgroundColor: theme.background,
      padding: 12,
    },
    title: {
      color: theme.text,
      fontSize: 24,
      fontWeight: 'bold',
      lineHeight: 32,
      marginBottom: 10,
    },
    textView: {
      marginBottom: 10,
    },
    text: {
      color: theme.text,
      fontSize: 16,
      lineHeight: 24,
    },
    link: {
      textDecorationLine: 'underline',
    }
  });
}
