import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // apply styles to global header
        screenOptions={{
          headerStyle: {
            backgroundColor: '#009387',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          // apple styles to header individual
          options={{
            title: 'Overview',
          }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

{
  /* HOW TO SETUP NAV tutorial https://www.youtube.com/watch?v=a9jSyZXYGn8&list=PLQWFhX-gwJbmmqcP-9zMXBaxQbGKfIJY2&index=2&t=0s */
}

// open safari browser

{
  /* <Button
title="Go to Google"
onPress={() => {
  Linking.openURL('https://www.google.com/maps/search/shooting+range/');
}}
/> */
}
