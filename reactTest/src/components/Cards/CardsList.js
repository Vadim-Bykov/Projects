import React from 'react';
import {FlatList} from 'react-native';
import {Card} from './Card';

export const CardsList = ({cards, goToDescription}) => {
  return (
    <FlatList
      numColumns={2}
      contentContainerStyle={{alignItems: 'center'}}
      data={cards}
      renderItem={({item}) => (
        <Card card={item} goToDescription={goToDescription} />
      )}
      keyExtractor={item => item.id}
    />
  );
};
