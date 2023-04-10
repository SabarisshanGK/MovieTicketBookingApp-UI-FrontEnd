import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const HeaderButton = ({ onPress, icon, timing }) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        width: timing ? 110 : 50,
        height: 50,
        gap: timing ? 5 : 0,
        opacity: 0.6,
        borderRadius: 50,
        backgroundColor: 'gray',
        flexDirection: 'row',
      }}
      onPress={onPress}
    >
      {icon}
      {timing ? <Text style={{ color: '#fff' }}>{timing}</Text> : null}
    </TouchableOpacity>
  );
};

export default HeaderButton;
