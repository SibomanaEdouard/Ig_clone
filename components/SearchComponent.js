import React, { useState } from 'react';
import { View, TextInput, FlatList, Text } from 'react-native';
import useStore from '../store/UserStore';

const SearchComponent = () => {
  const [query, setQuery] = useState('');
  const searchResults = useStore((state) => state.searchResults);
  const searchUsers = useStore((state) => state.searchUsers);

  const handleSearch = (text) => {
    setQuery(text);
    searchUsers(text);
  };

  return (
    <View>
      <TextInput
        value={query}
        onChangeText={handleSearch}
        placeholder="Search users"
        style={{ padding: 8, borderBottomWidth: 1 }}
      />
      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={{ padding: 8 }}>{item.name} (@{item.username})</Text>
        )}
      />
    </View>
  );
};

export default SearchComponent;
