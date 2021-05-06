import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View, Text} from 'react-native';
import FriendScreen from '../screens/Friends/FriendScreen';
import {FriendsScreenStack} from '../screens/Friends/FriendsScreen';

const Stack = createStackNavigator();

export const FriendsNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Friends"
        component={FriendsScreenStack}
        options={{
          //  headerShown: false,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Friend"
        component={FriendScreen}
        options={({route}) => ({
          title: route.params.name,
          headerTitleAlign: 'center',
        })}
      />
    </Stack.Navigator>
  );
};
