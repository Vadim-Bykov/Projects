import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import FriendList from '../components/FriendList';

const FriendsScreen = ({navigation}) => {
  const [friends, setFriends] = useState([
    {id: '1', name: 'Vadim'},
    {id: '2', name: 'Tanya'},
    {id: '3', name: 'Eva'},
    {id: '4', name: 'Slava'},
  ]);

  const goToFriend = name => {
    navigation.navigate('Friend', {name});
  };

  const toggleMenu = () => navigation.toggleDrawer();

  return (
    <>
      <FriendList friends={friends} goToFriend={goToFriend} />
      <Button title="Side menu" onPress={toggleMenu} />
    </>
  );
};

export default FriendsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
