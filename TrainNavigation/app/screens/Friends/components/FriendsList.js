import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Friend} from './Friend';

const friends = [
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
];

export const FriendsList = ({goToFriend}) => {
  return (
    <FlatList
      data={friends}
      renderItem={({item}) => (
        <Friend name={item.name} goToFriend={goToFriend} />
      )}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({});
