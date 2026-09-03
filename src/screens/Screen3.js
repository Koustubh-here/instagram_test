import { Image, Text, ScrollView } from 'react-native';

const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 64,
    height: 64,
};

const Screen3 = () => (
    <ScrollView>
        <Text style={{ fontSize: 96 }}>Hi bro</Text>
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Text style={{ fontSize: 96 }}>Scroll we do</Text>
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
    </ScrollView>
);

export default Screen3;