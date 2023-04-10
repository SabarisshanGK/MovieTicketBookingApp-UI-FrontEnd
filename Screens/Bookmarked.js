import { View, Text, Image } from 'react-native';
import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native';
import { MoviesCard } from '../Contexts';

const Bookmarked = () => {
  const { bookmarked, wishlist } = useContext(MoviesCard);
  console.log(wishlist);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1c1c27' }}>
      {bookmarked ? (
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
            source={bookmarked.item.pic}
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
            {bookmarked.item.name}
          </Text>
        </View>
      ) : (
        <View>
          <Text>No data found</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Bookmarked;
