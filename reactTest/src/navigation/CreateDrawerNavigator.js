import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {AnotherScreen} from '../screens/AnotherScreen';
import {GroupsScreen} from '../screens/GroupsScreen';
import {MusicScreen} from '../screens/MusicScreen';
import {FriendsNavigator} from './FriendsNavigator';
import {CardsNavigator} from './CardsNavigator';

const Drawer = createDrawerNavigator();

export const MyDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Groups">
      <Drawer.Screen name="Еще" component={AnotherScreen} />
      <Drawer.Screen name="Groups" component={GroupsScreen} />
      <Drawer.Screen name="Music" component={MusicScreen} />
      <Drawer.Screen name="Friends" component={FriendsNavigator} />
      <Drawer.Screen name="Cards" component={CardsNavigator} />
    </Drawer.Navigator>
  );
};
