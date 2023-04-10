import { View, Text, Image } from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <View style={{ flexDirection: 'column', gap: 10 }}>
        <Text style={{ color: 'gray', fontWeight: 300 }}>Welcome Sabari👋</Text>
        <Text style={{ color: '#fff', fontWeight: 500, fontSize: 19 }}>
          Let's relax and watch a movie !
        </Text>
      </View>
      <View>
        <Image
          source={require('../assets/propic.jpg')}
          style={{
            width: 55,
            height: 55,
            borderRadius: 50,
            marginLeft: 25,
          }}
        />
      </View>
    </View>
  );
};

export default Header;
