import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet} from 'react-native';
import NewsScreen from '../screens/NewsScreen';
import MessagesScreen from '../screens/MessagesScreen';
import SearchScreen from '../screens/SearchScreen';
import Switch from './NotificationNavigator';
import DrawerNavigator from './DrawerNavigator';

const Tab = createBottomTabNavigator();
const {Navigator, Screen} = createStackNavigator();

const StackNews = () => (
  <Navigator>
    <Screen name="News__" component={NewsScreen} />
  </Navigator>
);

const StackMessages = () => (
  <Navigator>
    <Screen name="Messages__" component={MessagesScreen} />
  </Navigator>
);

const StackSearch = () => (
  <Navigator>
    <Screen name="Search__" component={SearchScreen} />
  </Navigator>
);

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Search"
      tabBarOptions={{
        tabStyle: {justifyContent: 'center'},
        activeTintColor: 'red',
      }}>
      <Tab.Screen name="News" component={StackNews} />
      <Tab.Screen name="Messages" component={StackMessages} />
      <Tab.Screen name="Search" component={StackSearch} />
      <Tab.Screen name="Notification" component={Switch} />
      <Tab.Screen name="More" component={DrawerNavigator} />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
