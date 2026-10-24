import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Plus, Heart, Send, Circle, EllipsisVertical, MessageCircle, Repeat, Bookmark } from 'lucide-react-native';

import Stories from '../components/Stories';
import BottomNav from '../components/BottomNav';
import ActionButton from '../components/ActionButton';

const POST_IMAGE = require('../assets/Screenshot 2026-10-15 000229.png');

// Hardcoded data. Each object is one post. Later this comes from a database.
const POSTS = [
    { id: '1', username: 'User616', image: POST_IMAGE, likes: 450, comments: 11, reposts: 450, shares: 450 },
    { id: '2', username: 'User617', image: POST_IMAGE, likes: 120, comments: 8, reposts: 30, shares: 15 },
    { id: '3', username: 'User618', image: POST_IMAGE, likes: 987, comments: 54, reposts: 210, shares: 76 },
];

// One post. Everything that differs between posts arrives through props.
const Post = ({ username, image, likes, comments, reposts, shares }) => {
    // Shape of THIS post's image, so any picture fits fully with no bars.
    const { width, height } = Image.resolveAssetSource(image);

    return (
        <View>
            <View style={styles.postHeader}>
                <Circle size={30} color="black" />
                <Text style={styles.postUsername}>{username}</Text>
                <EllipsisVertical size={25} color="black" />
            </View>

            <Image
                source={image}
                style={[styles.postImage, { aspectRatio: width / height }]}
                resizeMode="contain"
            />

            <View style={styles.postFooter}>
                <View style={styles.actionsLeft}>
                    <ActionButton icon={Heart} count={likes} label="Like" />
                    <ActionButton icon={MessageCircle} count={comments} label="Comment" />
                    <ActionButton icon={Repeat} count={reposts} label="Repost" />
                    <ActionButton icon={Send} count={shares} label="Share" />
                </View>
                <ActionButton icon={Bookmark} label="Save" />
            </View>
        </View>
    );
};

const Screen4 = () => {
    function openWebsite(websiteLink) {
        Linking.openURL(websiteLink)
    }
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

            <ScrollView showsVerticalScrollIndicator={false}>
                <Stories />

                {POSTS.map((post) => (
                    <Post key={post.id} {...post} />
                ))}
            </ScrollView>

            <BottomNav />

            <TouchableOpacity
                onPress={() => openWebsite('https://www.linkedin.com/in/koustubhausula/')}
            >
                <Text>Read more</Text>
            </TouchableOpacity>
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
        paddingVertical: 8,
    },

    postUsername: {
        flex: 1,
        marginLeft: 10,
        fontSize: 14,
        fontWeight: '600',
    },
    postImage: {
        width: '100%',
    },
    postFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 8,
    },
    actionsLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
});

export default Screen4;