import { View, Text } from 'react-native';
import React from 'react';
import { Image } from 'react-native';

const TabIcon = ({ focused, label, icon }) => {
  return (
    <View
      style={{
        marginHorizontal: 35,
        justifyContent: 'space-evenly',

        flexWrap: 'wrap',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          backgroundColor: focused ? '#f27807' : 'transparent',
          padding: 8,
          borderRadius: 20,
          width: 95,
        }}
      >
        <Image
          source={icon}
          resizeMode="contain"
          style={{
            width: label === 'Tickets' ? (focused ? 25 : 30) : 25,
            height: label === 'Tickets' ? (focused ? 25 : 30) : 25,
            tintColor: focused ? '#fff' : 'gray',
          }}
        />
        {focused && (
          <Text style={{ color: '#fff', marginLeft: 4 }}>{label}</Text>
        )}
      </View>
    </View>
  );
};

export default TabIcon;
