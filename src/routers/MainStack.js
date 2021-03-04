import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TourDetail from 'screens/Tour/TourDetail';
import 'react-native-gesture-handler';
import ListTours from 'screens/Tour/ListTours';
import DetailContent from 'screens/Tour/DetailContent';
import ListReviews from 'screens/Tour/ListReviews';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="ListTours" component={ListTours} />
        <Stack.Screen name="TourDetail" component={TourDetail} />
        <Stack.Screen name="DetailContent" component={DetailContent} />
        <Stack.Screen name="ListReviews" component={ListReviews} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainStack;
