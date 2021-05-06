import React from 'react';
import {createSwitchNavigator} from '@react-navigation/compat';
import {NotificationScreen} from '../screens/NotificationScreen';
import {CallScreen} from '../screens/CallScrren';

export const SwitchNavigator = createSwitchNavigator({
  Notification: NotificationScreen,
  Call: CallScreen,
});
