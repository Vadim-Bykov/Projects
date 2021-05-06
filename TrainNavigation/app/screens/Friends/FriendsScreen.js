import {createStackNavigator} from '@react-navigation/stack';
import {CommonActions, DrawerActions} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BurgerMenu} from '../../common/BurgerMenu';
import {FriendsList} from './components/FriendsList';

const FriendsScreen = ({navigation}) => {
  // const goToFriend = name => navigation.navigate('Friend', { name });
  const goToFriend = name =>
    navigation.dispatch(CommonActions.navigate('Friend', {name}));

  return (
    <>
      <BurgerMenu navigation={navigation} />
      <FriendsList goToFriend={goToFriend} />
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Stack = createStackNavigator();

export const FriendsScreenStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="FriendsStack"
      component={FriendsScreen}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);
