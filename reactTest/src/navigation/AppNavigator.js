import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeedScreen from '../screens/FeedScreen';
import MessagesScreen from '../screens/MessagesScreen';
import SearchScreen from '../screens/SearchScreen';
import {createStackNavigator} from '@react-navigation/stack';
import NotificationSwitch from './NotificationNavigator';
import MyDrawer from './CreateDrawerNavigator';

const FeedNavigator = createStackNavigator();

const FeedStack = () => (
  <FeedNavigator.Navigator
    screenOptions={{
      headerTitleAlign: 'center',
    }}>
    <FeedNavigator.Screen name="News" component={FeedScreen} />
  </FeedNavigator.Navigator>
);

const SearchStack = () => (
  <FeedNavigator.Navigator>
    <FeedNavigator.Screen name="Search" component={SearchScreen} />
  </FeedNavigator.Navigator>
);

const MessageStack = () => (
  <FeedNavigator.Navigator>
    <FeedNavigator.Screen name="Messages" component={MessagesScreen} />
  </FeedNavigator.Navigator>
);

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Search"
      tabBarOptions={{
        activeTintColor: 'red',
        tabStyle: {justifyContent: 'center'},
      }}>
      <Tab.Screen name="News" component={FeedStack} />
      <Tab.Screen name="Search" component={SearchStack} />
      <Tab.Screen name="Messages" component={MessageStack} />
      <Tab.Screen name="Notification" component={NotificationSwitch} />
      <Tab.Screen name="Еще" component={MyDrawer} />
    </Tab.Navigator>
  );
};

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

// const AppNavigator = createB;
