import { View, Text } from 'react-native';
import React from 'react';
import Movies from '../Datas/MovieData';
import { Image } from 'react-native';
import { FlatList, Dimensions } from 'react-native';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const dwidth = Dimensions.get('window').width;
const dheight = Dimensions.get('window').height;

const LatestMovie = () => {
  const ItemSize = dwidth * 0.72;
  const Spacing = 8;
  const navigation = useNavigation();

  return (
    <View style={{ marginTop: 30 }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginRight: 20,
        }}
      >
        <Text style={{ color: '#fff', fontWeight: 400, fontSize: 25 }}>
          Latest Movies
        </Text>
        <Text style={{ color: '#f27807' }}>View all</Text>
      </View>
      <View>
        <FlatList
          data={Movies}
          horizontal
          snaptoInterval={ItemSize + Spacing}
          decelerationRate={0}
          scrollEventThrottle={16}
          keyExtractor={(item) => item.key}
          contentContainerStyle={{ marginTop: 10 }}
          showsHorizontalScrollIndicator={false}
          bounces={false}
          renderItem={(element) => {
            return (
              <View>
                {element.item.latestmovie.toLowerCase() === 'yes' && (
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#34353e',
                      padding: 10,
                      borderRadius: 10,
                      marginHorizontal: 5,
                    }}
                    onPress={() =>
                      navigation.navigate('MovieDetail', { param: element })
                    }
                  >
                    <Image
                      resizeMode="cover"
                      source={element.item.pic}
                      style={{
                        width: 150,
                        height: 190,
                        borderRadius: 10,
                      }}
                    />
                    <Text style={{ color: '#fff', marginTop: 10 }}>
                      {element.item.name}
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default LatestMovie;
