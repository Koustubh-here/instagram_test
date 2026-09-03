import { View, Text, TextInput, Image, Button, StyleSheet, useColorScheme } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
        }}
        style={{ width: 200, height: 200 }}
      />

      <Text>Helloo psps</Text>

      <TextInput
        defaultValue="enter your name:"
      />

      <View style={{ width: 200 }}>
        <Button
          title="enter"
          onPress={() => navigation.navigate('Screen1')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 80,
  }

})

export default HomeScreen;