import { StyleSheet, Appearance, Platform, SafeAreaView, ScrollView, FlatList, View, Text, Image, TouchableOpacity } from "react-native";

import { Colors } from "@/constants/theme"
import { MENU_ITEMS } from '@/constants/MenuItems'
import MENU_IMAGES from '@/constants/MenuImages'
import { useState } from "react";

export default function MenuScreen() {
    const colorScheme = Appearance.getColorScheme();
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

    const [sortedMenuItems, setSortedMenuItems] = useState(MENU_ITEMS);
    const [sortOrder, setSortOrder] = useState('default');

    const handleSort = () => {
        const newSortOrder = sortOrder === 'lowToHigh' ? 'highToLow' : 'lowToHigh';
        const newItems = [...MENU_ITEMS].sort((a, b) => {
            if (newSortOrder === 'lowToHigh') {
                return Number(a.price) - Number(b.price);
            } else {
                return Number(b.price) - Number(a.price);
            }
        });
        setSortedMenuItems(newItems);
        setSortOrder(newSortOrder);
    };

    const styles = createStyles(theme, colorScheme);
   
const Container = Platform.OS === 'web' ? View : SafeAreaView;
    const separatorComp = <View style={styles.separator} />;
    const footerComp = <Text style={styles.footerText}>End of Menu</Text>;
    
    return (
        <Container style={{ flex: 1, backgroundColor: theme.background }}>
            <View style={styles.sortButtonContainer}>
                <TouchableOpacity onPress={handleSort} style={styles.sortButton}>
                    <Text style={styles.sortButtonText}>
                        {sortOrder === 'lowToHigh' ? 'Sort: Price High to Low' : 'Sort: Price Low to High'}
                    </Text>
                </TouchableOpacity>
            </View>
            <FlatList
                style={{ flex: 1 }}
                data={sortedMenuItems}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.contentContainer}
                ItemSeparatorComponent={() => separatorComp}
                ListFooterComponent={() => footerComp}
                ListEmptyComponent={() => <Text style={styles.emptyText}>No items</Text>}
                renderItem={({ item }) => (
                    <View style={styles.row}>
                        <View style={styles.menuTextRow}>
                            <View style={styles.titleRow}>
                                <Text style={[styles.menuItemTitle, styles.menuItemText]}>{item.title}</Text>
                                <Text style={[styles.menuItemText, styles.priceText]}>£{Number(item.price).toFixed(2)}</Text>
                            </View>
                            <Text style={[styles.menuItemText, styles.descriptionText]}>{item.description}</Text>
                        </View>
                        <Image
                            source={MENU_IMAGES[item.id - 1]}
                            style={styles.menuImage}
                        />
                    </View>
                )}
            />
        </Container>
    );
}

function createStyles(theme: { text: any; background?: string; headerBackground?: string; tint?: string; icon?: string; tabIconDefault?: string; tabIconSelected?: string; }, colorScheme: string | null | undefined) {
    return StyleSheet.create({
        contentContainer: {
            paddingTop: 10,
            paddingBottom: 20,
            paddingHorizontal: 12,
            flexGrow: 1,
        },
        footerText: {
            color: theme.text,
            marginHorizontal: 'auto',
            textAlign: 'center',
        },
        emptyText: {
            color: theme.text,
            textAlign: 'center',
            marginTop: 50,
        },
        separator: {
            height: 1,
            backgroundColor: colorScheme === 'dark' ? 'papayawhip' : "#000",
            width: '50%',
            maxWidth: 300,
            marginHorizontal: 'auto',
            marginBottom: 10,
        },
        row: {
            flexDirection: 'row',
            width: '100%',
            maxWidth: 600,
            height: 100,
            marginBottom: 10,
            borderStyle: 'solid',
            borderColor: colorScheme === 'dark' ? 'papayawhip' : '#000',
            borderWidth: 1,
            borderRadius: 20,
            overflow: 'hidden',
            marginHorizontal: 'auto',
        },
        menuTextRow: {
            width: '65%',
            paddingTop: 10,
            paddingLeft: 10,
            paddingRight: 5,
            flexGrow: 1,
        },
        titleRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 5,
        },
        descriptionText: {
            color: theme.text,
        },
        priceText: {
            color: theme.text,
        },
        menuItemTitle: {
            fontSize: 18,
            textDecorationLine: 'underline',
        },
        menuItemText: {
            color: theme.text,
        },
        menuImage: {
            width: 100,
            height: 100,
        },
        sortButtonContainer: {
            padding: 12,
            alignItems: 'center',
        },
        sortButton: {
            backgroundColor: colorScheme === 'dark' ? '#fff' : '#000',
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 25,
        },
        sortButtonText: {
            color: colorScheme === 'dark' ? '#000' : '#fff',
            fontWeight: 'bold',
        }
    });
}