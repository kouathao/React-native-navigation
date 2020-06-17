import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import MainTabScreen from './screens/MainTabScreen';

// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// implement Drawer constaince
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={MainTabScreen} />
        {/* <Drawer.Screen name="Details" component={DetailsStackScreen} /> */}
      </Drawer.Navigator>
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
