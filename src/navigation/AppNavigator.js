import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';
import Screen4 from '../screens/Screen4';
import Screen5 from '../screens/Screen5';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
      />

      <Stack.Screen
        name="Screen1"
        component={Screen1}
      />

      <Stack.Screen
        name="Screen2"
        component={Screen2}
      />

      <Stack.Screen
        name="Screen3"
        component={Screen3}
      />

      <Stack.Screen
        name="Screen4"
        component={Screen4}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Screen5"
        component={Screen5}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
};

export default AppNavigator;