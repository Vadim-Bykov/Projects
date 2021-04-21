import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AnotherScreen from '../screens/AnotherScreen';
import GroupsScreen from '../screens/GroupsScreen';
import MusicScreen from '../screens/MusicScreen';
import FriendsScreen from '../screens/FriendsScreen';
import FriendsNavigator from './FriendsNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Groupssss">
      <Drawer.Screen name="Another" component={AnotherScreen} />
      <Drawer.Screen name="Groupssss" component={GroupsScreen} />
      <Drawer.Screen name="Music" component={MusicScreen} />
      <Drawer.Screen name="Friends" component={FriendsNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({});
