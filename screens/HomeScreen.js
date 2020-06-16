import React from 'react';

import {View, Text, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to details screen"
        // must provide onPress and add navigation to the top of the props

        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export default HomeScreen;
