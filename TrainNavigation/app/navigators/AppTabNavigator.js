import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens/HomeScreen';
import {MessagesScreen, StackMessagesScreen} from '../screens/MessagesScreen';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {SwitchNavigator} from './SwitchNavigator';
import {DrawerNavigator, StackDrawerNavigator} from './DrawerNavigator';

const Tab = createBottomTabNavigator();

const AppTabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            const icons = {
              Home: 'home',
              Messages: 'message1',
              Notification: 'notification',
              More: 'rightcircleo',
            };
            return (
              <AntDesign name={icons[route.name]} color={color} size={size} />
            );
          },
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Messages" component={StackMessagesScreen} />
        <Tab.Screen name="Notification" component={SwitchNavigator} />
        <Tab.Screen name="More" component={DrawerNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppTabNavigator;
