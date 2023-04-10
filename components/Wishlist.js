import { View, Text } from 'react-native';
import React from 'react';
import { Image } from 'react-native';

const Wishlist = ({ element }) => {
  {
    element?.key === 0 ? (
      <View
        style={{
          backgroundColor: '#34353e',
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 10,
          marginLeft: 20,
          marginRight: 20,
          flexDirection: 'row',
          marginTop: 20,
        }}
      >
        <Image
          source={element?.pic}
          style={{ width: 120, height: 180, borderRadius: 20 }}
        />
        <Text
          style={{
            color: '#fff',
            fontSize: 24,
            fontWeight: 500,
            marginRight: 10,
          }}
        >
          {element?.name}
        </Text>
      </View>
    ) : null;
  }
};

export default Wishlist;
