import React from 'react';
import {FlatList} from 'react-native';
import {Movie} from './Movie';

export const MoviesList = ({movies, goToDescription}) => {
  return (
    <FlatList
      numColumns={2}
      contentContainerStyle={{alignItems: 'center'}}
      data={movies}
      renderItem={({item}) => (
        <Movie movie={item} goToDescription={goToDescription} />
      )}
      keyExtractor={item => item.id}
    />
  );
};
