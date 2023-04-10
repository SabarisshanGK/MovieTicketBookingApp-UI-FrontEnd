import { SafeAreaView, View, ScrollView, Text, Dimensions } from 'react-native';
import React, { useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import { TouchableOpacity } from 'react-native';
import LatestMovie from '../components/LatestMovie';
import FavouriteMovies from '../components/FavouriteMovies';
const deviceHeight = Dimensions.get('window').height;

const HomePage = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1c1c27' }}>
      <ScrollView
        contentContainerStyle={{ marginLeft: 15, flexGrow: 1 }}
        bounces={false}
        showsVerticalScrollIndicator={false}
        decelerationRate={0}
        scrollEventThrottle={16}
      >
        <View style={{ paddingBottom: 65 }}>
          <Header />
          <SearchBar />
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginRight: 20,
                marginTop: 20,
                alignItems: 'center',
              }}
            >
              <Text style={{ color: '#fff', fontWeight: 400, fontSize: 25 }}>
                Categories
              </Text>
              <Text style={{ color: '#f27807' }}>View all</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                marginTop: 20,
              }}
            >
              <TouchableOpacity
                style={{
                  borderRadius: 30,
                  backgroundColor: '#34353e',
                }}
              >
                <Text
                  style={{
                    borderRadius: 5,
                    color: '#fff',
                    fontWeight: 300,
                    padding: 10,
                    marginHorizontal: 3,
                  }}
                >
                  Comedy
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderRadius: 30,
                  backgroundColor: '#34353e',
                  marginLeft: 10,
                }}
              >
                <Text
                  style={{
                    borderRadius: 5,
                    color: '#fff',
                    fontWeight: 300,
                    padding: 10,
                    marginHorizontal: 10,
                  }}
                >
                  Action
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  borderRadius: 30,
                  backgroundColor: '#34353e',
                  marginLeft: 10,
                }}
              >
                <Text
                  style={{
                    borderRadius: 5,
                    color: '#fff',
                    fontWeight: 300,
                    padding: 10,
                    marginHorizontal: 10,
                  }}
                >
                  Romance
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  borderRadius: 30,
                  backgroundColor: '#34353e',
                  marginLeft: 10,
                  marginRight: 10,
                }}
              >
                <Text
                  style={{
                    borderRadius: 5,
                    color: '#fff',
                    fontWeight: 300,
                    padding: 10,
                    marginHorizontal: 5,
                  }}
                >
                  Adventure
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <LatestMovie />
          <FavouriteMovies />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;
