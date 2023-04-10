import { View, Text, SafeAreaView, Image } from 'react-native';
import React from 'react';
import HeaderButton from '../components/HeaderButton';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';

const PaymentScreen = ({ route }) => {
  const back = require('../assets/back.png');
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor: '#1c1c27', flex: 1 }}>
      <View style={{ flex: 1, marginLeft: 10, marginRight: 20 }}>
        {/* Header Button */}
        <View>
          <HeaderButton
            onPress={() => navigation.goBack()}
            icon={
              <Image
                source={back}
                style={{ width: 20, height: 20, tintColor: '#fff' }}
              />
            }
          />
        </View>

        {/* Card Design */}

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
            marginLeft: 10,
          }}
        >
          <View
            style={{
              height: 220,
              width: 350,
              backgroundColor: '#063970',
              borderRadius: 20,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 10,
              }}
            >
              <Image
                source={require('../assets/credit-card.png')}
                style={{ width: 40, height: 40 }}
              />
              <Image
                source={require('../assets/mastercard.png')}
                style={{ width: 60, height: 40 }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                marginTop: 40,
              }}
            >
              <Text style={{ color: '#fff', fontWeight: 500, fontSize: 18 }}>
                XXXX
              </Text>
              <Text style={{ color: '#fff', fontWeight: 500, fontSize: 18 }}>
                XXXX
              </Text>
              <Text style={{ color: '#fff', fontWeight: 500, fontSize: 18 }}>
                XXXX
              </Text>
              <Text style={{ color: '#fff', fontWeight: 500, fontSize: 18 }}>
                1234
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginLeft: 10,
                marginRight: 10,
                marginTop: 60,
              }}
            >
              <Text style={{ color: '#fff', fontWeight: 500, fontSize: 16 }}>
                Hayati
              </Text>
              <Text style={{ color: '#fff', fontWeight: 500, fontSize: 16 }}>
                04/25
              </Text>
            </View>
          </View>
        </View>

        {/* Details section */}

        <View>
          <View style={{ margin: 10, marginTop: 15 }}>
            <Text style={{ color: '#f27807', fontWeight: 400, fontSize: 18 }}>
              Card Number:
            </Text>
            <TextInput
              placeholder="Enter your card number"
              placeholderTextColor={'gray'}
              style={{
                borderWidth: 1,
                borderColor: 'gray',
                marginTop: 10,
                borderRadius: 20,
                padding: 15,
                color: '#fff',
                width: '100%',
              }}
            />
          </View>
          <View style={{ margin: 10 }}>
            <Text style={{ color: '#f27807', fontWeight: 400, fontSize: 18 }}>
              Card Holder Name:
            </Text>
            <TextInput
              placeholder="Enter your card holder name"
              placeholderTextColor={'gray'}
              style={{
                borderWidth: 1,
                borderColor: 'gray',
                marginTop: 10,
                borderRadius: 20,
                padding: 15,
                color: '#fff',
                width: '100%',
              }}
            />
          </View>
          <View style={{ margin: 10 }}>
            <Text style={{ color: '#f27807', fontWeight: 400, fontSize: 18 }}>
              CVC CODE:
            </Text>
            <TextInput
              secureTextEntry
              placeholder="Enter your cvc code"
              placeholderTextColor={'gray'}
              style={{
                borderWidth: 1,
                borderColor: 'gray',
                marginTop: 10,
                borderRadius: 20,
                padding: 15,
                color: '#fff',
                width: '100%',
              }}
            />
          </View>
          <View style={{ margin: 10 }}>
            <Text style={{ color: '#f27807', fontWeight: 400, fontSize: 18 }}>
              Expiry Date:
            </Text>
            <TextInput
              placeholder="Enter your card Expiry Date"
              placeholderTextColor={'gray'}
              style={{
                borderWidth: 1,
                borderColor: 'gray',
                marginTop: 10,
                borderRadius: 20,
                padding: 15,
                color: '#fff',
                width: '100%',
              }}
            />
          </View>
        </View>

        {/* End of Details Section */}

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f27807',
            padding: 20,
            marginTop: 10,
            borderRadius: 30,
          }}
        >
          <TouchableOpacity>
            <Text
              style={{
                color: '#fff',
                fontWeight: 500,
                fontSize: 24,
                letterSpacing: 2.5,
              }}
            >
              PAY ₹{route?.params?.totalAmount}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PaymentScreen;
