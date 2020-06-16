import React from 'react';
import {View, Text, Button} from 'react-native';

const DetailsScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="Go to details screen again..."
        onPress={() => navigation.navigate('Details')}
      />
      <Button title="Go to home" onPress={() => navigation.navigate('Home')} />
      {/* go back  */}
      <Button title="Go BACK!!!" onPress={() => navigation.goBack()} />
      {/* go to the first screen stack */}
      <Button
        title="Go to the first screen "
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

export default DetailsScreen;
