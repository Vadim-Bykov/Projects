import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AnotherScreen from '../screens/AnotherScreen';
import GroupsScreen from '../screens/GroupsScreen';
import MusicScreen from '../screens/MusicScreen';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import FriendsNavigator from './FriendsNavigator';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  //   const dimensions = useWindowDimensions();
  return (
    <Drawer.Navigator initialRouteName="Groups">
      <Drawer.Screen name="Еще" component={AnotherScreen} />
      <Drawer.Screen name="Groups" component={GroupsScreen} />
      <Drawer.Screen name="Music" component={MusicScreen} />
      <Drawer.Screen name="Friends" component={FriendsNavigator} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
