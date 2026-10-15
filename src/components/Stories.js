import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Plus } from 'lucide-react-native';

const Stories = () => {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.storyScroll}
        >
            <View style={styles.storyContainer}>

                <View style={styles.story}>
                    <View style={styles.storyCircle}>
                        <Plus size={18} color="white" />
                    </View>

                    <Text style={styles.storyText}>
                        Your Story
                    </Text>
                </View>

                <View style={styles.story}>
                    <View style={styles.storyCircle}>
                    </View>

                    <Text style={styles.storyText}>
                        username
                    </Text>
                </View>

                <View style={styles.story}>
                    <View style={styles.storyCircle}>
                    </View>

                    <Text style={styles.storyText}>
                        username
                    </Text>
                </View>

                <View style={styles.story}>
                    <View style={styles.storyCircle}>
                    </View>

                    <Text style={styles.storyText}>
                        username
                    </Text>
                </View>

                <View style={styles.story}>
                    <View style={styles.storyCircle}>
                    </View>

                    <Text style={styles.storyText}>
                        username
                    </Text>
                </View>

                <View style={styles.story}>
                    <View style={styles.storyCircle}>
                    </View>

                    <Text style={styles.storyText}>
                        username
                    </Text>
                </View>

                <View style={styles.story}>
                    <View style={styles.storyCircle}>
                    </View>

                    <Text style={styles.storyText}>
                        username
                    </Text>
                </View>

                <View style={styles.story}>
                    <View style={styles.storyCircle}>
                    </View>

                    <Text style={styles.storyText}>
                        username
                    </Text>
                </View>

                <View style={styles.story}>
                    <View style={styles.storyCircle}>
                    </View>

                    <Text style={styles.storyText}>
                        username
                    </Text>
                </View>

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    storyScroll: {
        marginTop: 5,
        height: 110,
        flexGrow: 0,
    },

    storyContainer: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        gap: 14,
        height: 110,
    },

    story: {
        alignItems: 'center',
        width: 80,
    },

    storyCircle: {
        width: 82,
        height: 82,
        borderRadius: 41,
        backgroundColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
    },

    storyText: {
        fontSize: 12,
    },
});

export default Stories;