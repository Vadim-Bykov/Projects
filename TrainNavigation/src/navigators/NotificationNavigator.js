import React from 'react';
import {createSwitchNavigator} from '@react-navigation/compat';
import NotificationScreen from '../screens/NotificationScreen';
import CommentsScreen from '../screens/CommentsScreen';

const Switch = createSwitchNavigator({
  Notification: NotificationScreen,
  Comments: CommentsScreen,
});

export default Switch;
