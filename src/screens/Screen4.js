import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Plus, Heart } from 'lucide-react-native';

import Stories from '../components/Stories';

const Screen4 = () => {
    return (
        <SafeAreaView>
            <View style={styles.navBar}>

                <View style={styles.side}>
                    <Plus size={25} color="black" />
                </View>

                <View style={styles.center}>
                    <Text style={styles.headingText}>Instagram</Text>
                </View>

                <View style={styles.side}>
                    <Heart size={25} color="black" />
                </View>

            </View>

            <Stories />

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    navBar: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },

    side: {
        width: 50,
        alignItems: 'center',
    },

    center: {
        flex: 1,
        alignItems: 'center',
    },

    headingText: {
        fontSize: 25,
        fontWeight: 'bold',
    },

});

export default Screen4; 