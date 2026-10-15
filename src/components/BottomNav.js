import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Home, SquarePlay, Send, Search, Circle } from 'lucide-react-native';

const BottomNav = () => {
    return (
        <View style={styles.bottomnavbar}>
            <View>
                <Home size={25} color="black" />
            </View>

            <View>
                <SquarePlay size={25} color="black" />
            </View>

            <View>
                <Send size={25} color="black" />
            </View>

            <View>
                <Search size={25} color="black" />
            </View>

            <View>
                <Circle size={25} color="black" />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    bottomnavbar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,

        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderTopWidth: 0.5,
        borderTopColor: '#DBDBDB',

        paddingHorizontal: 10,
    },
})

export default BottomNav
