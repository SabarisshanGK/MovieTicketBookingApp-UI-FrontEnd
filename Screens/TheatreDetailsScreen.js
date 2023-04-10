import { SafeAreaView, View, Text } from 'react-native';
import React, { useState } from 'react';
import HeaderButton from '../components/HeaderButton';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import { FlatList } from 'react-native';
import Theatres from '../Datas/TheatreData';
import { TouchableOpacity } from 'react-native';

const TheatreDetailsScreen = ({ route }) => {
  const navigation = useNavigation();
  const back = require('../assets/back.png');
  const [theatre, setTheatre] = useState([]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1c1c27' }}>
      <View style={{ flex: 1, marginLeft: 10 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginRight: 40,
          }}
        >
          <HeaderButton
            onPress={() => navigation.goBack()}
            icon={
              <Image
                source={back}
                style={{ width: 20, height: 20, tintColor: '#fff' }}
              />
            }
          />
          <Text style={{ color: '#fff', fontSize: 20, fontWeight: 500 }}>
            {route?.params?.param?.item?.name.toUpperCase()}
          </Text>
        </View>

        <View>
          <FlatList
            data={Theatres}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            decelerationRate={0}
            scrollEventThrottle={16}
            renderItem={(element) => {
              return (
                <TouchableOpacity
                  style={{
                    backgroundColor: '#34353e',
                    padding: 20,
                    borderRadius: 10,
                    marginLeft: 10,
                    marginRight: 20,
                    marginBottom: 10,
                    marginTop: 15,
                  }}
                  onPress={() => {
                    navigation.navigate('BookingScreen', {
                      param: element,
                      seatsData: element.item.seatData,
                      showTimings: element.item.showTiming,
                      showDates: element.item.dates,
                    });
                  }}
                >
                  <View
                    style={{ flexDirection: 'row', gap: 10, flexWrap: 'wrap' }}
                  >
                    <Image
                      source={element.item.pic}
                      style={{ width: 60, height: 60, borderRadius: 10 }}
                    />
                    <View>
                      <Text
                        style={{ color: '#fff', fontWeight: 500, fontSize: 20 }}
                      >
                        {element.item.name}
                      </Text>
                      <Text style={{ color: 'gray', lineHeight: 30 }}>
                        {element.item.address}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TheatreDetailsScreen;
