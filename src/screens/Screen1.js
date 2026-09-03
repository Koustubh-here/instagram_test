import React from 'react'
import { View, Text, Button, StyleSheet, Pressable, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Screen1 = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>

        <View style={[styles.card, styles.cardTwo]}>
          <Text>Yellow</Text>
        </View>

        <View style={[styles.card, styles.cardThree]}>
          <Text>Green</Text>
        </View>

      </View>

      <Text style={styles.headingText2}>Elevated Cards</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>

        <View style={styles.container}>

          <View style={[styles.card, styles.cardFour]}>
            <Text>Blue</Text>
          </View>

          <View style={[styles.card, styles.cardFive]}>
            <Text>Violet</Text>
          </View>

          <View style={[styles.card, styles.cardOne]}>
            <Text>Red</Text>
          </View>

          <View style={[styles.card, styles.cardTwo]}>
            <Text>Yellow</Text>
          </View>

          <View style={[styles.card, styles.cardThree]}>
            <Text>Green</Text>
          </View>

          <View style={[styles.card, styles.cardOne]}>
            <Text>Red</Text>
          </View>

          <View style={[styles.card, styles.cardTwo]}>
            <Text>Yellow</Text>
          </View>

          <View style={[styles.card, styles.cardThree]}>
            <Text>Green</Text>
          </View>
        </View>


      </ScrollView>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Screen2')}
      >
        <Text style={styles.buttonText}>Next</Text>
      </Pressable>
    </SafeAreaView>

  );
};


const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8
  },
  headingText2: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 125,
    paddingHorizontal: 8,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8
  },
  card: {
    justifyContent: "center",
    alignItems: 'center',
    width: 100,
    height: 100
  },
  cardOne: {
    backgroundColor: '#EF5354',
    borderRadius: 4,
    margin: 8
  },
  cardTwo: {
    backgroundColor: '#FFEB3B',
    borderRadius: 4,
    margin: 8
  },
  cardThree: {
    backgroundColor: '#66BB6A',
    borderRadius: 4,
    margin: 8
  },
  cardFour: {
    backgroundColor: '#42A5F5',
    borderRadius: 4,
    margin: 8
  },
  cardFive: {
    backgroundColor: '#AB47BC',
    borderRadius: 4,
    margin: 8
  },

  button: {
    borderRadius: 8,
    backgroundColor: "blue",
    marginTop: 150,
    alignItems: 'center',
    padding: 12,
    width: 150,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
})

export default Screen1;