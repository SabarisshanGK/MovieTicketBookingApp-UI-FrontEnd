import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import HomePage from './Screens/HomePage';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './components/Tabs';
import MovieDetail from './components/MovieDetail';
import TheatreDetailsScreen from './Screens/TheatreDetailsScreen';
import BookingScreen from './Screens/BookingScreen';
import PaymentScreen from './Screens/PaymentScreen';
import { MovieContext } from './Contexts.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MovieContext>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Tabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MovieDetail"
            component={MovieDetail}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TheatreDetail"
            component={TheatreDetailsScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="BookingScreen"
            component={BookingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PaymentScreen"
            component={PaymentScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </MovieContext>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c27',
  },
});
