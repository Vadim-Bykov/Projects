import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {AnotherScreenStack} from '../screens/AnotherScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {FriendsNavigator} from './FriendsNavigator';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Another" component={AnotherScreenStack} />
      <Drawer.Screen name="Friends" component={FriendsNavigator} />
    </Drawer.Navigator>
  );
};

const Stack = createStackNavigator();

export const StackDrawerNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="StackDrawer" component={DrawerNavigator} />
  </Stack.Navigator>
);
