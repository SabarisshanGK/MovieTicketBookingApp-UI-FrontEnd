import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, { useContext, useState } from 'react';
import { SafeAreaView } from 'react-native';
import HeaderButton from '../components/HeaderButton';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';
import { Pressable } from 'react-native';
import { MoviesCard } from '../Contexts.js';

const BookingScreen = ({ route }) => {
  const dwidth = Dimensions.get('window').width;
  const data = route?.params?.param;
  const back = require('../assets/back.png');
  const clock = require('../assets/clock.png');
  const navigation = useNavigation();

  const { seats, setSeats } = useContext(MoviesCard);

  const [timings, setTimings] = useState([]);
  const [occupied, setOccupied] = useState([]);
  const [dates, setDates] = useState();
  const onTick = (item) => {
    setDates(item);
  };

  const onSeatSelect = (item) => {
    const seatSelected = seats.find((seat) => seat === item);

    if (seatSelected) {
      setSeats(seats.filter((seat) => seat !== item));
    } else {
      setSeats([...seats, item]);
    }
  };

  const subscribe = () => {
    occupied.push(...seats);
    navigation.navigate('PaymentScreen', { totalAmount: total });
    setSeats([]);
  };

  const fee = 20;
  const noOfSeats = seats.length;
  const total = seats.length > 0 ? fee + noOfSeats * 150 : 0;
  console.log(seats);
  return (
    <SafeAreaView
      style={{ position: 'relative', flex: 1, backgroundColor: '#1c1c27' }}
    >
      <View style={{ flex: 1 }}>
        <View
          style={{
            marginLeft: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginRight: 10,
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
          <HeaderButton
            icon={
              <Image
                source={clock}
                style={{ width: 20, height: 20, tintColor: '#fff' }}
              />
            }
            timing={'2hr 10min'}
          />
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image
            source={require('../assets/cinema-screen.png')}
            style={{ width: 120, height: 70, tintColor: '#f27807' }}
          />
        </View>
        <View>
          <FlatList
            data={route?.params?.seatsData}
            numColumns={7}
            showsVerticalScrollIndicator={false}
            decelerationRate={0}
            scrollEventThrottle={16}
            contentContainerStyle={{ margin: 10, marginBottom: 20 }}
            renderItem={({ item }) => {
              return (
                <Pressable
                  style={{
                    alignItems: 'center',
                    borderWidth: 0.5,
                    borderRadius: 5,
                    borderColor: '#fff',
                    margin: 6,
                    padding: 6,
                    flex: 1,

                    justifyContent: 'space-evenly',
                    backgroundColor: seats.includes(item)
                      ? '#f27807'
                      : occupied.includes(item)
                      ? '#fff'
                      : '#34353e',
                    marginBottom: 10,
                  }}
                  onPress={() => onSeatSelect(item)}
                  disabled={occupied.includes(item)}
                >
                  {seats.includes(item) ? (
                    <Text
                      style={{
                        color: '#fff',
                        backgroundColor: '#f27807',
                        //padding: 6,
                      }}
                    >
                      {item}
                    </Text>
                  ) : occupied.includes(item) ? (
                    <Text style={{ color: 'black', backgroundColor: '#fff' }}>
                      {item}
                    </Text>
                  ) : (
                    <Text>{item}</Text>
                  )}
                </Pressable>
              );
            }}
          />
          <View style={{ marginTop: 10 }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
                paddingLeft: 50,
                marginLeft: 10,
              }}
            >
              <View
                style={{
                  backgroundColor: '#34353e',
                  width: 20,
                  height: 20,
                  borderRadius: 50,
                  borderWidth: 1,
                  borderColor: '#fff',
                }}
              ></View>
              <Text style={{ color: 'gray' }}>Available</Text>
              <View
                style={{
                  backgroundColor: '#fff',
                  width: 20,
                  height: 20,
                  borderRadius: 50,
                  borderWidth: 1,
                  borderColor: '#fff',
                  marginLeft: 10,
                }}
              ></View>
              <Text style={{ color: 'gray' }}>Occupied</Text>
              <View
                style={{
                  backgroundColor: '#f27807',
                  width: 20,
                  height: 20,
                  borderRadius: 50,
                  borderWidth: 1,
                  borderColor: '#fff',
                  marginLeft: 10,
                }}
              ></View>
              <Text style={{ color: 'gray' }}>Selected</Text>
            </View>
          </View>
          <ScrollView>
            <View style={{ paddingBottom: 650 }}>
              <View style={{ marginTop: 10 }}>
                <Text
                  style={{
                    color: '#fff',
                    marginLeft: 10,
                    fontWeight: 500,
                    fontSize: 18,
                  }}
                >
                  Select Date:
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 10,
                    justifyContent: 'space-evenly',
                    marginTop: 10,
                  }}
                >
                  <FlatList
                    data={route?.params?.showDates}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    decelerationRate={0}
                    scrollEventThrottle={16}
                    renderItem={({ item }) => {
                      return (
                        <Pressable
                          style={{
                            backgroundColor:
                              dates === item ? '#fff' : '#34353e',
                            alignItems: 'center',
                            justifyContent: 'space-evenly',
                            padding: 10,
                            padding: 10,
                            marginRight: 10,
                            marginTop: 10,
                            borderRadius: 10,
                            borderColor: 'transparent',
                          }}
                          onPress={() => onTick(item)}
                        >
                          <Text
                            style={{
                              color: dates === item ? 'black' : '#fff',
                              marginBottom: 10,
                            }}
                          >
                            {item.month}
                          </Text>
                          <Text
                            style={{ color: dates === item ? 'black' : '#fff' }}
                          >
                            {item.date}
                          </Text>
                        </Pressable>
                      );
                    }}
                  />
                </View>
              </View>
              {/* select Time */}
              <View style={{ marginTop: 10, marginLeft: 10 }}>
                <Text
                  style={{
                    color: '#fff',
                    fontWeight: 500,
                    fontSize: 18,
                  }}
                >
                  Select Time:
                </Text>
                <FlatList
                  data={route?.params?.showTimings}
                  decelerationRate={0}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  scrollEventThrottle={16}
                  renderItem={({ item }) => {
                    return (
                      <Pressable
                        style={{
                          borderWidth: 1,
                          backgroundColor: timings.includes(item)
                            ? '#fff'
                            : '#34353e',
                          borderRadius: 20,
                          padding: 10,
                          marginRight: 10,
                          marginTop: 10,
                          borderColor: 'transparent',
                        }}
                        onPress={() => setTimings(item)}
                      >
                        {timings.includes(item) ? (
                          <Text style={{ color: 'black' }}>{item}</Text>
                        ) : (
                          <Text style={{ color: '#fff' }}>{item}</Text>
                        )}
                      </Pressable>
                    );
                  }}
                />
              </View>
            </View>
          </ScrollView>
          {/* end of select time */}
        </View>
        <View
          style={{
            flex: 1,
            position: 'absolute',
            bottom: 0,
            backgroundColor: '#1c1c27',
            width: dwidth,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginLeft: 20,
              marginRight: 20,
              gap: 130,
            }}
          >
            <View>
              <Text style={{ color: '#fff' }}>Total Price</Text>
              <Text
                style={{
                  color: '#f27807',
                  fontWeight: 400,
                  fontSize: 28,
                  letterSpacing: 2,
                }}
              >
                ₹{total}
              </Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: '#f27807',
                padding: 10,
                borderRadius: 30,
                paddingHorizontal: 10,
              }}
              onPress={subscribe}
            >
              <Text style={{ color: '#fff', marginHorizontal: 10 }}>
                Buy Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BookingScreen;
