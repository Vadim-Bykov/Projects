import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import FriendList from '../components/FriendList';
import {useCallback} from 'react';

const FriendsScreen = ({navigation}) => {
  const [friends, setFriends] = useState([
    {id: '1', name: 'Vadim'},
    {id: '2', name: 'Tanya'},
    {id: '3', name: 'Eva'},
    {id: '4', name: 'Slava'},
  ]);

  const goToFriend = useCallback(
    name => navigation.navigate('Friend', {name}),
    [],
  );
  // const toggleMenu = () => navigation.toggleDrawer();
  const toggleMenu = () => navigation.dispatch(DrawerActions.toggleDrawer());

  return (
    <View style={styles.container}>
      <FriendList friends={friends} goToFriend={goToFriend} />
      <Button title="Menu" onPress={toggleMenu} />
    </View>
  );
};

export default FriendsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    alignItems: 'center',
  },
});
