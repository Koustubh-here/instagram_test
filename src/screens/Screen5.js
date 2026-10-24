import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function Screen5() {
    function openWebsitee(website) {
        Linking.openURL(website);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headingText}> LinkedIn Profile </Text>

            {/* The Black Card Container */}
            <View style={styles.card}>
                <Image
                    source={{ uri: 'https://cdn.prod.website-files.com/5ece31a7ed10852cac87fba4/5fae6d03d52cd18690585fd7_Essential-Tips-For-LinkedIn.jpg' }}
                    style={styles.cardImage}
                />

                {/* Clickable Button inside the card to open your link */}
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => openWebsitee('https://www.linkedin.com/in/koustubhausula/')}
                >
                    <Text style={styles.buttonText}>Open LinkedIn</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 10,
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        marginBottom: 8,
        color: '#000',
    },
    card: {
        width: 350,
        height: 340,
        borderRadius: 20,
        marginVertical: 12,
        marginHorizontal: 16,
        backgroundColor: '#000000', // Kept your black background
        padding: 15,
        justifyContent: 'space-between', // Spaces out image and button nicely
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 6,
    },
    cardImage: {
        height: 220,           // Perfectly fits the 340px card height
        width: '100%',
        resizeMode: 'cover',   // Fills the top space nicely without breaking ratio
        borderRadius: 12,      // Smooth edges matching the card style
    },
    button: {
        backgroundColor: '#0a66c2', // Official LinkedIn blue color
        width: '100%',
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default Screen5;