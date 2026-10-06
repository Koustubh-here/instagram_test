import { View, Image, Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import React from 'react';

// 1. Your data lives here — this is what you edit to add/remove cards
const places = [
    {
        id: '1',
        title: 'Hawa Mahal',
        label: 'Jaipur',
        description:
            "The Hawa Mahal is a palace in the city of Jaipur, Rajasthan, India. Built from red and pink sandstone, it is on the edge of the City Palace, Jaipur, and extends to the Zenana, or women's chambers.",
        distance: '1500 kms away',
        image:
            'https://lh3.googleusercontent.com/grass-cs/ACvplmPheiV-RjReqKjoJc_XdTREN1l1NvYyEqhwW7FO7q1aDuc6J-aFhS50n8TB4IubpSM6Yk26im4HcNW9iLARFsnTIQReWue31ckxGwMQyOXqBRqOPbGsFnUCYUlrFxramQURaUEoFg=w326-h312-n-k-no',
    },
    {
        id: '2',
        title: 'Taj Mahal',
        label: 'Agra',
        description:
            'An ivory-white marble mausoleum on the right bank of the river Yamuna, commissioned in 1632 by the Mughal emperor Shah Jahan.',
        distance: '1200 kms away',
        image: 'https://lh3.googleusercontent.com/grass-cs/ACvplmN8duzfIdu-GXedck4iNzZNV6jgwAk86JXS-j4sADdrb_s_4XoYu_Hum7lu3xvkJqJzvvQvhBi_rzKeENPSSxCB7Y-GDADvBW-baV-Xn5PdWb6EbYBo85ExGBdEWkdznqrDKc0X=w326-h312-n-k-no',
    },
    // 👉 add more objects here to add more cards
];

// 2. A small reusable component for one card
const PlaceCard = ({ place }) => (
    <View style={[styles.card, styles.cardElevated]}>
        <Image source={{ uri: place.image }} style={styles.cardImage} />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>{place.title}</Text>
            <Text style={styles.cardlabel}>{place.label}</Text>
            <Text style={styles.cardDescription}>{place.description}</Text>
            <Text style={styles.cardFooter}>{place.distance}</Text>
        </View>
    </View>
);

// 3. The screen just maps over the data
const Screen3 = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.scrollContent}>
            <Text style={styles.headingtext}>Trending Places</Text>
            {places.map((place) => (
                <PlaceCard key={place.id} place={place} />
            ))}
            <Pressable
                style={styles.nextButton}
                onPress={() => navigation.navigate('Screen4')}
            >
                <Text style={styles.nextButtonText}>Next</Text>
            </Pressable>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    headingtext: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        paddingVertical: 8,
    },
    card: {
        width: 360,
        height: 380,
        borderRadius: 6,
        marginHorizontal: 12,
        marginVertical: 6,
    },
    cardElevated: {
        backgroundColor: '#FFFFFF',
        elevation: 3,
        shadowOffset: { width: 1, height: 1 },
    },
    cardImage: {
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,
    },
    cardTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    cardlabel: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    cardDescription: {
        fontSize: 12,
        marginBottom: 12,
    },
    cardFooter: {
        fontSize: 16,
        fontWeight: 'semibold',
        marginTop: 20,
        marginLeft: 210,
    },
    scrollContent: {
        paddingBottom: 25,
    },
    nextButton: {
        backgroundColor: '#000000',
        width: 150,
        height: 50,
        borderRadius: 8,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },
    nextButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default Screen3;