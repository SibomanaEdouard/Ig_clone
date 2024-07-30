import React from 'react';
import { View, Text } from 'react-native';
import SearchComponent from '../components/SearchComponent';

const SearchScreen = () => {
  return (
    <View>
      <Text>Search Users</Text>
      <SearchComponent />
    </View>
  );
};

export default SearchScreen;
