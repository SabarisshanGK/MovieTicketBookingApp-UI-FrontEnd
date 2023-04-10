import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../Screens/HomePage';
import Tickets from '../Screens/Tickets';

import Profile from '../Screens/Profile';

import TabIcon from './TabIcon';
import Bookmarked from '../Screens/Bookmarked';

const Tab = createBottomTabNavigator();

const home = require('../assets/film.png');
const tickets = require('../assets/tickets.png');
const Bookmark = require('../assets/save.png');
const user = require('../assets/user.png');

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: '#1c1c27',
          borderTopColor: 'transparent',
          height: 90,
          paddingLeft: 30,
          paddingRight: 30,
          width: '100%',
          justifyContent: 'space-evenly',
        },
      }}
    >
      <Tab.Screen
        name="home"
        component={HomePage}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} label="Movie" icon={home} />
          ),
        }}
      />
      <Tab.Screen
        name="Tickets"
        component={Tickets}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} label="Tickets" icon={tickets} />
          ),
        }}
      />
      <Tab.Screen
        name="Bookmarks"
        component={Bookmarked}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} label="WishList" icon={Bookmark} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} label="Profile" icon={user} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
