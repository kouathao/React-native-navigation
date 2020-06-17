import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createDrawerNavigator} from '@react-navigation/drawer';

import {DrawerContent} from './screens/DrawerContent';

import MainTabScreen from './screens/MainTabScreen';
import SupportScreen from './screens/SupportScreen';
import SettingScreen from './screens/SettingScreen';
import BookmarkScreen from './screens/BookmarkScreen';

// implement Drawer constaince
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="SupportScreen" component={SupportScreen} />
        <Drawer.Screen name="SettingScreen" component={SettingScreen} />
        <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
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
