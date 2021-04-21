import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import FriendsScreen from '../screens/FriendsScreen';
import FriendScreen from '../screens/FriendScreen';

const Stack = createStackNavigator();

const FriendsNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Friends" component={FriendsScreen} />
      <Stack.Screen
        name="Friend"
        component={FriendScreen}
        options={({route}) => ({title: route.params.name})}
      />
    </Stack.Navigator>
  );
};

export default FriendsNavigator;

const styles = StyleSheet.create({});
