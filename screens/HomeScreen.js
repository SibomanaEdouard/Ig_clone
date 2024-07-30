import React from 'react';
import { View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button title="Capture Media" onPress={() => navigation.navigate('Capture')} />
      <Button title="Saved Media" onPress={() => navigation.navigate('Saved')} />
      <Button title="Search Users" onPress={() => navigation.navigate('Search')} />
    </View>
  );
};

export default HomeScreen;
