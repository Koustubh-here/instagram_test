import { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'

const Screen2 = ({ name }) => {
    const navigation = useNavigation();
    const [isHungry, setIsHungry] = useState(true);

    const giveFood = () => {
        setIsHungry(false);

        setTimeout(() => {
            setIsHungry(true);
        }, 10000);
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text>
                I am {name}, and I am {isHungry ? 'hungry' : 'full'}!
            </Text>
            <Button
                onPress={giveFood}
                disabled={!isHungry}
                title={isHungry ? 'Give me some food!' : 'Thank you'}
            />

            <View style={{ flex: 1, justifyContent: "space-around" }}>
                <Button
                    title="Next"
                    onPress={() => navigation.navigate('Screen3')}
                />
            </View>
        </View>
    )
}

const Cafe = () => {
    return (
        <>
            <Screen2 name="psps" />
        </>
    );
};
export default Cafe;