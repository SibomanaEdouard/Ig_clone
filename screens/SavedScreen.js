import React from 'react';
import { View, Text } from 'react-native';
import SavedMediaComponent from '../components/SavedMediaComponent';

const SavedScreen = () => {
  return (
    <View>
      <Text>Saved Media</Text>
      <SavedMediaComponent />
    </View>
  );
};

export default SavedScreen;
