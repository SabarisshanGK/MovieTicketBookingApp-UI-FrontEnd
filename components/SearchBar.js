import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { Octicons } from '@expo/vector-icons';
import { Searchbar } from 'react-native-paper';
import { Image } from 'react-native';

const SearchBar = () => {
  return (
    <View
      style={{
        marginTop: 40,
        flexDirection: 'row',
        width: '95%',
      }}
    >
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: '95%',
          flex: 1,
          borderRadius: 30,
          flexDirection: 'row',
          padding: 15,
          backgroundColor: '#34353e',
        }}
      >
        <Image
          style={{ width: 20, height: 20, tintColor: 'gray' }}
          source={require('../assets/search.png')}
        />

        <TextInput
          placeholder="Search movie...🎥🍿"
          placeholderTextColor="gray"
          style={{
            color: '#fff',
            flex: 1,
            marginLeft: 8,
          }}
        />
      </View>
    </View>
  );
};

export default SearchBar;
