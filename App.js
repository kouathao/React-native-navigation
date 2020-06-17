import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

import {Text, View, Image, TouchableOpacity} from 'react-native';

// implement stack constaince
const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

// create stack screen
const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
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
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      // apple styles to header individual
      options={{
        title: 'Overview',
        // add icon to the left
        headerRight: () => (
          <Icon.Button
            name="ios-menu"
            size={30}
            style={{paddingLeft: 20}}
            backgroundColor="#009387"
            onPress={() => {
              navigation.openDrawer();
            }}></Icon.Button>
        ),
      }}
    />
  </HomeStack.Navigator>
);

// create stack screen
const DetailsStackScreen = ({navigation}) => (
  <DetailsStack.Navigator
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
    <DetailsStack.Screen
      name="Details"
      component={DetailsScreen}
      // apple styles to header individual
      options={{
        headerRight: () => (
          <Icon.Button
            name="ios-menu"
            size={30}
            style={{paddingLeft: 20}}
            backgroundColor="#009387"
            onPress={() => {
              navigation.openDrawer();
            }}></Icon.Button>
        ),
      }}
    />
  </DetailsStack.Navigator>
);

// implement Drawer constaince
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Details" component={DetailsStackScreen} />
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
