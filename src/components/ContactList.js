import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const contacts = [
    { uid: 1, name: 'User1', status: 'Open to work', imageUrl: 'https://i.pravatar.cc/150?img=1' },
    { uid: 2, name: 'User2', status: 'Available', imageUrl: 'https://i.pravatar.cc/150?img=2' },
    { uid: 3, name: 'User3', status: 'Busy', imageUrl: 'https://i.pravatar.cc/150?img=3' },
    { uid: 4, name: 'User4', status: 'At work', imageUrl: 'https://i.pravatar.cc/150?img=4' },
    { uid: 5, name: 'User5', status: 'Available', imageUrl: 'https://i.pravatar.cc/150?img=5' },
    { uid: 6, name: 'User6', status: 'Open to work', imageUrl: 'https://i.pravatar.cc/150?img=6' },
    { uid: 7, name: 'User7', status: 'Away', imageUrl: 'https://i.pravatar.cc/150?img=7' },
];

export default function ContactList() {
    const renderItem = ({ item }) => (
        <View style={styles.userCard}>
            <Image source={{ uri: item.imageUrl }} style={styles.userImage} />
            <View>
                <Text style={styles.userName}>{item.name}</Text>
                <Text style={styles.userStatus}>{item.status}</Text>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.mainWrapper} edges={['top', 'bottom']}>
            <Text style={styles.headingtext}>Connections</Text>
            <FlatList
                data={contacts}
                keyExtractor={(item) => item.uid.toString()}
                renderItem={renderItem}
                style={styles.container}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainWrapper: {
        flex: 1,
        paddingHorizontal: 5,
        paddingTop: 0,
    },
    headingtext: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        marginBottom: 16,
    },
    container: {
        flex: 1,
        paddingHorizontal: 16,
    },
    scrollContent: {
        paddingBottom: 8,
    },
    userCard: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        backgroundColor: '#0a66c2',
        padding: 4,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 14,
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFF',
    },
    userStatus: {
        fontSize: 12,
        color: '#FFF',
    },
});