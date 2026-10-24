import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

/**
 * One tappable icon with an optional count next to it.
 * `icon` is the icon COMPONENT itself (e.g. Heart), not an element (<Heart />).
 */
const ActionButton = ({ icon: Icon, count, onPress, label }) => (
    <Pressable
        onPress={onPress}
        hitSlop={8}
        style={styles.action}
        accessibilityRole="button"
        accessibilityLabel={label}
    >
        <Icon size={25} color="black" />
        {count !== undefined && <Text style={styles.count}>{count}</Text>}
    </Pressable>
);

const styles = StyleSheet.create({
    action: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    count: {
        fontSize: 14,
        fontWeight: '600',
    },
});

export default React.memo(ActionButton);