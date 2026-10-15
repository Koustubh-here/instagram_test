import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Plus, Heart, Home, Play, SquarePlay, Send, Search, Circle, EllipsisVertical, MessageCircle, Repeat, Bookmark } from 'lucide-react-native';

import Stories from '../components/Stories';
import BottomNav from '../components/BottomNav';

const Screen4 = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
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
            <View style={styles.postComponent}>
                <View style={styles.postHeader}>
                    <Circle size={30} color="black" />
                    <Text style={styles.postUsername}>User616</Text>
                    <EllipsisVertical size={25} color="black" />
                </View>
                <View style={styles.imageContainer}>
                    <Image source={require('../assets/Screenshot 2026-10-15 000229.png')}
                        style={styles.postImage}
                    ></Image>
                </View>
                <View style={styles.postfooter}>
                    <Heart size={25} color="black"></Heart>
                    <Text style={styles.likeCounter}>450</Text>

                    <MessageCircle size={25} color="black"></MessageCircle>
                    <Text style={styles.commentsCunter}>11</Text>

                    <Repeat size={25} color="black"></Repeat>
                    <Text style={styles.repostCounter}>450</Text>

                    <Send size={25} color="black"></Send>
                    <Text style={styles.shareCounter}>450</Text>

                    <Bookmark size={25} color="black" style={styles.saveOption}></Bookmark>
                </View>
            </View>

            <BottomNav />

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
    postHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },

    postUsername: {
        flex: 1,
        marginLeft: 10,
        fontSize: 14,
        fontWeight: '600',
    },
    postImage: {
        width: 500,
        height: 500,
        padding: 50,
    },
    postfooter: {
        flexDirection: "row",
        gap: 8,
    },
    saveOption: {
        paddingLeft: 220,
    }

});

export default Screen4; 