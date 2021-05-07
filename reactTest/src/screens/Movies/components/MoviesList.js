import React from 'react';
import {FlatList} from 'react-native';
import {useQueryClient} from 'react-query';
import {Movie} from './Movie';

export const MoviesList = ({goToDescription}) => {
  const movies = useQueryClient().getQueryData('movies');
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
