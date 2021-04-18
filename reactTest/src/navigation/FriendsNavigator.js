import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FriendScreen from '../screens/FriendScreen';
import FriendsScreen from '../screens/FriendsScreen';

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
