import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createSwitchNavigator} from '@react-navigation/compat';
import CommentScreen from '../screens/CommentsScreen';
import NotificationScreen from '../screens/NotificationScreen';

const Stack = createStackNavigator();

const _NotificationStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Notification" component={NotificationScreen} />
  </Stack.Navigator>
);

const _CommentStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Comment" component={CommentScreen} />
  </Stack.Navigator>
);

export const Switch = createSwitchNavigator({
  Notification: _NotificationStack,
  Comment: _CommentStack,
});
