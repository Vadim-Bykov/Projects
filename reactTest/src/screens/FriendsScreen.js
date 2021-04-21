import React, {useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {FriendList} from '../components/FriendList';

export const FriendsScreen = ({navigation}) => {
  const [friends, setFriends] = useState([
    {id: '1', name: 'Vadim'},
    {id: '2', name: 'Tanya'},
    {id: '3', name: 'Eva'},
    {id: '5', name: 'Slava'},
    {id: '6', name: 'Vadim'},
    {id: '7', name: 'Tanya'},
    {id: '8', name: 'Eva'},
    {id: '9', name: 'Slava'},
    {id: '10', name: 'Vadim'},
    {id: '11', name: 'Tanya'},
    {id: '12', name: 'Eva'},
    {id: '14', name: 'Slava'},
    {id: '15', name: 'Vadim'},
    {id: '16', name: 'Tanya'},
    {id: '17', name: 'Eva'},
    {id: '18', name: 'Slava'},
  ]);

  const goToFriend = name => {
    navigation.navigate('Friend', {name});
  };

  const toggleMenu = () => navigation.toggleDrawer();

  return (
    <View style={styles.container}>
      <FriendList friends={friends} goToFriend={goToFriend} />
      <Button title="Side menu" onPress={toggleMenu} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
