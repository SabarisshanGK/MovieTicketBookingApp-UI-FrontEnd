import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  Platform,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import HeaderButton from './HeaderButton';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { MoviesCard } from '../Contexts';

const width = Dimensions.get('window').width;
const MovieDetail = ({ route }) => {
  // const [selectedMovie, setSelectedMovie] = useState(null);
  const back = require('../assets/back.png');
  const save = require('../assets/save.png');
  const play = require('../assets/play.png');
  const data = route?.params?.param;
  //console.log(data);
  const navigation = useNavigation();
  const { bookmarked, setBookmarked, wishlist } = useContext(MoviesCard);
  const onBookmark = (item) => {
    setBookmarked(item);
    wishlist.push(bookmarked);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1c1c27' }}>
      <ImageBackground
        source={data?.item?.backgroundPic}
        resizeMode="cover"
        style={{ width: '100%', height: 450 }}
      >
        <View style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: Platform.OS === 'ios' ? 25 : 20,
              paddingHorizontal: 10,
              borderRadius: 50,
            }}
          >
            <HeaderButton
              onPress={() => navigation.goBack()}
              icon={
                <Image
                  source={back}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: '#fff',
                  }}
                />
              }
            />
            <HeaderButton
              onPress={() => onBookmark(data)}
              icon={
                <Image
                  source={save}
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: '#fff',
                  }}
                />
              }
            />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
            }}
          >
            <View
              style={{
                position: 'absolute',
                top: 135,
                bottom: 225,
                left: width / 2.2,
                right: 0,
              }}
            >
              <HeaderButton
                icon={
                  <Image
                    source={play}
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 20,
                      height: 20,
                      tintColor: '#fff',
                      marginLeft: 5,
                    }}
                  />
                }
              />
            </View>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              colors={['transparent', '#1c1c27']}
              style={{
                width: '100%',
                height: 150,
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}
            >
              <View
                style={{
                  margin: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  position: 'absolute',
                  left: 0,
                  bottom: 2,
                  gap: 25,
                }}
              >
                <View
                  style={{
                    backgroundColor: '#eebd0d',
                    padding: 10,
                    borderRadius: 20,
                  }}
                >
                  <Text style={{ color: 'black', fontSize: 15 }}>IMDB 6.8</Text>
                </View>
                <View
                  style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}
                >
                  <AntDesign name="star" size={24} color="#eebd0d" />
                  <Text style={{ color: '#eebd0d', fontSize: 24 }}>4.8</Text>
                  <Text style={{ color: '#fff' }}>(11.8k reviews)</Text>
                </View>
              </View>
            </LinearGradient>
          </View>
        </View>
      </ImageBackground>
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        decelerationRate={0}
        scrollEventThrottle={16}
      >
        <View style={{ paddingBottom: 60 }}>
          <Text
            style={{
              marginTop: 10,
              color: '#fff',
              fontSize: 34,
              fontWeight: 500,
              letterSpacing: 0.8,
              marginLeft: 10,
            }}
          >
            {data?.item?.name}
          </Text>
          <View
            style={{
              margin: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              gap: 10,
              flexWrap: 'wrap',
            }}
          >
            {data?.item.genre.map((ele) => (
              <View
                style={{
                  backgroundColor: '#34353e',
                  padding: 10,
                  borderRadius: 20,
                  paddingHorizontal: 13,
                }}
              >
                <Text style={{ color: '#fff', fontWeight: 200 }}>
                  {ele?.category}
                </Text>
              </View>
            ))}
            <Text style={{ marginTop: 8, lineHeight: 25, color: 'gray' }}>
              {data?.item?.desc}
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: '#fff',
                fontWeight: 500,
                fontSize: 26,
                letterSpacing: 3,
                marginLeft: 10,
              }}
            >
              Languages
            </Text>
            <View
              style={{
                margin: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: 10,
                flexWrap: 'wrap',
              }}
            >
              {data?.item?.languages?.map((moli) => (
                <View
                  style={{
                    backgroundColor: '#34353e',
                    padding: 10,
                    borderRadius: 20,
                    paddingHorizontal: 13,
                  }}
                >
                  <Text style={{ color: '#fff', fontWeight: 200 }}>
                    {moli?.name}
                  </Text>
                </View>
              ))}
            </View>
          </View>
          <View>
            <Text
              style={{
                color: '#fff',
                fontWeight: 500,
                fontSize: 26,
                letterSpacing: 3,
                marginLeft: 10,
              }}
            >
              Casts
            </Text>
            <View
              style={{
                margin: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                gap: 50,
                flexWrap: 'wrap',
              }}
            >
              {data?.item?.cast?.map((cast) => (
                <View style={{ alignItems: 'center' }}>
                  <Image
                    source={cast?.castPic}
                    style={{ width: 80, height: 100, borderRadius: 10 }}
                  />
                  <Text
                    style={{ color: '#fff', fontWeight: 200, marginTop: 10 }}
                  >
                    {cast?.name.length > 8
                      ? `${cast?.name.slice(0, 8)}..`
                      : cast?.name}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          flex: 1,
          position: 'relative',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 0,
            backgroundColor: '#f27807',
            padding: 20,
            borderRadius: 30,
          }}
          onPress={() => navigation.navigate('TheatreDetail', { param: data })}
        >
          <Text
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontWeight: 500,
              fontSize: 15,
              letterSpacing: 2,
            }}
          >
            Reserve your Tickets
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MovieDetail;
